import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Task } from '../../../../../../core/models/task.model';
import { TaskService } from '../../../../../../core/providers/task.service';
import { timer } from 'rxjs';
import { AuthService } from '../../../../../../auth/shared/providers/auth.service';
import { LpDialogsService } from 'lp-dialogs';

@Component({
  selector: 'app-task-manager-info',
  templateUrl: './task-manager-info.component.html',
  styleUrls: ['./task-manager-info.component.scss']
})
export class TaskManagerInfoComponent implements OnInit {

  @Input() taskSelected:Task
  @Output() deleteTask = new EventEmitter<void>();
  @Output() toggleStatus = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<void>();
  @Output() actionResolved = new EventEmitter<any>();
  hasActsRequired = false;
  display = false;
  constructor(public taskService:TaskService, private cdr:ChangeDetectorRef, private authService:AuthService, private lpDialogsService:LpDialogsService) { }
  ngOnInit(): void {}
  ngOnChanges(changes:SimpleChanges){
    if(changes.taskSelected && this.taskSelected){
      this.hasActsRequired = this.taskSelected.actionsRequired && this.taskSelected.actionsRequired.length > 0 && this.taskSelected.actionsRequired.find((ar)=>{ return ar.usersTo.map((u)=>{ return u._id}).includes(this.authService.userOnline._id)}) ? true : false;
    }
  }
  toggleStat(){
    let newStatus;
    switch(this.taskSelected.status){
      case 'pending':  newStatus = 'on review';
      break;
      case 'done' : newStatus = 'pending';
      break;
    }
    if(newStatus && this.taskService.taskTimeStarted(this.taskSelected)){
        this.toggleStatus.emit(newStatus);
    }
  }

  showDescription(){
    this.lpDialogsService.openInfoDialog(this.taskSelected.description,'TASK DESCRIPTION');
  }

}
