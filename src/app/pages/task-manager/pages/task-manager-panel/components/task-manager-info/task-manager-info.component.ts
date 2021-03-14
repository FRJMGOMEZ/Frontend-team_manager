import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../../../../../core/models/task.model';
import { TaskService } from '../../../../../../core/providers/task.service';
import { AuthService } from '../../../../../../core/providers/auth.service';
import { LpDialogsService } from 'lp-dialogs';
import { MediaService } from '../../../../../../core/providers/media.service';
import { DialogsService } from '../../../../../../core/providers/dialogs.service';
import { ActionRequired } from '../../../../../../core/models/action-required';

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
  constructor(
    public taskService:TaskService,
    private authService:AuthService,
    private lpDialogsService:LpDialogsService,
    public mdService:MediaService,
    private dialogsService:DialogsService) { }
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

  showActionsRequired(){
   this.dialogsService.showActionsRequired(this.taskSelected.actionsRequired as ActionRequired[]).subscribe((res)=>{
     this.actionResolved.emit(res);
   })
  }

}
