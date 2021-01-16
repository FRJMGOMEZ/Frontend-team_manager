import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerMonthSmartComponent } from './calendar-scheduler-month-smart.component';
import { CalendarSchedulerMonthComponent } from './calendar-scheduler-month.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../../../core/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskDialogModule } from '../../../../../../core/shared/components/task-dialog/task-dialog.module';
import { TaskDialogEditionAndCreationModule } from '../../../../../../core/shared/components/task-dialog-edition-and-creation/task-dialog-edition-and-creation.module';
import { TasksListDialogModule } from '../../../../../../core/shared/components/tasks-list-dialog/tasks-list-dialog.module';

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
    TaskDialogModule,
    TaskDialogEditionAndCreationModule,
    TasksListDialogModule,
  ],
  exports:[
    CalendarSchedulerMonthSmartComponent
  ]
})
export class CalendarSchedulerMonthModule { }
