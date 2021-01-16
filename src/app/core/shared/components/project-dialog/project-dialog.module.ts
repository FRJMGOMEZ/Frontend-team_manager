import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectDialogComponent } from './project-dialog.component';
import { ProjectDialogSmartComponent } from './project-dialog-smart-component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ProjectDialogComponent,ProjectDialogSmartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports:[ProjectDialogSmartComponent]
})
export class ProjectDialogModule { }
