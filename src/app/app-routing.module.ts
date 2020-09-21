import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { CheckTokenGuard } from './auth/shared/guards/check-token.guard';

const appRoutes: Routes = [

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canLoad: [CheckTokenGuard] }, 

  { path: 'not-page-found', loadChildren: () => import('./not-page-found/not-page-found.module').then(m => m.NotPageFoundModule) },

/*   { path: 'pages-modals', outlet: 'modals', loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule) }, */

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
