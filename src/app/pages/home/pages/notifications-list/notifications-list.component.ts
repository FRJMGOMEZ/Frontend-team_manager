import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NotificationModel } from '../../../../core/models/notification.model';
import { NotificationService } from '../../../../core/providers/notification.service';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../home.component';
import { User } from '../../../../core/models/user.model';
import { AuthService } from '../../../../core/providers/auth.service';
import { DialogsService } from '../../../../core/providers/dialogs.service';
import { switchMap, map } from 'rxjs/operators';
import { ActionsRequiredService } from '../../../../core/providers/actions-required.service';
import { LpDialogsService } from 'lp-dialogs';
import { empty } from 'rxjs/internal/observable/empty';
import { MediaService } from '../../../../core/providers/media.service';
import { LpLocalStorage } from 'lp-operations';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit, OnDestroy {

  @ViewChild('divNotifications') divNotifications:ElementRef;
  path:'new' | 'record';
  notifications:NotificationModel[] = [];
  notificationSelected:NotificationModel;
  notificationSubs:Subscription;
  notificationSelectedSubs: Subscription;
  userOnline:User;
  notificationsFrom:number = 0;
  notificationsLimit:number = 11;
  notificationsCount: number = 0;
  viewportHeight:number;
  params: any;
  queryString:string;
  constructor(private notificationService:NotificationService,
             private ar:ActivatedRoute,
             private router:Router,
             private homeComponent:HomeComponent,
             private authService:AuthService,
             private cdr:ChangeDetectorRef,
             public dialogsService:DialogsService,
             private actionsRequiredService:ActionsRequiredService,
             private lpDialogsService:LpDialogsService,
             public mdService:MediaService) { }

  ngOnInit(): void {
    this.params = this.ar.firstChild ? this.ar.firstChild.snapshot.paramMap : undefined;
    this.path = this.router.url.includes('new') ? 'new' : 'record';
    this.cdr.detectChanges();
    this.userOnline = this.authService.userOnline;

    this.notificationSelectedSubs = this.notificationService.notificationSelected$.subscribe((notification: NotificationModel) => {
      this.notificationSelected = notification;
    })

    this.notificationSubs = this.notificationService.notification$.subscribe((notification:NotificationModel)=>{
      this.notifications = [notification,...this.notifications];
    })
    this.queryString = LpLocalStorage.get('state-data', 'notification-filters');
    this.getNotifications(this.queryString).subscribe((res:any) => {
      this.notificationsCount = res.count;
      this.notifications = [...res.notifications].sort((a, b) => { return b.date - a.date });
       this.setNotificationSelected();
    })
  }
  ngAfterViewInit() {
    this.listenningScroll()
  }

  setNotificationSelected(){
    const urlNotification = this.params ? this.params.get('id') ? this.params.get('id') : undefined : undefined;
    const storageNotification = LpLocalStorage.get('state-data', 'notification-selected');
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

  getNotifications(queryString:string){
      this.queryString = queryString;
    LpLocalStorage.set('state-data', this.queryString, 'notification-filters');
      let request: Observable<any>
      if (this.path === 'new') {
        request = this.notificationService.getNotificationsUnchecked(this.queryString, this.notificationsFrom, this.notificationsLimit );
      } else {
        request = this.notificationService.getNotifications(this.queryString, this.notificationsFrom, this.notificationsLimit );
      }
      return request;
  }

  listenningScroll(){
    fromEvent(this.divNotifications.nativeElement, 'scroll').subscribe((event: Event) => {
      const target = event.target;
      if (target['scrollHeight'] - target['scrollTop'] === target['clientHeight']) {
        if (this.notifications.length < this.notificationsCount) {
          this.notificationsFrom+=this.notificationsLimit;
          this.getNotifications(this.queryString).subscribe((res: any) => {
            this.notificationsCount = res.count;
            res.notifications = res.notifications.sort((a, b) => { return b.date - a.date })
            res.notifications.forEach((n)=>{
              this.notifications.push(n)
            })
          })
        }
      }
    })
  }
  selectNotification(notification:NotificationModel){
    this.notificationService.selectNotification(notification);
    this.router.navigate([`${notification._id}`], { relativeTo: this.ar }).then(()=>{
      if(!this.mdService.desktop){
        switch(notification.type){
          case 'Task': this.dialogsService.openTaskInfoDialog(notification.item);
          break;
          case 'Project': this.dialogsService.openProjectInfoDialog(notification.item);
          break;
        }
      }
    })
  }

  getNotificationById(id:string){
    this.notificationService.getNotificationById(id).subscribe((notification: NotificationModel) => {
      this.selectNotification(notification);
    });
  }
  unselectNotification() {
    this.notificationService.selectNotification();
  }

  toggleNotification(notificationId:string){
    this.lpDialogsService.openConfirmDialog('SET NOTIFICATION AS CHECKED', '').pipe(switchMap((res:boolean)=>{
      return res ? this.notificationService.toggleNotification(notificationId) : empty()
    })).subscribe((res:boolean)=>{
      res ? (this.notifications.find((n)=>{ return n._id === notificationId}).usersTo as any[]).find((u)=>{ return u.user === this.authService.userOnline._id}).checked = true : null;
    })
  }

  showActionsRequired(notification: NotificationModel) {
    this.actionsRequiredService.actionProcess(notification.type,notification.item._id ? notification.item._id: notification.item)
    .pipe(switchMap(()=>{return this.notificationService.toggleNotification(notification._id);}))
    .subscribe((notification:NotificationModel)=>{
        this.notifications = this.notifications.map((n)=>{ return n._id === notification._id ? notification : n})
    });
  }

  searchNotifications(queryString:string){
    this.getNotifications(queryString).pipe(map((res:any)=>{ return res.notifications})).subscribe((notifications:NotificationModel[])=> this.notifications = notifications)
  }

  openSearchDialog(){
    this.dialogsService.openNotificationsFilters(this.queryString).subscribe((queryString:string)=>{
      this.notificationsFrom = 0; 
      this.searchNotifications(queryString);
    })
  }
  ngOnDestroy(){
    this.notificationSubs  ? this.notificationSubs.unsubscribe() : null;
    this.notificationSelectedSubs ?  this.notificationSelectedSubs.unsubscribe() :  null;
    this.notificationSubs ? this.notificationSubs.unsubscribe() : null;
  }

}
