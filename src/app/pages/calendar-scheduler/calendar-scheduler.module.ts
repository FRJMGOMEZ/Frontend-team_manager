import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerComponent } from './calendar-scheduler.component';
import { FormsModule } from '@angular/forms';
import { CalendarSchedulerMonthComponent } from './shared/components/calendar-scheduler-month/calendar-scheduler-month.component';
import { CalendarSchedulerRoutingModule } from './calendar-scheduler-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material/material.module';

import { CalendarSchedulerMonthSmartComponent } from './shared/components/calendar-scheduler-month/calendar-scheduler-month-smart.component';
import { CalendarSchedulerDayComponent } from './shared/components/calendar-scheduler-day/calendar-scheduler-day.component';
import { CalendarSchedulerDaySmartComponent } from './shared/components/calendar-scheduler-day/calendar-scheduler-day-smart.component';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { SharedModule } from '../../shared/shared.module';
import { CalendarSchedulerDayInfoComponent } from './shared/components/calendar-scheduler-day-info/calendar-scheduler-day-info.component';
import { CalendarSchedulerMonthInfoComponent } from './shared/components/calendar-scheduler-month-info/calendar-scheduler-month-info.component';
import { LpDateSelectorModule } from '../../library/components/lp-date-selector/lp-date-selector.module';
import { LpPipesModule } from '../../library/lp-pipes/lp-pipes.module';


@NgModule({
  declarations: [
    CalendarSchedulerComponent,
    CalendarSchedulerMonthComponent, 
    CalendarSchedulerMonthSmartComponent, 
    CalendarSchedulerDayComponent,
    CalendarSchedulerDaySmartComponent,
    CalendarSchedulerDayInfoComponent,
    CalendarSchedulerMonthInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarSchedulerRoutingModule, 
    FlexLayoutModule,
    MaterialModule,
    LpPipesModule,
    DirectivesModule,
    SharedModule,
    LpDateSelectorModule
  ],
  exports: []
})
export class CalendarSchedulerModule { }
