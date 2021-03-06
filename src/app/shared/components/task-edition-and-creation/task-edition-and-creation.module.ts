import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDialogEditionAndCreationSmartComponent } from './task-dialog-edition-and-creation-smart.component';
import { TaskEditionAndCreationComponent } from './task-edition-and-creation.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { TaskEditionAndCreationSmartComponent } from './task-edition-and-creation-smart.component';
import { LpDateSelectorModule } from 'lp-date-selector';
import { LpInputTrimmerModule } from '../../../../../projects/lp-input-trimmer/src/lib/lp-input-trimmer.module';
import { LpDatePipesModule } from 'lp-date-pipes';

@NgModule({
  declarations: [TaskDialogEditionAndCreationSmartComponent, TaskEditionAndCreationComponent, TaskEditionAndCreationSmartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LpDatePipesModule,
    FormsModule,
    LpDateSelectorModule, 
    FlexLayoutModule,
    LpInputTrimmerModule],
  exports: [TaskDialogEditionAndCreationSmartComponent, TaskEditionAndCreationSmartComponent]
})
export class TaskEditionAndCreationModule { }