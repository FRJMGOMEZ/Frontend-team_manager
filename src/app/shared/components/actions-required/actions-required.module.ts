import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsRequiredComponent } from './actions-required.component';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActionsRequiredSmartComponent } from './actions-required-smart.component';
import { ActionsRequiredSmartDialogComponent } from './actions-required-smart-dialog.component';
import { FormsModule } from '@angular/forms';
import { LpThinkingTimeProgressModule } from 'lp-thinking-time-progress';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    LpThinkingTimeProgressModule
  ],
  declarations: [ActionsRequiredComponent, ActionsRequiredSmartComponent, ActionsRequiredSmartDialogComponent],
  exports: [ActionsRequiredSmartComponent, ActionsRequiredSmartDialogComponent]
})
export class ActionsRequiredModule { }
