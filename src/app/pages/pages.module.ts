import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LpDirectivesModule } from '../library/lp-directives/lp-directives.module';
import { NoProjectsComponent } from '../shared/components/no-projects/no-projects.component';
import { MaterialModule } from '../shared/material/material.module';
import { ProjectsModule } from '../core/components/projects/projects.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { ProjectEditionAndCreationModule } from '../shared/components/project-edition-and-creation/project-edition-and-creation.module';
import { UserInfoComponent } from '../core/components/user-info/user-info.component';

@NgModule({
  declarations: [
    PagesComponent,
    NoProjectsComponent,
    UserInfoComponent
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
    LpDirectivesModule
  ]
})
export class PagesModule { }
