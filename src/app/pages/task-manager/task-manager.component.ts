import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../shared/providers/project.service';
import { User } from '../../shared/models/user.model';
import { TaskService } from '../../shared/providers/task.service';
import { TaskModel } from '../../shared/models/task.model';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { DialogsService } from '../../shared/providers/dialogs.service';
@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit, OnDestroy {
  selectedProject:string;
  tasksList:TaskModel[] = [];
  taskSelected:TaskModel;
  participants:User[];
  selectedProjectSubs: Subscription = null;
  taskSubscription: Subscription = null;
  constructor(private projectService: ProjectService,
                public taskService: TaskService,
                private localStorageService:LocalStorageService,
                private dialogsService:DialogsService) { }

  ngOnInit(): void {
    this.selectedProject = this.projectService.selectedProject._id;
    this.selectedProject ? this.getParticipants() : null;
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project: string) => {
      this.selectedProject = project;
      this.removeTaskInStorage();
      this.getTasks(`?project=${this.selectedProject}`)
    })
    this.getTasks(`?project=${this.selectedProject}`)
    this.taskSubscription = this.taskService.task$.subscribe((res: { task:TaskModel, action:string })=>{
      if(res){
        switch (res.action) {
          case 'POST':
            (res.task.project as any)._id === this.selectedProject ? this.tasksList = [...this.tasksList,res.task] : null;
            !this.taskSelected ? this.taskSelected = res.task : null;
            break;
          case 'PUT':
            this.taskSelected._id === res.task._id ? this.taskSelected = res.task : null;
            this.tasksList = this.tasksList.map((t: TaskModel) => { return t._id === res.task._id ? res.task : t });
            break;
          case 'DELETE':
            this.taskSelected._id === res.task._id ? this.taskSelected = null : null;
            this.tasksList = this.tasksList.filter((t: TaskModel) => { return t._id != res.task._id });
            this.taskSelected = this.tasksList.length > 0 ? this.tasksList[this.tasksList.length - 1] : null;
            break;
        }
      }
    })
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

  editTask(){
    this.dialogsService.openEditCreateTaskDialog(this.taskSelected._id)
  }

  toggleStatus(){
   this.taskService.toggleStatus('on review',this.taskSelected._id).subscribe()
  }

  deleteTask(){
    this.taskService.deleteTask(this.taskSelected._id).subscribe();
  }
 
  ngOnDestroy(){
  this.taskSubscription ? this.taskSubscription.unsubscribe():null;
  }


}
