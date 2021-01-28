import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Notification } from '../../../../core/models/notification.model';
import { NotificationService } from '../../../../core/providers/notification.service';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../../library/providers/local-storage.service';
import { HomeComponent } from '../../home.component';
import { User } from '../../../../core/models/user.model';
import { AuthService } from '../../../../auth/shared/providers/auth.service';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit, OnDestroy {

  @ViewChild('divNotifications') divNotifications:ElementRef;
  path:'new' | 'record';
  notifications:Notification[] = [];
  notificationSelected:Notification;
  notificationSubs:Subscription;
  notificationSelectedSubs: Subscription;
  userOnline:User;
  notificationHeight: number = 70;
  notificationsFrom:number = 0;
  notificationsLimit:number = 6;
  notificationsCount: number = 0;

  viewportHeight:number
  params: any;

  constructor(private notificationService:NotificationService,
             private ar:ActivatedRoute,
             private router:Router,
             private localStorageService:LocalStorageService,
             private homeComponent:HomeComponent,
             private authService:AuthService,
             private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.params = this.ar.firstChild ? this.ar.firstChild.snapshot.paramMap : undefined;
    this.path = this.router.url.includes('new') ? 'new' : 'record';
    this.viewportHeight = (this.notificationsLimit-1) * this.notificationHeight;
    this.cdr.detectChanges();
    this.userOnline = this.authService.userOnline;

    this.notificationSelectedSubs = this.notificationService.notificationSelected$.subscribe((notification: Notification) => {
      this.notificationSelected = notification;
    })

    this.notificationSubs = this.notificationService.notification$.subscribe((notification:Notification)=>{
      this.notifications = [notification,...this.notifications]
    })

    this.getNotifications().subscribe((res:any) => {
      this.notificationsCount = res.count;
      this.notifications = [...this.notifications, ...res.notifications].sort((a, b) => { return b.date - a.date })
      this.notificationsFrom+=this.notificationsLimit;
       this.setNotificationSelected();
    })
  }
  ngAfterViewInit() {
    this.listenningScroll()
  }

  setNotificationSelected(){
    const urlNotification = this.params ? this.params.get('id') ? this.params.get('id') : undefined : undefined;
    const storageNotification = this.localStorageService.get('state-data', 'notification-selected');
    if (!this.homeComponent.notificationSelected) {
      if (urlNotification) {
        const notification = this.notifications.find((n) => { return n._id === urlNotification });
        if (notification) {
          this.notificationService.selectNotification(notification);
        } else {
          this.getNotificationById(urlNotification);
        }
      } else if (storageNotification) {
        const notification = this.notifications.find((n) => { return n._id === storageNotification });
        if (notification) {
          this.selectNotification(notification);
        } else {
          this.getNotificationById(storageNotification);
        }
      }
    } else {
      this.notificationSelected = this.homeComponent.notificationSelected;
    }
  }

  getNotifications(){
      let request: Observable<any>
      if (this.path === 'new') {
        this.homeComponent.childQuery = '?checked=false';
        request = this.notificationService.getNotificationsUnchecked('', this.notificationsFrom, this.notificationsLimit );
      } else {
        this.homeComponent.childQuery = ''
        request = this.notificationService.getNotifications('', this.notificationsFrom, this.notificationsLimit );
      }
      return request;
    
  }

  listenningScroll(){
    fromEvent(this.divNotifications.nativeElement, 'scroll').subscribe((event: Event) => {
      const target = event.target;
      if (target['scrollHeight'] - target['scrollTop'] === target['clientHeight']) {
        if (this.notifications.length < this.notificationsCount) {
          this.getNotifications().subscribe((res: any) => {
            this.notificationsCount = res.count;
            this.notifications = [...this.notifications, ...res.notifications].sort((a, b) => { return b.date - a.date })
            this.notificationsFrom += this.notificationsLimit;
          })
        }
      }
    })
  }
  selectNotification(notification:Notification){
     this.notificationService.selectNotification(notification);
     this.router.navigate([`${notification._id}`],{relativeTo:this.ar});
  }

  getNotificationById(id:string){
    this.notificationService.getNotificationById(id).subscribe((notification: Notification) => {
      this.selectNotification(notification);
    });
  }
  unselectNotification() {
    this.notificationService.selectNotification();
  }

  toggleNotification(notificationId:string){
    this.notificationService.toggleNotification(notificationId).subscribe(()=>{
      this.notifications = this.notifications.map((n)=>{ if(n._id === notificationId){ n.usersTo = (n.usersTo as any[]).map((ut)=>{ if(ut.user === this.authService.userOnline._id){ ut.user.checked = !ut.user.checked}; return ut }) }; return n; })
    })
  }
  ngOnDestroy(){
    this.notificationSubs  ? this.notificationSubs.unsubscribe() : null;
    this.notificationSelectedSubs ?  this.notificationSelectedSubs.unsubscribe() :  null;
    this.notificationSubs ? this.notificationSubs.unsubscribe() : null;
  }

}
