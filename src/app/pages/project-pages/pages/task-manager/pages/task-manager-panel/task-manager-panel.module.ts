import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerPanelComponent } from './task-manager-panel.component';
import { TaskManagerProgressComponent} from './components/task-manager-progress/task-manager-progress.component'
import { TaskManagerInfoComponent} from './components/task-manager-info/task-manager-info.component'
import { TaskManagerFilesComponent } from './components/task-manager-files/task-manager-files.component';
import { TaskManagerPanelRoutingModule } from './task-manager-panel-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskManagerChatComponent } from './components/task-manager-chat/task-manager-chat.component';
import { TaskEditionAndCreationModule } from '../../../../../../shared/components/task-edition-and-creation/task-edition-and-creation.module';
import { ChatModule } from '../../../../../../shared/components/chat/chat.module';
import { MaterialModule } from '../../../../../../shared/material/material.module';
import { ActionsRequiredModule } from '../../../../../../shared/components/actions-required/actions-required.module';
import { PipesModule } from '../../../../../../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    TaskManagerPanelComponent,
    TaskManagerProgressComponent,
    TaskManagerInfoComponent,
    TaskManagerFilesComponent,
    TaskManagerChatComponent
  ],
  imports: [
    CommonModule,
    TaskManagerPanelRoutingModule,
    TaskEditionAndCreationModule,
    FormsModule,
    ChatModule,
    MaterialModule,
    FlexLayoutModule,
    PipesModule,
    TaskManagerPanelRoutingModule,
    ActionsRequiredModule

  ]
})
export class TaskManagerPanelModule { }
