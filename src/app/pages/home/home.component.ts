import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NotificationModel } from '../../core/models/notification.model';
import { NotificationsInfoComponent } from './components/notifications-info/notifications-info.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';
import { NotificationService } from '../../core/providers/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatTabGroup) tabGroup:MatTabGroup;
  childPath:string;
  infoComponent = NotificationsInfoComponent;
  notificationSelected:NotificationModel;
  notificationSubs: Subscription;
  constructor(private ar:ActivatedRoute,
              private router:Router,
              private cdr:ChangeDetectorRef,
              private notificationService:NotificationService) { }

  ngOnInit(){
     this.notificationSubs = this.notificationService.notificationSelected$.subscribe((notification:NotificationModel)=>{
        this.notificationSelected = notification;
        this.cdr.detectChanges();
     });
  }
  ngAfterViewInit(){
    this.childPath = this.router.url.split('/')[3];
    this.cdr.detectChanges();
    this.tabGroup.selectedIndex = this.childPath === 'new'  ? 0 : 1  };
  navigate(index:number){
    let url = index === 0 ? 'new' : 'record';
    url +=  this.notificationSelected ? `/${this.notificationSelected._id}` : '';
    this.router.navigate([url],{relativeTo:this.ar}).then(()=>{
      this.childPath = index === 0 ? 'new' : 'record'; 
    });
  }
  unselectNotification(){
   this.notificationService.selectNotification();
  }
  ngOnDestroy(){
    this.notificationSubs.unsubscribe();
  }

}
