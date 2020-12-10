import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListDialogSmartComponent } from './tasks-list-dialog-smart.component';
import { TasksListDialogComponent } from './tasks-list-dialog.component';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TasksListDialogSmartComponent,TasksListDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[TasksListDialogSmartComponent]
})
export class TasksListDialogModule { }
