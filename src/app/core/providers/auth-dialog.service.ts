import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ForgotSmartComponent } from '../../auth/recovering/forgot/forgot-smart.component';
import { ResetSmartComponent } from '../../auth/recovering/reset/reset-smart.component';


@Injectable({
  providedIn: 'root'
})
export class AuthDialogService {

  constructor(private dialog: MatDialog,) { }
  openRecoverPassDialog(){
    const dialogForgot = new MatDialogConfig();
    dialogForgot.disableClose = true;
    dialogForgot.autoFocus = true;
    const dialogRef = this.dialog.open(ForgotSmartComponent, dialogForgot);
    return dialogRef.afterClosed().subscribe((email) => {
      if (email) {
        this.openResetPassDialog(email)
      }
    })
  }  
  openResetPassDialog(email:string){
    const dialogRecover = new MatDialogConfig();
    dialogRecover.disableClose = true;
    dialogRecover.autoFocus = true;
    dialogRecover.data = { email };
    this.dialog.open(ResetSmartComponent, dialogRecover);
  }
}
