import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from '../shared/components/header/header.module';
import { ProjectsModule } from '../shared/components/projects/projects.module';
import { NoProjectsComponent } from '../shared/components/no-projects/no-projects.component';
import { ProjectDialogModule } from '../shared/components/project-dialog/project-dialog.module';

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
    HeaderModule,
    ProjectsModule,
    ProjectDialogModule
  ]
})
export class PagesModule { }
