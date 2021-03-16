import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, empty } from 'rxjs';
import { Task } from '../../../../core/models/task.model';
import { User } from '../../../../core/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/providers/auth.service';
import { TaskService } from '../../../../core/providers/task.service';
import { DialogsService } from '../../../../core/providers/dialogs.service';
import { LpDialogsService } from 'lp-dialogs';
import { switchMap } from 'rxjs/operators';
import { LpLocalStorage } from 'lp-operations';

@Component({
  selector: 'app-task-manager-panel',
  templateUrl: './task-manager-panel.component.html',
  styleUrls: ['./task-manager-panel.component.scss']
})
export class TaskManagerPanelComponent implements  OnDestroy,OnInit{
  taskSelected: Task;
  taskSubscription:Subscription;
  tabIndex:number;
  constructor(
              public authService: AuthService,
              public taskService: TaskService,
              private dialogsService: DialogsService,
              private ar:ActivatedRoute,
              private lpDialogsService:LpDialogsService,
              private router:Router) { }

  ngOnInit(){
    this.listenParamsChanges();
  }

  listenParamsChanges(){
    this.ar.paramMap.subscribe((params) => {
      const tab = params.get('tab');
      this.setTabIndex(tab);
      /// if taskId param change or there is no taskSelected, gets the task by id ///
      const taskId = params.get('id');
      !this.taskSelected || this.taskSelected && taskId !== this.taskSelected._id ? this.getTaskById(taskId).then(() => {this.getUsersInTask(); }) : null;
    });
    this.listenTaskChanges();
  }

  listenTaskChanges(){
    this.taskSubscription = this.taskService.task$.subscribe((res: { task: Task, action: string }) => {
      if (res) {
        switch (res.action) {
          case 'PUT':
            res.task._id === this.taskSelected._id ? this.taskSelected = res.task : null;
            break;
        }
      }
    });
  }
  setTabIndex(tab:string){
    switch(tab){
      case 'info': this.tabIndex = 0;
      break;
      case 'chat': this.tabIndex = 1;
      break;
      case 'files': this.tabIndex = 2;
      break;
    }
    LpLocalStorage.set('state-data', tab, 'task-manager-tab');
  }

  getUsersInTask(){
    this.taskService.userInTask(this.taskSelected._id).then((usersOnline: string[]) => {
      (this.taskSelected.participants as User[]).forEach((p: User, index: number) => {
        usersOnline.includes(p._id) ? (this.taskSelected.participants[index] as User).connected = true : (this.taskSelected.participants[index] as User).connected = false;
      });
    });
  }
  getTaskById(id:string){
    return new Promise((resolve,reject)=>{
      this.taskService.getTaskById(id).subscribe((task: Task) => {
        this.taskSelected = task;
        resolve(true);
      });
    });
  }
  toggleStatus(newStatus:string) {
    this.lpDialogsService.openConfirmDialog('ARE YOU SURE?', `The task status will switch to "${newStatus}" status`).pipe(switchMap((res:any)=>{
      return res ? this.taskService.putTask({status:newStatus},this.taskSelected._id) : empty()
    })).subscribe();
  }
  editTask() {
    this.dialogsService.openEditCreateTaskDialog(this.taskSelected._id);
  }
  deleteTask() {
    this.taskService.deleteTask(this.taskSelected._id).subscribe();
  }

  resolveTaskAction(res:any){
    this.taskService.putTask({ [Object.keys(res)[0]]: res[Object.keys(res)[0]]},res.itemId).subscribe();
  }

  //// navigation to tab in html ///
  tabNav(index:number){
    const tab = index === 0 ? 'info' : index === 1 ? 'chat' : index === 2 ? 'files' : 'info';
    this.router.navigate([tab],{relativeTo:this.ar.parent});
  }
  ngOnDestroy() {
    this.taskService.userOutTask(this.taskSelected._id);
    this.taskSubscription.unsubscribe();
  }

}
