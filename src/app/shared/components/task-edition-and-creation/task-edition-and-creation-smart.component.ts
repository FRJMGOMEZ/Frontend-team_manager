import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { User } from '../../../core/models/user.model';
import { ProjectService } from '../../../core/providers/project.service';
import { UserServices } from '../../../core/providers/user.service';
import { TaskService } from '../../../core/providers/task.service';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { OOService } from '../../../library/providers/objects-operations.service';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-task-edition-and-creation-smart',
  template: `
         <app-task-edition-and-creation [isDialog]="false" [selectedProject]="selectedProject" [projectParticipants]="projectParticipants" (postTask)="postTask($event)" (putTask)="putTask($event)" [task]="taskSelected"  > </app-task-edition-and-creation>
    `,

})
export class TaskEditionAndCreationSmartComponent implements OnInit {

  projectParticipants: User[] = []
  @Input() taskSelected: Task
  selectedProject: string

  constructor(
    private projectService: ProjectService,
    private userService: UserServices,
    private taskService: TaskService,
    private authService: AuthService,
    private localStorageService: LocalStorageService) { }
  ngOnInit() {}

  ngOnChanges(changes:SimpleChanges) {
    if(changes.taskSelected && this.taskSelected){
      console.log(this.taskSelected)
      this.localStorageService.set('state-data', this.taskSelected._id, 'task-on-screen');
      this.selectedProject = this.localStorageService.get('state-data', 'project');
      this.getPanelData(this.selectedProject);
    }
  }
  getTask(taskId: string) {
    this.taskService.getTaskById(taskId).subscribe((taskDb: Task) => {
      let taskSelected = OOService.copyObject(taskDb);
      taskSelected.participants = (taskSelected.participants as User[]).map((eachParticipant: User) => { return eachParticipant._id })
      taskSelected.user = (taskSelected.user as User)._id;
      taskSelected.project = taskSelected.project as Project;
      this.taskSelected = taskSelected;
      this.localStorageService.set('state-data', this.taskSelected._id, 'task')
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
      this.taskSelected = OOService.copyObject(task);
    })
  }

  //TODO: EDIT PUT METHOD
  putTask(data: { taskChanges: { [key: string]: any }, id: string }) {
    this.taskService.putTask(data.taskChanges, data.id).subscribe((task) => {
      this.taskSelected = OOService.mergeObjects(task, data.taskChanges);
    })
  }

}
