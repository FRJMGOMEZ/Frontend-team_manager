import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { ProjectEditionAndCreationComponent } from './project-editon-and-creation.component';
import { ProjectEditionAndCreationSmartComponent } from './project-editon-and-creation-smart-component';
import { LpInputTrimmerModule } from 'lp-input-trimmer';

@NgModule({
  declarations: [ProjectEditionAndCreationComponent,ProjectEditionAndCreationSmartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    LpInputTrimmerModule
  ],
  exports: [ProjectEditionAndCreationSmartComponent]
})
export class ProjectEditionAndCreationModule { }
