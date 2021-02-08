import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Task } from '../../core/models/task.model';
import { User } from '../../core/models/user.model';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { ProjectService } from '../../core/providers/project.service';
import { TaskService } from '../../core/providers/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit, OnDestroy {
  selectedProject:string;
  tasksList:Task[] = [];
  taskSkip:number=0;
  taskLimit:number = 5;
  taskQueryString:string;
  taskTotal:number;
  taskSelected: string;
  get taskSelectedName(){ return this.tasksList.length > 0 ? this.tasksList.find((t)=>{ return t._id === this.taskSelected}).name: ''}
  participants:User[];
  selectedProjectSubs: Subscription = null;
  taskSubscription: Subscription = null;
  @ViewChild(MatTabGroup) tabsGroup:MatTabGroup
  constructor(private projectService: ProjectService,
                public taskService: TaskService,
                private localStorageService:LocalStorageService,
                public deviceDetectorService:DeviceDetectorService,
                private ar:ActivatedRoute,
                private router:Router) {}

  ngOnInit(): void {
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project: string) => {
       this.selectedProject = project;
       this.removeTaskInStorage();
       this.redirectTo('pages/task-manager')
    })
    
    this.taskSubscription = this.taskService.task$.subscribe((res: { task:Task, action:string })=>{
      if(res){
        switch (res.action) {
          case 'POST':
            this.taskTotal++;
            this.taskLimit > this.tasksList.length  ? this.tasksList = [...this.tasksList, res.task] : null;
            if(!this.taskSelected){this.navigateToTask(res.task._id)}
            break;
          case 'PUT':
            this.tasksList = this.tasksList.map((t: Task) => { return t._id === res.task._id ? res.task : t });
            break;
          case 'DELETE':
            this.tasksList = this.tasksList.filter((t: Task) => { return t._id != res.task._id });
            this.taskSelected = res.task._id === this.taskSelected ? '': this.taskSelected;
            break;
        }
      }
    });
    this.selectedProject = this.projectService.selectedProject._id;
    this.getParticipants();
    this.taskSelected = this.localStorageService.get('state-data', 'task-selected');
    this.getTasks(`?project=${this.selectedProject}`, 0).subscribe(()=>{
      if (!this.taskSelected) {
        this.tasksList[this.tasksList.length - 1] ? this.navigateToTask(this.tasksList[this.tasksList.length - 1]._id) : this.taskSelected = '';
     }
    })
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  getParticipants(){
    this.projectService.getParticipants(this.selectedProject).subscribe((participants:User[]) => {
    this.participants = participants;
    })
  }
  getTasks(queryString:string,skip:number){
    this.taskQueryString = queryString;
    this.taskSkip = skip;
    return this.taskService.getTasks('month', this.taskQueryString, this.taskSkip, this.taskLimit).pipe(tap(( res:any) => {
        this.taskTotal = res.count;
        this.tasksList = res.tasks;
     }))
  }
  navigateToTask(id:string){
    this.taskSelected = id ;
    this.router.navigate([this.taskSelected], { relativeTo: this.ar }) 
  }

  selectTask(id:string){
   this.tabsGroup ? this.tabsGroup.selectedIndex = 1 : null;
   this.navigateToTask(id)
  }

  setTaskInStorage(){
    this.localStorageService.set('state-data', this.taskSelected, 'task-selected');
  }

  removeTaskInStorage(){
    this.localStorageService.remove('state-data', 'task-selected') 
  }

  ngOnDestroy(){
  this.selectedProjectSubs && this.selectedProjectSubs != null ? this.selectedProjectSubs.unsubscribe():null;
  this.taskSubscription && this.taskSubscription != null ? this.taskSubscription.unsubscribe() : null;
  }

}
