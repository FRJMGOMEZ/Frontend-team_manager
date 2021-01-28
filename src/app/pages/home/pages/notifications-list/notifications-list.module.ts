import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsListRoutingModule } from './notifications-list-routing.module';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationsListComponent } from './notifications-list.component';
@NgModule({
  declarations: [NotificationsListComponent,
                 NotificationCardComponent],
  imports: [
    CommonModule,
    NotificationsListRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class NotificationsListModule { }
