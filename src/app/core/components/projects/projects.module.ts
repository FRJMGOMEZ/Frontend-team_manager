import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSmartComponent } from './project-smart.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../../shared/material/material.module';
import { ProjectsDialogComponent } from './projects-dialog/projects-dialog.component';


@NgModule({
  declarations: [ProjectsSmartComponent, ProjectsComponent, ProjectsDialogComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule],
  exports: [ProjectsSmartComponent, ProjectsDialogComponent ]
})
export class ProjectsModule { }
