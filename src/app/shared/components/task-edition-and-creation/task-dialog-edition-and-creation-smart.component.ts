import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../core/models/user.model';
import { Task } from '../../../core/models/task.model';
import { ProjectService } from '../../../core/providers/project.service';
import { UserServices } from '../../../core/providers/user.service';
import { TaskService } from '../../../core/providers/task.service';
import { AuthService } from '../../../core/providers/auth.service';
import { Project } from '../../../core/models/project.model';
import { LpObject } from 'lp-operations';
import { LpLocalStorage } from 'lp-operations';

@Component({
    selector: 'app-task-dialog-edition-and-creation-smart',
    template: `
         <app-task-edition-and-creation [selectedProject]="selectedProject" [projectParticipants]="projectParticipants" (postTask)="postTask($event)" (putTask)="putTask($event)" [task]="taskSelected" (close)="closeDialog()" [prevDialog]="prevDialog" (dialogBack)="dialogBack()"> </app-task-edition-and-creation>
    `,
    styleUrls:['./task-edition-and-creation.component.scss']
})
export class TaskDialogEditionAndCreationSmartComponent {
    projectParticipants: User[] = [];
    @Input()taskSelected: Task;
    selectedProject:string;
    prevDialog:string;
    constructor(
        private projectService: ProjectService,
        private userService: UserServices,
        private taskService: TaskService,
        private authService: AuthService,
        private dialogRef: MatDialogRef<TaskDialogEditionAndCreationSmartComponent>,
        @Inject(MAT_DIALOG_DATA) private data) { }
    ngOnInit() {
           if(this.data && this.data.taskId){
               this.getTask(this.data.taskId);
               LpLocalStorage.set('state-data',this.data.taskId,'task-on-screen');
           } 

        this.selectedProject = this.projectService.selectedProject._id;
        this.getPanelData(this.selectedProject);
        this.prevDialog = this.data ? this.data.prevDialog : undefined; 
    }
    getTask(taskId:string) {
        this.taskService.getTaskById(taskId).subscribe((taskDb: Task) => {
            let taskSelected = LpObject.copyObject(taskDb);
            this.taskSelected = this.taskParsed(taskSelected);
            LpLocalStorage.set('state-data', this.taskSelected._id, 'task');
        })
    }
    getPanelData(selectedProject?:string) {
        if (selectedProject) {
            this.projectService.getParticipants(selectedProject).subscribe((participants: User[]) => {
                this.projectParticipants = participants;
            })
        } else {
            this.userService.getUsers(0,999999).subscribe((users: User[]) => {
                users.push(this.authService.userOnline);
                this.projectParticipants = users;
            })
        }
    }
    postTask(task: Task) {
        this.taskService.postTask(task).subscribe(() => {
            this.closeDialog();
        })
    }

    //TODO: EDIT PUT METHOD
    putTask(data:{taskChanges: { [key: string]: any },id:string}) {
        this.taskService.putTask(data.taskChanges, data.id).subscribe((task)=>{
            let taskSelected = LpObject.mergeObjects(task, data.taskChanges);
            this.taskSelected = this.taskParsed(taskSelected);
        })
    }
    taskParsed(task: Task) {
        task.participants = (task.participants as User[]).map((eachParticipant: User) => { return eachParticipant._id });
        task.reviewers = (task.reviewers as User[]).map((eachParticipant: User) => { return eachParticipant._id });
        task.createdBy = (task.createdBy as User)._id;
        task.project = task.project as Project;
        return task;
    }
    dialogBack(){
      this.dialogRef.close({prevDialog:this.prevDialog});
    }
    closeDialog(){
        this.dialogRef.close();
        LpLocalStorage.remove('state-data', 'task-on-screen');
    }
}