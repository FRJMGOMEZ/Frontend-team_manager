import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { ProjectDialogComponent } from './project-dialog.component';
import { ProjectDialogSmartComponent } from './project-dialog-smart-component';

@NgModule({
  declarations: [ProjectDialogComponent,ProjectDialogSmartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProjectDialogModule { }
