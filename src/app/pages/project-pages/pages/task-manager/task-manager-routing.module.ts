import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagerComponent } from './task-manager.component';
import { TaskGuard } from '../../../../shared/guards/task.guard';

let routes: Routes = [
  { path: '', component: TaskManagerComponent, children:[
    { path: ':id', loadChildren: () => import('./pages/task-manager-panel/task-manager-panel.module').then(m => m.TaskManagerPanelModule),canActivate:[TaskGuard]}
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class TaskManagerRoutingModule { }
