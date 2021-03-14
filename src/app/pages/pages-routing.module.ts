import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CheckTokenGuard } from '../shared/guards/check-token.guard';

let pagesRoutes:Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path:'home',
        canActivate: [CheckTokenGuard],
        loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar-scheduler/calendar-scheduler.module').then(m => m.CalendarSchedulerModule),
        canActivate: [CheckTokenGuard],
        data: {animation: 'calendar-scheduler'} 
      },
      {
        path:'task-manager',
        loadChildren: () => import('./task-manager/task-manager.module').then(m => m.TaskManagerModule),
        canActivate: [CheckTokenGuard],
        data:{animation:'task-manager'}
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes)
  ]
})
export class PagesRoutingModule { }
