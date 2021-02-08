import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskDialogSmartComponent } from './task-dialog-detail-smart.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { TaskDetailComponent } from './task-detail.component';
import { TaskDetailSmartComponent } from './task-detail-smart.component';
import { ItemVersionsModule } from '../item-versions/item-versions.module';


@NgModule({
  declarations: [TaskDialogSmartComponent, TaskDetailComponent, TaskDetailSmartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ItemVersionsModule
  ],
  exports: [TaskDialogSmartComponent, TaskDetailSmartComponent]
})
export class TaskDetailModule { }
