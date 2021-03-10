import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { CheckTokenGuard } from './auth/shared/guards/check-token.guard';



const appRoutes: Routes = [

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canLoad: [CheckTokenGuard] }, 

  { path: 'not-page-found', loadChildren: () => import('./core/components/not-page-found/not-page-found.module').then(m => m.NotPageFoundModule) },

  { path: '', redirectTo: 'pages', pathMatch: 'full' }, 

  { path: "**", redirectTo: '/not-page-found', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
