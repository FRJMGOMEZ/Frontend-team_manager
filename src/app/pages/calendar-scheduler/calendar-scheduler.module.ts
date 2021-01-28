import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerComponent } from './calendar-scheduler.component';
import { FormsModule } from '@angular/forms';
import { CalendarSchedulerRoutingModule } from './calendar-scheduler-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LpDateSelectorModule } from '../../library/components/lp-date-selector/lp-date-selector.module';
import { RouterModule } from '@angular/router';
import { LpBottomSheetInfoModule } from 'src/app/library/components/lp-bottom-sheet-info/lp-bottom-sheet-info.module';
import { CalendarSchedulerDayInfoComponent } from './components/calendar-scheduler-day-info/calendar-scheduler-day-info.component';
import { CalendarSchedulerMonthInfoComponent } from './components/calendar-scheduler-month-info/calendar-scheduler-month-info.component';
import { MaterialModule } from '../../shared/material/material.module';

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
