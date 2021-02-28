import { NgModule } from '@angular/core';
import { LpThinkingTimeProgressComponent } from './lp-thinking-time-progress/lp-thinking-time-progress.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LpThinkingTimeProgressComponent
  ],
  imports: [
   CommonModule,
   MatIconModule,
   MatProgressSpinnerModule
  ],
  exports: [
    LpThinkingTimeProgressComponent
  ]
})
export class LpThinkingTimeProgressModule { }
