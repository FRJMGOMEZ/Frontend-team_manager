import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

let pagesRoutes:Routes = [
  
  {
    path:'',component:PagesComponent,
    children:[
      {
        path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
   /*    {
        path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
      }, */
      {
        path: 'calendar', loadChildren: () => import('./calendar-scheduler/calendar-scheduler.module').then(m => m.CalendarSchedulerModule)
      }
    
     /*  {
        path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path:'profile', loadChildren:()=> import('./profile/profile.module').then(m=> m.ProfileModule)
      },
      
       */
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
