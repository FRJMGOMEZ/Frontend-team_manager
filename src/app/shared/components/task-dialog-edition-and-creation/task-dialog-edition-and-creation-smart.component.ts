import { Component, Inject } from '@angular/core';
import { User } from '../../models/user.model';
import { ProjectService } from '../../providers/project.service';
import { UserServices } from '../../providers/user.service';

import { AuthService } from '../../../auth/shared/providers/auth.service';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { Project } from '../../models/project.model';
import { OOService } from '../../../library/providers/objects-operations.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../providers/task.service';

@Component({
    selector: 'app-task-dialog-edition-and-creation-smart',
    template: `
         <app-task-dialog-edition-and-creation [selectedProject]="selectedProject" [projectParticipants]="projectParticipants" (postTask)="postTask($event)" (putTask)="putTask($event)" [task]="taskSelected" (close)="closeDialog()" [prevDialog]="prevDialog" (back)="back()"> </app-task-dialog-edition-and-creation>
    `,
})
export class TaskDialogEditionAndCreationSmartComponent {
    projectParticipants: User[] = []
    taskSelected: TaskModel
    selectedProject:string
    prevDialog:string
    constructor(
        private projectService: ProjectService,
        private userService: UserServices,
        private taskService: TaskService,
        private authService: AuthService,
        private localStorageService: LocalStorageService,
        private dialogRef: MatDialogRef<TaskDialogEditionAndCreationSmartComponent>,
        @Inject(MAT_DIALOG_DATA) private data) { }
    ngOnInit() {
           if(this.data && this.data.taskId){
                 this.getTask(this.data.taskId)
                 this.localStorageService.set('state-data',this.data.taskId,'task-on-screen')
           } 
        this.selectedProject = this.localStorageService.get('state-data', 'project')
        this.getPanelData(this.selectedProject) 
        this.prevDialog = this.data ? this.data.prevDialog : undefined  
    }
    getTask(taskId:string) {
        this.taskService.getTaskById(taskId).subscribe((taskDb: TaskModel) => {
            let taskSelected = OOService.copyObject(taskDb);
            taskSelected.participants = (taskSelected.participants as User[]).map((eachParticipant: User) => { return eachParticipant._id })
            taskSelected.user = (taskSelected.user as User)._id;
            taskSelected.project = taskSelected.project as Project;
            this.taskSelected = taskSelected;
            this.localStorageService.set('state-data', this.taskSelected._id, 'task')
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
    postTask(task: TaskModel) {
        this.taskService.postTask(task).subscribe((task: TaskModel) => {
            this.taskSelected = OOService.copyObject(task);
        })
    }

    //TODO: EDIT PUT METHOD
    putTask(data:{taskChanges: { [key: string]: any },id:string}) {
        this.taskService.putTask(data.taskChanges, data.id).subscribe((task)=>{
            this.taskSelected = OOService.mergeObjects(task,data.taskChanges);
        })
    }
    back(){
      this.dialogRef.close({prevDialog:this.prevDialog})
    }
    closeDialog(){
        this.dialogRef.close()
        this.localStorageService.remove('state-data', 'task-on-screen')
    }
}