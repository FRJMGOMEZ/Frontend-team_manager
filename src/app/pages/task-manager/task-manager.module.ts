import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import {TaskManagerComponent} from './task-manager.component'
import {TaskManagerPostEditComponent} from './shared/components/task-manager-post-edit/task-manager-post-edit.component';
import { TaskManagerFilterComponent } from './shared/components/task-manager-filter/task-manager-filter.component';
import { TaskManagerListComponent } from './shared/components/task-manager-list/task-manager-list.component'
import { LpDateSelectorModule } from '../../library/components/lp-date-selector/lp-date-selector.module';
import { FormsModule } from '@angular/forms';

import { LpChatModule } from '../../library/components/lp-chat/lp-chat.module';
import { TaskManagerPanelComponent } from './shared/components/task-manager-panel/task-manager-panel.component';
import { LpPipesModule } from '../../library/lp-pipes/lp-pipes.module';


let routes:Routes = [

  {path:'',component:TaskManagerComponent }
]

@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskManagerPostEditComponent,
    TaskManagerFilterComponent,
    TaskManagerListComponent,
    TaskManagerPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    LpDateSelectorModule,
    FormsModule,
    LpPipesModule,
    LpChatModule
  ]
})
export class TaskManagerModule { }
