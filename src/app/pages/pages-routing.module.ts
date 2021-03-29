import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CheckTokenGuard } from '../shared/guards/check-token.guard';
import { ProjectGuard } from '../shared/guards/project.guard';

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
        canActivate: [CheckTokenGuard, ProjectGuard],
        path:':id',
        loadChildren: () => import('./project-pages/project-pages.module').then(m => m.ProjectPagesModule)
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
