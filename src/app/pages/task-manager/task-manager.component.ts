import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Task } from '../../core/models/task.model';
import { User } from '../../core/models/user.model';
import { ProjectService } from '../../core/providers/project.service';
import { TaskService } from '../../core/providers/task.service';
import { Project } from '../../core/models/project.model';
import { LpLocalStorage } from 'lp-operations';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit, OnDestroy {
  @ViewChild(MatTabGroup) tabsGroup: MatTabGroup;
  selectedProject:string;
  tasksList:Task[] = [];
  taskSkip:number=0;
  taskLimit:number = 5;
  taskQueryString:string;
  taskTotal:number;
  taskSelected: string;
  participants:User[];
  selectedProjectSubs: Subscription = null;
  taskSubs: Subscription = null;
  get taskSelectedName() { 
    const task = this.tasksList.length > 0 ? this.tasksList.find((t) => { return t._id === this.taskSelected }):undefined;
    return task ? task.name : '' }
  constructor(private projectService: ProjectService,
                public taskService: TaskService,
                private ar:ActivatedRoute,
                private router:Router) {}

  ngOnInit(): void {

    this.listenProjectChanges();

    this.listenTaskChanges();

    this.selectedProject = this.projectService.selectedProject._id;
    this.taskSelected = LpLocalStorage.get('state-data', 'task-selected');
    if(this.selectedProject){
      this.getTasks(`?project=${this.selectedProject}`, 0).subscribe(() => {
        if (!this.taskSelected) {
          this.tasksList[this.tasksList.length - 1] ? this.navigateToTask(this.tasksList[this.tasksList.length - 1]._id) : this.taskSelected = '';
        }
      });
      this.getParticipants();
    }
  }

  listenProjectChanges(){
    this.selectedProjectSubs = this.projectService.selectedProject$.subscribe((project: Project) => {
      this.selectedProject = project._id;
      this.removeTaskInStorage();
      this.redirectTo('pages/task-manager')
    });
  }
  listenTaskChanges(){
    this.taskSubs = this.taskService.task$.subscribe((res: { task: Task, action: string }) => {
      if (res) {
        switch (res.action) {
          case 'POST':
            this.taskTotal++;
            this.taskLimit > this.tasksList.length ? this.tasksList = [...this.tasksList, res.task] : null;
            if (!this.taskSelected) { this.navigateToTask(res.task._id) }
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
  selectTask(id: string) {
    this.tabsGroup ? this.tabsGroup.selectedIndex = 1 : null;
    this.navigateToTask(id, 'info')
  }

  setTaskInStorage() {
    LpLocalStorage.set('state-data', this.taskSelected, 'task-selected');
  }

  removeTaskInStorage() {
    LpLocalStorage.remove('state-data', 'task-selected')
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  navigateToTask(id:string,tab?:string){
    this.taskSelected = id ;
    this.router.navigate([this.taskSelected, tab ? tab : LpLocalStorage.get('state-data','task-manager-tab') || 'info'], { relativeTo: this.ar }) 
  }

  ngOnDestroy(){
  this.selectedProjectSubs && this.selectedProjectSubs != null ? this.selectedProjectSubs.unsubscribe():null;
  this.taskSubs && this.taskSubs!= null ? this.taskSubs.unsubscribe() : null;
  }

}
