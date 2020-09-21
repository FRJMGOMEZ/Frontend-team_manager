import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectAdmRoleDirective } from './project-adm-role.directive';
import { IsUserOnlineDirective } from './is-user-online.directive';
import { IsAdmDirective } from './is-adm.directive';

@NgModule({
  declarations: [
    ProjectAdmRoleDirective,
    IsUserOnlineDirective,
    IsAdmDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProjectAdmRoleDirective,
    IsUserOnlineDirective,
    IsAdmDirective
  ]
})
export class DirectivesModule { }
