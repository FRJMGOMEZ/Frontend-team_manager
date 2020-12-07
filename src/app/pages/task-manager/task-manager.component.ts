import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../shared/providers/project.service';
import { User } from '../../shared/models/user.model';
import { TaskService } from '../../shared/providers/task.service';
import { TaskModel } from '../../shared/models/task.model';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { UtilsService } from '../../shared/providers/utils.service';
import { OOService } from '../../library/providers/objects-operations.service';
@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  selectedProject:string
  selectedProjectSubs:Subscription = null;
  tasksList:TaskModel[] = [];
  taskSelected:TaskModel
  participants:User[]
  constructor(private projectService: ProjectService,
                private taskService: TaskService,
                private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.selectedProject = this.projectService.selectedProject._id;
    this.selectedProject ? this.getParticipants() : null;
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project: string) => {
      this.selectedProject = project;
      this.removeTaskInStorage();
      this.getTasks(`?project=${this.selectedProject}`)
    })
    this.getTasks(`?project=${this.selectedProject}`)
  }

  getParticipants(){
    this.projectService.getParticipants(this.selectedProject).subscribe((participants:User[]) => {
    this.participants = participants;
    })
  }
  getTasks(queryString:string){
      this.taskService.getTasks('month', queryString).subscribe((tasks: TaskModel[]) => {
        this.tasksList = tasks;
        let taskStorage = this.localStorageService.get('state-data', 'task-selected')
        if (taskStorage) {
          this.getTaskById(taskStorage)
        } else {
          this.tasksList[this.tasksList.length - 1] ? this.getTaskById(this.tasksList[this.tasksList.length - 1]._id) : this.taskSelected = null;;
        }
      })
  }
  getTaskById(id:string){
      this.taskService.getTaskById(id).subscribe((task: TaskModel) => {
        this.taskSelected = task;
        this.setTaskInStorage();
    }) 
  }

  setTaskInStorage(){
    this.localStorageService.set('state-data', this.taskSelected._id, 'task-selected');
  }

  removeTaskInStorage(){
    this.localStorageService.remove('state-data', 'task-selected') 
  }


}
