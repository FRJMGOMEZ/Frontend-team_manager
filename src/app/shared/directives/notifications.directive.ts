import { Directive, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../core/providers/notification.service';
import { NotificationModel } from '../../core/models/notification.model';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appNotifications]'
})
export class NotificationsDirective implements OnInit, OnDestroy {

  notificationsNumber:number = 0;
  notSubs:Subscription;

  matBadge:any
  constructor(private notificationsService:NotificationService, private el:ElementRef) {} 

  ngOnInit() {
    this.notificationsService.getNotificationsUnchecked('', 0, 100000).pipe(map((res: any) => { return res.notifications })).subscribe((notifications: NotificationModel[]) => {
      this.notificationsNumber = notifications.length;
      this.matBadge = this.el.nativeElement.querySelector('.mat-badge-content'); 
      if (this.notificationsNumber > 0) {
        this.matBadge.hidden = false;
        this.matBadge.style.display = 'flex';
        this.matBadge.style.alignItems = 'center';
        this.matBadge.style.justifyContent = 'center';
        this.matBadge.innerHTML = `${this.notificationsNumber}`
      }
    })
    this.notSubs = this.notificationsService.notificationsUnchecked$.subscribe((res: boolean) => {
      res ? this.notificationsNumber++ : (this.notificationsNumber > 0 ? this.notificationsNumber-- : null);
      if (this.notificationsNumber) {
        this.matBadge.hidden = false;
        this.matBadge.style.display = 'flex';
        this.matBadge.style.alignItems = 'center';
        this.matBadge.style.justifyContent = 'center';
        this.matBadge.innerHTML = `${this.notificationsNumber}`
      }else{
        this.matBadge.style.display = 'none';
      }
    })
  }

  ngOnDestroy(){
    this.notSubs.unsubscribe();
  }

}
