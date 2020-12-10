import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDialogEditionAndCreationSmartComponent } from './task-dialog-edition-and-creation-smart.component';
import { TaskDialogEditionAndCreationComponent } from './task-dialog-edition-and-creation.component';
import { MaterialModule } from '../../material/material.module';
import { LpPipesModule } from '../../../library/lp-pipes/lp-pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LpDateSelectorModule } from '../../../library/components/lp-date-selector/lp-date-selector.module';
import { LpDirectivesModule } from '../../../library/lp-directives/lp-directives.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TaskDialogEditionAndCreationSmartComponent,TaskDialogEditionAndCreationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LpPipesModule,
    FormsModule,
    LpDateSelectorModule, 
    LpDirectivesModule,
    FlexLayoutModule],
  exports:[TaskDialogEditionAndCreationSmartComponent]
})
export class TaskDialogEditionAndCreationModule { }