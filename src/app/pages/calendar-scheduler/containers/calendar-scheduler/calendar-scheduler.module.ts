import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerComponent } from './calendar-scheduler.component';
import { FormsModule } from '@angular/forms';
import { CalendarSchedulerRoutingModule } from './calendar-scheduler-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../../../core/shared/material/material.module';
import { LpDateSelectorModule } from '../../../../library/components/lp-date-selector/lp-date-selector.module';
import { CalendarSchedulerMonthInfoComponent } from '../../components/calendar-scheduler-month-info/calendar-scheduler-month-info.component';
import { CalendarSchedulerDayInfoComponent } from '../../components/calendar-scheduler-day-info/calendar-scheduler-day-info.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CalendarSchedulerComponent,
    CalendarSchedulerMonthInfoComponent,
    CalendarSchedulerDayInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarSchedulerRoutingModule, 
    FlexLayoutModule,
    MaterialModule,
    LpDateSelectorModule,
    RouterModule
  ],
  exports: []
})
export class CalendarSchedulerModule { }
