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

@NgModule({
  declarations: [
    CalendarSchedulerComponent,
    CalendarSchedulerMonthComponent, 
    CalendarSchedulerMonthSmartComponent, 
    CalendarSchedulerDayComponent,
    CalendarSchedulerDaySmartComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarSchedulerRoutingModule, 
    FlexLayoutModule,
    MaterialModule,
    LibraryPipesModule,
    DirectivesModule
  ],
  exports: []
})
export class CalendarSchedulerModule { }
