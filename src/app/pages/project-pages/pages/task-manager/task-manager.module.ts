import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LpDatePipesModule } from 'lp-date-pipes';
import { TaskManagerFilterComponent } from './components/task-manager-filter/task-manager-filter.component';
import { TaskManagerListComponent } from './components/task-manager-list/task-manager-list.component';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerComponent } from './task-manager.component';
import { FormsModule } from '@angular/forms';
import { LpDateSelectorModule } from 'lp-date-selector';
import { LpInputTrimmerModule } from 'lp-input-trimmer';
import { MaterialModule } from '../../../../shared/material/material.module';
import { LpDialogsModule } from 'lp-dialogs';

@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskManagerFilterComponent,
    TaskManagerListComponent
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    LpDateSelectorModule,
    LpDatePipesModule,
    LpDialogsModule,
    FormsModule,
    LpInputTrimmerModule
  ]
})
export class TaskManagerModule { }
