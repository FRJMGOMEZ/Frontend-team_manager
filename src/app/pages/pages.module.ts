import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoProjectsComponent } from '../shared/components/no-projects/no-projects.component';
import { MaterialModule } from '../shared/material/material.module';
import { ProjectsModule } from '../core/components/projects/projects.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { ProjectEditionAndCreationModule } from '../shared/components/project-edition-and-creation/project-edition-and-creation.module';
import { UserInfoModule } from '../shared/components/user-info/user-info.module';

@NgModule({
  declarations: [
    PagesComponent,
    NoProjectsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    ProjectsModule,
    ProjectEditionAndCreationModule,
    DirectivesModule,
    UserInfoModule
  ]
})
export class PagesModule { }
