import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../../../core/models/task.model';
import { User } from '../../../../core/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../auth/shared/providers/auth.service';
import { TaskService } from '../../../../core/providers/task.service';
import { DialogsService } from '../../../../core/providers/dialogs.service';

@Component({
  selector: 'app-task-manager-panel',
  templateUrl: './task-manager-panel.component.html',
  styleUrls: ['./task-manager-panel.component.scss']
})
export class TaskManagerPanelComponent implements  OnDestroy,OnInit{
  taskSelected: Task;
  taskSubscription:Subscription;
  tabIndex:number =0;
  constructor(
              public authService: AuthService,
              public taskService: TaskService,
              private dialogsService: DialogsService,
              private ar:ActivatedRoute) { }

  ngOnInit(){
     this.ar.paramMap.subscribe((params)=>{
        this.getTaskById(params.get('id')).then(()=>{
          this.taskService.userInTask(this.taskSelected._id).then((usersOnline: string[]) => {
            (this.taskSelected.participants as User[]).forEach((p: User, index: number) => {
              usersOnline.includes(p._id) ? (this.taskSelected.participants[index] as User).connected = true : (this.taskSelected.participants[index] as User).connected = false;
            });
          });
        });
     })
    this.taskSubscription = this.taskService.task$.subscribe((res: { task: Task, action: string }) => {
      if (res) {
        switch (res.action) {
          case 'PUT':
             res.task._id === this.taskSelected._id ?  this.taskSelected = res.task : null;
            break;
        }
      }
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
  toggleStatus() {
    this.taskService.toggleStatus('on review', this.taskSelected._id).subscribe();
  }
  editTask() {
    this.dialogsService.openEditCreateTaskDialog(this.taskSelected._id);
  }
  deleteTask() {
    this.taskService.deleteTask(this.taskSelected._id).subscribe();
  }

  ngOnDestroy() {
    this.taskService.userOutTask(this.taskSelected._id);
    this.taskSubscription.unsubscribe();
  } 

}
