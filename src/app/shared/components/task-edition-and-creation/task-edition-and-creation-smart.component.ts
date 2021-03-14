import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { User } from '../../../core/models/user.model';
import { ProjectService } from '../../../core/providers/project.service';
import { UserServices } from '../../../core/providers/user.service';
import { TaskService } from '../../../core/providers/task.service';
import { AuthService } from '../../../core/providers/auth.service';
import { Project } from '../../../core/models/project.model';
import { LpObject, LpLocalStorage } from 'lp-operations';

@Component({
  selector: 'app-task-edition-and-creation-smart',
  template: `
         <app-task-edition-and-creation [isDialog]="false" [selectedProject]="selectedProject" [projectParticipants]="projectParticipants" (postTask)="postTask($event)" (putTask)="putTask($event)" [task]="taskSelected"  > </app-task-edition-and-creation>
    `,

})
export class TaskEditionAndCreationSmartComponent implements OnInit {

  projectParticipants: User[] = [];
  @Input() taskSelected: Task;
  selectedProject: string;

  constructor(
    private projectService: ProjectService,
    private userService: UserServices,
    private taskService: TaskService,
    private authService: AuthService) { }
  ngOnInit() {}

  ngOnChanges(changes:SimpleChanges) {
    if(changes.taskSelected && this.taskSelected){
      LpLocalStorage.set('state-data', this.taskSelected._id, 'task-on-screen');
      this.selectedProject = this.projectService.selectedProject._id;
      this.getPanelData(this.selectedProject);
    }
  }
  getTask(taskId: string) {
    this.taskService.getTaskById(taskId).subscribe((taskDb: Task) => {
      let taskSelected = LpObject.copyObject(taskDb);
      taskSelected.participants = (taskSelected.participants as User[]).map((eachParticipant: User) => { return eachParticipant._id });
      taskSelected.reviewers = (taskSelected.reviewers as User[]).map((eachParticipant: User) => { return eachParticipant._id });
      taskSelected.createdBy = (taskSelected.createdBy as User)._id;
      taskSelected.project = taskSelected.project as Project;
      this.taskSelected = taskSelected;
      LpLocalStorage.set('state-data', this.taskSelected._id, 'task');
    })
  }
  getPanelData(selectedProject?: string) {
    if (selectedProject) {
      this.projectService.getParticipants(selectedProject).subscribe((participants: User[]) => {
        this.projectParticipants = participants;
      })
    } else {
      this.userService.getUsers(0, 999999).subscribe((users: User[]) => {
        users.push(this.authService.userOnline);
        this.projectParticipants = users;
      })
    }
  }
  postTask(task: Task) {
    this.taskService.postTask(task).subscribe((task: Task) => {
      this.taskSelected = LpObject.copyObject(task);
    })
  }

  putTask(data: { taskChanges: { [key: string]: any }, id: string }) {
    this.taskService.putTask(data.taskChanges, data.id).subscribe((task) => {
      this.taskSelected = LpObject.mergeObjects(task, data.taskChanges);
    })
  }

}
