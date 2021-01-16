import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { LpConfirmDialogComponent } from './lp-confirm-dialog/lp-confirm-dialog.component';
import { LpInfoDialogComponent } from './lp-info-dialog/lp-info-dialog.component';

@NgModule({
  declarations: [LpConfirmDialogComponent,LpInfoDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers:[],
  exports: [LpConfirmDialogComponent, LpInfoDialogComponent]
})
export class LpDialogsModule { }
