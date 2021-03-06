import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home.component';
import { NotificationsInfoComponent } from './components/notifications-info/notifications-info.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NotificationChangeDetailComponent } from './components/notification-change-detail/notification-change-detail.component';
import { TaskDetailModule } from '../../shared/components/task-detail/task-detail.module';
import { ProjectDetailModule } from '../../shared/components/project-detail/project-detail.module';
import { LpBottomSheetInfoModule } from 'lp-bottom-sheet-info';

@NgModule({
  declarations: [
    HomeComponent,
    NotificationsInfoComponent,
    NotificationChangeDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    TaskDetailModule,
    ProjectDetailModule,
    LpBottomSheetInfoModule
  ]
})
export class HomeModule { }
