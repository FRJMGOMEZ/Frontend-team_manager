import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../shared/providers/project.service';
import { User } from '../../shared/models/user.model';
import { TaskService } from '../../shared/providers/task.service';
import { TaskModel } from '../../shared/models/task.model';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { LocalStorageService } from '../../library/providers/local-storage.service';
@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  selectedProject:string
  participants:User[]
  selectedProjectSubs:Subscription = null;
  userOnline:User
  tasksList:TaskModel[] = [];
  taskSelected:TaskModel
  constructor(private projectService: ProjectService,
                private taskService: TaskService,
                private authService:AuthService,
                private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.userOnline = this.authService.userOnline;
    this.selectedProject = this.projectService.selectedProject._id;
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project: string) => {
      this.selectedProject = project;
    })
    this.projectService.getParticipants(this.selectedProject).subscribe((participants) => {
        this.participants = participants;
    })
    let taskStorage = this.localStorageService.get('state-data', 'task-selected') 
    if (taskStorage) {
      this.getTaskById(taskStorage)
    }
    this.getTasks('')
  }

  getTasks(queryString:string){
     this.taskService.getTasks('month',queryString).subscribe((tasks:TaskModel[])=>{
        this.tasksList = tasks;
        if(!this.taskSelected){
          this.getTaskById(this.tasksList[this.tasksList.length-1]._id)
        }
     })
  }
  getTaskById(id:string){
    this.taskService.getTaskById(id).subscribe((task:TaskModel)=>{
      this.taskSelected = task;
      this.localStorageService.set('state-data',this.taskSelected._id,'task-selected')
      this.taskService.userInTask(this.taskSelected._id)
    })
  }

}
