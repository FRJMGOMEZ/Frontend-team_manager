import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from '../core/shared/components/header/header.module';
import { ProjectsModule } from '../core/shared/components/projects/projects.module';
import { NoProjectsComponent } from '../core/shared/components/no-projects/no-projects.component';
import { ProjectDialogModule } from '../core/shared/components/project-dialog/project-dialog.module';
import { HomeComponent } from './home/containers/home/home.component';
import { DirectivesModule } from '../core/shared/directives/directives.module';

@NgModule({
  declarations: [
    PagesComponent,
    NoProjectsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    HeaderModule,
    ProjectsModule,
    ProjectDialogModule,
    DirectivesModule
  ]
})
export class PagesModule { }
