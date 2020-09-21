import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogsComponent } from './confirm-dialogs/confirm-dialogs.component';
import { InformDialogsComponent } from './inform-dialogs/inform-dialogs.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ConfirmDialogsComponent, InformDialogsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [ConfirmDialogsComponent, InformDialogsComponent]
})
export class GlobalDialogsModule { }
