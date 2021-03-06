import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsListRoutingModule } from './notifications-list-routing.module';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationsListComponent } from './notifications-list.component';
import { ActionsRequiredModule } from '../../../../shared/components/actions-required/actions-required.module';
import { LpDateSelectorModule } from 'lp-date-selector';
import { FormsModule } from '@angular/forms';
import { NotificationsFilterComponent } from './components/notifications-filter/notifications-filter.component';
import { NotificationsFilterSmartDialogComponent } from './components/notifications-filter/notifications-filter-smart-dialog.component';
import { LpInputTrimmerModule } from 'lp-input-trimmer';
import { LpDatePipesModule } from 'lp-date-pipes';

@NgModule({
  declarations: [NotificationsListComponent,
                 NotificationCardComponent,
                NotificationsFilterComponent,
                NotificationsFilterSmartDialogComponent],
  imports: [
    CommonModule,
    NotificationsListRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ActionsRequiredModule,
    LpDateSelectorModule,
    FormsModule,
    LpDatePipesModule,
    LpInputTrimmerModule
  ]
})
export class NotificationsListModule { }
