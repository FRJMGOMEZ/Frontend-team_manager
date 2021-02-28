import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeGuard } from './shared/guards/home.guard';


let routes:Routes = [
  {
    path:'',component:HomeComponent,
    canActivate: [HomeGuard],
    children:[
      { path: '', redirectTo: 'new',pathMatch:'full'},
      {path:'record',loadChildren : ()=> import('./pages/notifications-list/notifications-list.module').then(m => m.NotificationsListModule)},
      { path: 'new', loadChildren: () => import('./pages/notifications-list/notifications-list.module').then(m => m.NotificationsListModule)}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }

