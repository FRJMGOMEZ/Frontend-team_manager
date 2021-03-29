import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerMonthSmartComponent } from './calendar-scheduler-month-smart.component';
import { CalendarSchedulerMonthComponent } from './calendar-scheduler-month.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../../../../../shared/material/material.module';
import { TaskDetailModule } from '../../../../../../shared/components/task-detail/task-detail.module';
import { TaskEditionAndCreationModule } from '../../../../../../shared/components/task-edition-and-creation/task-edition-and-creation.module';
import { TasksListDialogModule } from '../../../../../../shared/components/tasks-list-dialog/tasks-list-dialog.module';

let routes:Routes = [
  {path:'',component:CalendarSchedulerMonthSmartComponent}
]

@NgModule({
  declarations: [
    CalendarSchedulerMonthSmartComponent,
    CalendarSchedulerMonthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    TaskDetailModule,
    TaskEditionAndCreationModule,
    TasksListDialogModule,
  ],
  exports:[
    CalendarSchedulerMonthSmartComponent
  ]
})
export class CalendarSchedulerMonthModule { }
