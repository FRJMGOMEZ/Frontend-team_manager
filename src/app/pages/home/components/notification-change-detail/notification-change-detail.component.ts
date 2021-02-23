import { Component, Input, Output, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { empty } from 'rxjs';
import { TaskService } from '../../../../core/providers/task.service';
import { ProjectService } from '../../../../core/providers/project.service';
import { NotificationModel } from '../../../../core/models/notification.model';

@Component({
  selector: 'app-notification-change-detail',
  templateUrl: './notification-change-detail.component.html',
  styleUrls: ['./notification-change-detail.component.scss']
})
export class NotificationChangeDetailComponent {

  itemSubscription:Subscription

  @Input() notification:NotificationModel
  itemSelected:any
  @Output() unselectNotification: EventEmitter<void> = new EventEmitter<void>()

  constructor(private taskService:TaskService, private projectService:ProjectService, private cdr:ChangeDetectorRef) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.notification && this.notification){
        this.itemSelected = undefined;
        this.getItems(this.notification);
        this.itemSubscription ? this.itemSubscription.unsubscribe() : null;
        let obs:Observable<any>;
      switch (this.notification.type) {
        case 'Task': obs = this.taskService.task$;
          break;
        case 'Project': obs = this.projectService.project$;
          break;
      }
       this.itemSubscription = obs.subscribe((res)=>{
         if (res) {
           const item = res['task'] ? res['task'] : res['project'];
           if(item._id === this.itemSelected._id){
             switch (res.action) {
               case 'PUT':
                 this.itemSelected = item;
                 break;
               case 'DELETE':
                 this.itemSelected = this.notification.prevItem;
                 this.itemSelected.deleted = true;
                 break;
             }
            this.cdr.detectChanges();
           }
         }
       })
    }
    
  }
  getItems(notification:NotificationModel){
    let request:Observable<any>
    switch(notification.type){
      case 'Task': request = notification.method != 'DELETE' ? this.taskService.getTaskById(notification.item._id ? notification.item._id : notification.item) : of(notification.prevItem).pipe(map((i)=>{ i.deleted = true;return i}))
      break;
      case 'Project': request = notification.method != 'DELETE' ? this.projectService.getProjectById(notification.item._id ? notification.item._id : notification.item): of(notification.prevItem)
      break;
    }
    request.pipe(catchError((err)=>{
      this.itemSelected = notification.prevItem;
      this.itemSelected.deleted = true;
      return empty()})) 
    .subscribe((res)=>{
      console.log({res});
       this.itemSelected = res != null ? res : this.itemSelected;
    })
  }

  ngOnDestroy(){
    this.itemSubscription ? this.itemSubscription.unsubscribe(): null;
  }
}
