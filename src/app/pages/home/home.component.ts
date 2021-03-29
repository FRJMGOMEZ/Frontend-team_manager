import { Component, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NotificationModel } from '../../core/models/notification.model';
import { NotificationsInfoComponent } from './components/notifications-info/notifications-info.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../core/providers/notification.service';
import { Subscription, timer } from 'rxjs';
import { LpLocalStorage } from 'lp-operations';
import { RoutesService } from '../../core/providers/routes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  childPath:string;
  infoComponent = NotificationsInfoComponent;
  notificationSelected:NotificationModel;
  notificationSubs: Subscription;
  tabIndex:number;
  constructor(private ar:ActivatedRoute,
              private router:Router,
              private cdr:ChangeDetectorRef,
              private notificationService:NotificationService,
              private routesService:RoutesService) { }

  ngOnInit(){
     this.routesService.setCurrentPage('home');

     this.notificationSubs = this.notificationService.notificationSelected$.subscribe((notification:NotificationModel)=>{
        this.notificationSelected = notification;
        this.selecTab();
     });
  }
  ngAfterViewInit(){
    this.childPath = this.router.url.split('/')[3];
    LpLocalStorage.set('state-data',this.childPath,'home-path');
    this.tabIndex = this.childPath === 'new' ? 0 : 1;  
    this.cdr.detectChanges();
  }
   
  navigate(index:number){
      this.selecTab();
      let url = index === 0 ? 'new' : 'record';
      url += this.notificationSelected ? `/${this.notificationSelected._id}` : '';
      this.router.navigate([url], { relativeTo: this.ar }).then(() => {
        this.childPath = index === 0 ? 'new' : 'record';
        LpLocalStorage.set('state-data', this.childPath, 'home-path');
      });
  }
  unselectNotification(){
   this.notificationService.selectNotification();
   this.navigate(this.childPath === 'new' ? 0 : 1);
  }

  selecTab(){
    this.tabIndex = this.childPath === 'new' ? 1 : 0;
    this.cdr.detectChanges();
    timer().subscribe(() => {
      this.tabIndex = this.childPath === 'new' ? 0 : 1;
    });
  }
  ngOnDestroy(){
    this.notificationSubs ? this.notificationSubs.unsubscribe() : null;
  }

}
