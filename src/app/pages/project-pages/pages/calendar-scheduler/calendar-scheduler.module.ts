import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerComponent } from './calendar-scheduler.component';
import { FormsModule } from '@angular/forms';
import { CalendarSchedulerRoutingModule } from './calendar-scheduler-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CalendarSchedulerDayInfoComponent } from './components/calendar-scheduler-day-info/calendar-scheduler-day-info.component';
import { CalendarSchedulerMonthInfoComponent } from './components/calendar-scheduler-month-info/calendar-scheduler-month-info.component';
import { LpDateSelectorModule } from 'lp-date-selector';
import { LpBottomSheetInfoModule } from 'lp-bottom-sheet-info';
import { MaterialModule } from '../../../../shared/material/material.module';

@NgModule({
  declarations: [
    CalendarSchedulerComponent,
    CalendarSchedulerDayInfoComponent,
    CalendarSchedulerMonthInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarSchedulerRoutingModule, 
    FlexLayoutModule,
    MaterialModule,
    LpDateSelectorModule,
    RouterModule,
    LpBottomSheetInfoModule
  ],
  exports: []
})
export class CalendarSchedulerModule { }
