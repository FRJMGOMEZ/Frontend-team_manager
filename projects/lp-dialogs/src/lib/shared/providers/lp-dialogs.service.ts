import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LpInfoDialogComponent } from '../../lp-info-dialog/lp-info-dialog.component';
import { LpConfirmDialogComponent } from '../../lp-confirm-dialog/lp-confirm-dialog.component';
import { LpDialogsModule } from '../../lp-dialogs.module';

@Injectable({
  providedIn: LpDialogsModule
})
export class LpDialogsService {
  constructor(private dialog: MatDialog) { }
  openConfirmDialog(title: string = 'CONFIRM DELETION', message: string = 'Are you sure?'): Observable<any> {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = { title, message };
    dialog.maxWidth='100vw';
    let dialogRef: MatDialogRef<any> = this.dialog.open(LpConfirmDialogComponent, dialog)
    return dialogRef.afterClosed()
  }
  openInfoDialog(message: string, title: string, item?: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.maxWidth = '100vw';
    dialog.data = { message, title, item: item ? item : null }
    let dialogRef: MatDialogRef<any> = this.dialog.open(LpInfoDialogComponent, dialog)
    return dialogRef.afterClosed()
  }
}
