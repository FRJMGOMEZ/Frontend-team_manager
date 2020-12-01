import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from './pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HeaderSmartComponent } from './components/header/header-smart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { ProjectDialogSmartComponent } from './components/project-dialog/project-dialog-smart-component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsSmartComponent } from './components/projects/project-smart.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { NoProjectsComponent } from './components/no-projects/no-projects.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { TaskDialogSmartComponent } from './components/task-dialog/task-dialog-smart.component';
import { TasksListDialogSmartComponent } from './components/tasks-list-dialog/tasks-list-dialog-smart.component';
import { TasksListDialogComponent } from './components/tasks-list-dialog/tasks-list-dialog.component';
import { TaskDialogEditionAndCreationSmartComponent } from './components/task-dialog-edition-and-creation/task-dialog-edition-and-creation-smart.component';
import { TaskDialogEditionAndCreationComponent } from './components/task-dialog-edition-and-creation/task-dialog-edition-and-creation.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PlDirectivesModule } from '../library/directives/pl-directives.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LpDateSelectorModule } from '../library/components/lp-date-selector/lp-date-selector.module';
import { LpPipesModule } from '../library/lp-pipes/lp-pipes.module';


@NgModule({
  declarations: [
    HeaderSmartComponent,
    HeaderComponent,
    ProjectDialogComponent,
    ProjectDialogSmartComponent,
    TaskDialogComponent,
    TaskDialogSmartComponent,
    ProjectsComponent,
    ProjectsSmartComponent,
    TaskDialogEditionAndCreationComponent,
    TaskDialogEditionAndCreationSmartComponent,
    TasksListDialogSmartComponent,
    TasksListDialogComponent,
    NoProjectsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    LpPipesModule,
    FlexLayoutModule,
    PlDirectivesModule,
    LpDateSelectorModule],
  exports:[
    HeaderSmartComponent,
    ProjectsSmartComponent,
    NoProjectsComponent
  ]
})
export class SharedModule { }
