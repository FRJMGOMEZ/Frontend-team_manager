import { Component, OnInit, OnDestroy,ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LpLocalStorage } from 'lp-operations';
import { Task } from '../../../../core/models/task.model';
import { User } from '../../../../core/models/user.model';
import { ProjectService } from '../../../../core/providers/project.service';
import { TaskService } from '../../../../core/providers/task.service';
import { MediaService } from '../../../../core/providers/media.service';
import { RoutesService } from '../../../../core/providers/routes.service';

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
  participants:User[];
  taskSubs: Subscription = null;
  arSubscription:Subscription;
  indexSelected=0;
  get taskSelectedName() { 
    const task = this.tasksList.length > 0 ? this.tasksList.find((t) => { return t._id === this.taskSelected }):undefined;
    return task ? task.name : '' }
  constructor(private projectService: ProjectService,
                public taskService: TaskService,
                private ar:ActivatedRoute,
                private router:Router,
                public mdService:MediaService,
                private routesService:RoutesService,
                private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.routesService.setCurrentPage('task-manager');
    this.arSubscription = this.ar.parent.parent.paramMap.subscribe((params) => {
        const selectedProject = params.get('id');
        this.init(selectedProject);
    });
    this.ar.parent.paramMap.subscribe(()=>{

    }) 
  }

  init(project:string){
    this.getTasks(`?project=${project}`, 0).subscribe((res:any) => {
       this.tasksList = res.tasks;
       if(!this.ar.firstChild){
         const selectedTask = LpLocalStorage.get('state-data', 'task-selected');
         if(selectedTask && this.tasksList.find((t)=>{ return t._id === selectedTask}) ){
           this.navigateToTask(selectedTask,LpLocalStorage.get('state-data', 'task-manager-tab') || 'info')
         }else{
           this.removeTaskInStorage();
           this.tasksList[this.tasksList.length - 1] ? this.navigateToTask(this.tasksList[this.tasksList.length - 1]._id, LpLocalStorage.get('state-data', 'task-manager-tab') || 'info') : this.taskSelected = '';
         }
       }else{
         this.taskSelected = this.ar.firstChild.snapshot.paramMap.get('id');
       }
    });
    this.getParticipants(project);
    this.listenTaskChanges();
  }
  
  listenTaskChanges(){
    this.taskSubs = this.taskService.task$.subscribe((res: { task: Task, action: string }) => {
      if (res) {
        switch (res.action) {
          case 'POST':
            this.taskTotal++;
            this.taskLimit > this.tasksList.length ? this.tasksList = [...this.tasksList, res.task] : null;
            if (!this.taskSelected) { this.navigateToTask(res.task._id, LpLocalStorage.get('state-data', 'task-manager-tab') || 'info') }
            break;
          case 'PUT':
            this.tasksList = this.tasksList.map((t: Task) => { return t._id === res.task._id ? res.task : t });
            break;
          case 'DELETE':
            this.tasksList = this.tasksList.filter((t: Task) => { return t._id != res.task._id });
            this.taskSelected = res.task._id === this.taskSelected ? '' : this.taskSelected;
            break;
        }
      }
    });
  }
  getParticipants(project){
    this.projectService.getParticipants(project).subscribe((participants:User[]) => {
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
  selectTask(id: string) {
    this.navigateToTask(id, LpLocalStorage.get('state-data', 'task-manager-tab') || 'info');
    this.indexSelected = 1;
  }

  setTaskInStorage() {
    LpLocalStorage.set('state-data', this.taskSelected, 'task-selected');
  }

  removeTaskInStorage() {
    LpLocalStorage.remove('state-data', 'task-selected')
  }

  navigateToTask(id:string,tab:string){
    this.taskSelected = id ;
    this.router.navigate(['task-manager',this.taskSelected,tab],{relativeTo:this.ar.parent.parent}).then(()=>{
      this.setTaskInStorage();
    })
  }

  ngOnDestroy(){
  this.taskSubs && this.taskSubs!= null ? this.taskSubs.unsubscribe() : null
  this.arSubscription.unsubscribe();
  }

  setView(index:number){
   this.indexSelected = index;
   this.cdr.detectChanges();
   
  }

}
