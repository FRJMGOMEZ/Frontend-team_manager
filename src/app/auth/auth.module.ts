import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { PasswordDirective } from './shared/directives/password-validator.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginSmartComponent } from './login/login-smart.component';
import { RegistrationSmartComponent } from './registration/registration-smart.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotSmartComponent } from './recovering/forgot/forgot-smart.component';
import { ResetComponent } from './recovering/reset/reset.component';
import { ForgotComponent } from './recovering/forgot/forgot.component';
import { ResetSmartComponent } from './recovering/reset/reset-smart.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MaterialModule } from '../shared/material/material.module';


let authRoutes:Routes=[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginSmartComponent,
  }, 
  {
    path:'registration', component:RegistrationSmartComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    LoginSmartComponent,
    PasswordDirective,
    RegistrationSmartComponent,
    RegistrationComponent,
    ResetComponent,
    ForgotComponent,
    ForgotSmartComponent,
    ResetSmartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PipesModule,
    MaterialModule
  ]
/*   entryComponents: [ForgotSmartComponent] */
})
export class AuthModule { }
