import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TaskManagerComponent} from './task-manager.component'
import { TaskManagerFilterComponent } from './shared/components/task-manager-filter/task-manager-filter.component';
import { TaskManagerListComponent } from './shared/components/task-manager-list/task-manager-list.component'
import { LpDateSelectorModule } from '../../library/components/lp-date-selector/lp-date-selector.module';
import { FormsModule } from '@angular/forms';
import { LpPipesModule } from '../../library/lp-pipes/lp-pipes.module';
import { ChatModule } from '../../shared/components/chat/chat.module';
import { TaskManagerChatComponent } from './shared/components/task-manager-chat/task-manager-chat.component';
import { TaskManagerProgressComponent } from './shared/components/task-manager-progress/task-manager-progress.component';
import { TaskDialogEditionAndCreationModule } from '../../shared/components/task-dialog-edition-and-creation/task-dialog-edition-and-creation.module';
import { GlobalDialogsModule } from '../../library/components/global-dialogs/global-dialogs.module';

let routes:Routes = [

  {path:'',component:TaskManagerComponent }
]

@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskManagerFilterComponent,
    TaskManagerListComponent,
    TaskManagerChatComponent,
    TaskManagerProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    LpDateSelectorModule,
    FormsModule,
    LpPipesModule,
    ChatModule,
    TaskDialogEditionAndCreationModule,
    GlobalDialogsModule
  ]
})
export class TaskManagerModule { }
