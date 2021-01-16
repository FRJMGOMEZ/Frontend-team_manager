import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerPanelComponent } from './task-manager-panel.component';
import { TaskManagerProgressComponent} from './components/task-manager-progress/task-manager-progress.component'
import { TaskManagerInfoComponent} from './components/task-manager-info/task-manager-info.component'
import { TaskManagerFilesComponent } from './components/task-manager-files/task-manager-files.component';
import { TaskManagerPanelRoutingModule } from './task-manager-panel-routing.module';
import { TaskDialogEditionAndCreationModule } from '../../../../../../core/shared/components/task-dialog-edition-and-creation/task-dialog-edition-and-creation.module';
import { FormsModule } from '@angular/forms';
import { ChatModule } from '../../../../../../core/shared/components/chat/chat.module';
import { MaterialModule } from '../../../../../../core/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from '../../../../../../core/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    TaskManagerPanelComponent,
    TaskManagerProgressComponent,
    TaskManagerInfoComponent,
    TaskManagerFilesComponent
  ],
  imports: [
    CommonModule,
    TaskManagerPanelRoutingModule,
    TaskDialogEditionAndCreationModule,
    FormsModule,
    ChatModule,
    MaterialModule,
    FlexLayoutModule,
    PipesModule,
    TaskManagerPanelRoutingModule

  ]
})
export class TaskManagerPanelModule { }
