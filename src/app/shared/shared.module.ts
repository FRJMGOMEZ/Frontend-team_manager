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
import { EventDialogComponent } from './components/event-dialog/event-dialog.component';
import { EventDialogSmartComponent } from './components/event-dialog/event-dialog-smart.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsSmartComponent } from './components/projects/project-smart.component';
import { EventDialogEditionAndCreationComponent } from './components/event-dialog-edition-and-creation/event-dialog-edition.component';
import { EventDialogEditionAndCreationSmartComponent } from './components/event-dialog-edition-and-creation/event-dialog-edition-and-creation-smart.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { LibraryPipesModule } from '../library/pipes/library-pipes.module';
import { EventsListDialogComponent } from './components/events-list-dialog/events-list-dialog.component';
import { EventsListDialogSmartComponent } from './components/events-list-dialog/events-list-dialog-smart.component';

@NgModule({
  declarations: [
    HeaderSmartComponent,
    HeaderComponent,
    ProjectDialogComponent,
    ProjectDialogSmartComponent,
    EventDialogComponent,
    EventDialogSmartComponent,
    ProjectsComponent,
    ProjectsSmartComponent,
    EventDialogEditionAndCreationComponent,
    EventDialogEditionAndCreationSmartComponent,
    EventsListDialogSmartComponent,
    EventsListDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    LibraryPipesModule,
    FlexLayoutModule
  ],
  exports:[
    HeaderSmartComponent,
    ProjectsSmartComponent
  ]
})
export class SharedModule { }
