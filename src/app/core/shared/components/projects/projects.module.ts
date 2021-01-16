import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSmartComponent } from './project-smart.component';
import { ProjectsComponent } from './projects.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ProjectsSmartComponent,ProjectsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule],
  exports:[ProjectsSmartComponent]
})
export class ProjectsModule { }
