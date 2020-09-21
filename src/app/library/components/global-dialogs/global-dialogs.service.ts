import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogsComponent } from './confirm-dialogs/confirm-dialogs.component';
import { InformDialogsComponent } from './inform-dialogs/inform-dialogs.component';
import { GlobalDialogsModule } from './global-dialogs.module';
import { Observable } from 'rxjs';

//// Global dialogs service ////

@Injectable({
  providedIn: GlobalDialogsModule
})
export class GDService {
  constructor(private dialog: MatDialog) { }
  openConfirmDialog(title:string='CONFIRM DELETION',message:string='Are you sure?'): Observable<any> {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = {title,message}
    let dialogRef: MatDialogRef<any> = this.dialog.open(ConfirmDialogsComponent, dialog)
    return dialogRef.afterClosed()
  }
  openInfoDialog(message:string,title:string,item?:string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = {message,title,item:item?item:null}
    let dialogRef: MatDialogRef<any> = this.dialog.open(InformDialogsComponent, dialog)
    return dialogRef.afterClosed()
  }

}