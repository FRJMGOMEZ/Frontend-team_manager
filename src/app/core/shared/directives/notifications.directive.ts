import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { NotificationService } from '../providers/notification.service';
import { Subscription } from 'rxjs';
import { NotificationModel } from '../../models/notification.model';


@Directive({
  selector: '[appNotifications]'
})
export class NotificationsDirective implements OnInit {
  notificationNumber:number
  notSubs:Subscription
  constructor(private notificationsService:NotificationService, private el:ElementRef) { }
  ngOnInit(){
     this.notSubs = this.notificationsService.notification$.subscribe((notification:NotificationModel)=>{
      this.notificationNumber++;
      let badge = this.el.nativeElement.getAttribute('matBadge');
      if( badge != null){
        badge = this.notificationNumber;
      }else{
          this.el.nativeElement.setAttribute('matBadge',this.notificationNumber)
      }
     })
  }

}
