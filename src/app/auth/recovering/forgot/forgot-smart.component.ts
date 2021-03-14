import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../../core/providers/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-forgot-smart',
    template:`
  
    <app-forgot (recoverPass)="recoverPass($event)" (doHide)="hide()"> </app-forgot>
                   `
               
})
export class ForgotSmartComponent  {

    constructor(private authService: AuthService,private dialogRef: MatDialogRef<ForgotSmartComponent>, @Inject(MAT_DIALOG_DATA) data) { }

    hide() { 
        this.dialogRef.close()
    }

    recoverPass(email:string){
        this.authService.forgotPassword(email).subscribe(()=>{
            this.dialogRef.close(email)
        })
    }
}