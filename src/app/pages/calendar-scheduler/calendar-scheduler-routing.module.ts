import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarSchedulerComponent } from './calendar-scheduler.component';
import { MaterialModule } from '../../shared/material/material.module';

let routes:Routes = [
  {
    path:'',component:CalendarSchedulerComponent,children:[
      {path:'month',loadChildren:()=> import('./pages/calendar-scheduler-month/calendar-scheduler-month.module').then((m)=> m.CalendarSchedulerMonthModule)},
      {path: 'day',loadChildren: () => import('./pages/calendar-scheduler-day/calendar-scheduler-day.module').then((m) => m.CalendarSchedulerDayModule) },]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class CalendarSchedulerRoutingModule { }
