import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpBottomSheetInfoComponent } from './lp-bottom-sheet-info.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LpBottomSheetInfoComponent],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatIconModule
  ],
  exports:[LpBottomSheetInfoComponent]
})
export class LpBottomSheetInfoModule { }
