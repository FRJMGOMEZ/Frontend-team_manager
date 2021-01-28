import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { empty } from 'rxjs';
import { TaskService } from '../../../../core/providers/task.service';
import { ProjectService } from '../../../../core/providers/project.service';
import { Notification } from '../../../../core/models/notification.model';

@Component({
  selector: 'app-notification-change-detail',
  templateUrl: './notification-change-detail.component.html',
  styleUrls: ['./notification-change-detail.component.scss']
})
export class NotificationChangeDetailComponent {

  @Input() notification:Notification
  itemSelected:any
  @Output() unselectNotification: EventEmitter<void> = new EventEmitter<void>()

  constructor(private taskService:TaskService, private projectService:ProjectService) { }
  ngOnChanges(changes:SimpleChanges){
    if(changes.notification && this.notification){
        this.itemSelected = undefined;
        this.getItems(this.notification)
    }
  }
  getItems(notification:Notification){
    let request:Observable<any>
    switch(notification.type){
      case 'Task': request = notification.method != 'DELETE' ? this.taskService.getTaskById(notification.item) : of(notification.oldItem).pipe(map((i)=>{ i.deleted = true;return i}))
      break;
      case 'Project': request = notification.method != 'DELETE' ? of(this.projectService.projects.find((p)=>{ return p._id === notification.item})) : of(notification.oldItem)
      break;
    }
    request.pipe(catchError((err)=>{
      this.itemSelected = notification.oldItem;
      this.itemSelected.deleted = true;
      return empty()})) 
    .subscribe((res)=>{
      console.log({res})
       this.itemSelected = res != null ? res : this.itemSelected;
    })
  }
}
