import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail.component';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from '../../directives/directives.module';
import { FormsModule } from '@angular/forms';
import { ItemVersionsModule } from '../item-versions/item-versions.module';
import { ProjectsDetailDialogSmartComponent } from './projects-detail-dialog-smart.component';
import { ProjectDetailSmartComponent } from './project-detail-smart.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DirectivesModule,
    FormsModule,
    ItemVersionsModule
  ],
  declarations: [ProjectDetailComponent, ProjectsDetailDialogSmartComponent, ProjectDetailSmartComponent],
  exports: [ProjectsDetailDialogSmartComponent, ProjectDetailSmartComponent]
})
export class ProjectDetailModule { }
