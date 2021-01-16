import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDialogComponent } from './task-dialog.component';
import { TaskDialogSmartComponent } from './task-dialog-smart.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [TaskDialogSmartComponent,TaskDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports:[TaskDialogSmartComponent]
})
export class TaskDialogModule { }