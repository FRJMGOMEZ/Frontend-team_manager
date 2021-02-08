import { Directive, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../core/providers/notification.service';
import { NotificationModel } from '../../core/models/notification.model';

@Directive({
  selector: '[appNotifications]'
})
export class NotificationsDirective implements OnInit, OnDestroy {
  notSubs:Subscription
  constructor(private notificationsService:NotificationService, private el:ElementRef) { }
  ngOnInit(){
     this.notSubs = this.notificationsService.notificationsUnchecked$.subscribe((notifications:NotificationModel[])=>{
       if(notifications.length > 0){
         const matBadge = this.el.nativeElement.querySelector('.mat-badge-content');
         matBadge.hidden = false;
         matBadge.style.display = 'flex';
         matBadge.style.alignItems = 'center';
         matBadge.style.justifyContent = 'center';
         matBadge.innerHTML = `${notifications.length}`
       }else{
         const matBadge = this.el.nativeElement.querySelector('.mat-badge-content');
         matBadge.style.display = 'none';
       }
     })
  }

  ngOnDestroy(){
    this.notSubs.unsubscribe();
  }

}
