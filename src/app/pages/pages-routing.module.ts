import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CheckTokenGuard } from '../auth/shared/guards/check-token.guard';

let pagesRoutes:Routes = [
  
  {
    path:'',component:PagesComponent,
    children:[
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[CheckTokenGuard]
      },
      {
        path: 'calendar', loadChildren: () => import('./calendar-scheduler/calendar-scheduler.module').then(m => m.CalendarSchedulerModule), canActivate: [CheckTokenGuard]
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
