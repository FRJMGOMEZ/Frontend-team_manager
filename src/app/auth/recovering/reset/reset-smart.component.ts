import { Component, Inject } from '@angular/core';
import { AuthService } from '../../../core/providers/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-reset-smart',
    template: `
    
            <app-reset (hide)="hideModal()" (reset)="changePassword($event)"> </app-reset>
         
    `
})
export class ResetSmartComponent {

    email: string

    constructor(  private authService: AuthService,  private dialogRef: MatDialogRef<ResetSmartComponent>, @Inject(MAT_DIALOG_DATA) private data:any) {}
    ngOnInit() {
        this.email = this.data.email;
    }

    changePassword({ password, resetCode }) {
        this.authService.setNewPassword(resetCode, password, this.email).subscribe(() => {
            this.dialogRef.close();
        })
    }

    hideModal() {
        this.dialogRef.close()
    }
}
