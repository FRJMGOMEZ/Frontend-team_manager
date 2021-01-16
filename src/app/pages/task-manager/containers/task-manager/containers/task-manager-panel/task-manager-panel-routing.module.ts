import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagerPanelComponent } from './task-manager-panel.component';

let routes:Routes = [
  {path:'',component:TaskManagerPanelComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class TaskManagerPanelRoutingModule { }
