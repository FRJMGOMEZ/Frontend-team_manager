import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerComponent } from './calendar-scheduler.component';
import { FormsModule } from '@angular/forms';
import { CalendarSchedulerMonthComponent } from './shared/components/calendar-scheduler-month/calendar-scheduler-month.component';
import { CalendarSchedulerRoutingModule } from './calendar-scheduler-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material/material.module';
import { LibraryPipesModule } from '../../library/pipes/library-pipes.module';
import { CalendarSchedulerMonthSmartComponent } from './shared/components/calendar-scheduler-month/calendar-scheduler-month-smart.component';
import { CalendarSchedulerDayComponent } from './shared/components/calendar-scheduler-day/calendar-scheduler-day.component';
import { CalendarSchedulerDaySmartComponent } from './shared/components/calendar-scheduler-day/calendar-scheduler-day-smart.component';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { CalendarSchedulerDateSelectionComponent } from './shared/components/calendar-scheduler-date-selection/calendar-scheduler-date-selection.component';
import { SharedModule } from '../../shared/shared.module';
import { CalendarSchedulerWeekComponent } from './shared/components/calendar-scheduler-week/calendar-scheduler-week.component';
import { CalendarSchedulerWeekSmartComponent } from './shared/components/calendar-scheduler-week/calendar-scheduler-week-smart.component';


@NgModule({
  declarations: [
    CalendarSchedulerComponent,
    CalendarSchedulerMonthComponent, 
    CalendarSchedulerMonthSmartComponent, 
    CalendarSchedulerDayComponent,
    CalendarSchedulerDaySmartComponent,
    CalendarSchedulerDateSelectionComponent,
    CalendarSchedulerWeekComponent,
    CalendarSchedulerWeekSmartComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarSchedulerRoutingModule, 
    FlexLayoutModule,
    MaterialModule,
    LibraryPipesModule,
    DirectivesModule,
    SharedModule
  ],
  exports: []
})
export class CalendarSchedulerModule { }
