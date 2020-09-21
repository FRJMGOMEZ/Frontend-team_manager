import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarSchedulerComponent } from './calendar-scheduler.component';

let routes:Routes = [
  {
    path:'',component:CalendarSchedulerComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CalendarSchedulerRoutingModule { }
