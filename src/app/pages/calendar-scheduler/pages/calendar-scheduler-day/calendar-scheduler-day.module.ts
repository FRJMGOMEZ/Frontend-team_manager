import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerDayComponent } from './calendar-scheduler-day.component';
import { CalendarSchedulerDaySmartComponent } from './calendar-scheduler-day-smart.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../../../shared/material/material.module';
import { TaskDetailModule } from '../../../../shared/components/task-detail/task-detail.module';
import { TaskEditionAndCreationModule } from '../../../../shared/components/task-edition-and-creation/task-edition-and-creation.module';
import { TasksListDialogModule } from '../../../../shared/components/tasks-list-dialog/tasks-list-dialog.module';


let routes: Routes = [
  { path: '', component: CalendarSchedulerDaySmartComponent}
]

@NgModule({
  declarations: [CalendarSchedulerDaySmartComponent,CalendarSchedulerDayComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    TaskDetailModule,
    TaskEditionAndCreationModule,
    TasksListDialogModule,
  ],
  exports:[CalendarSchedulerDaySmartComponent]
})
export class CalendarSchedulerDayModule { }
