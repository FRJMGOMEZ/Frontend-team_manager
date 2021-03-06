import { Component, Input, OnInit, Inject } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-user-info-smart-dialog',
    template:`
       <mat-dialog-content>
        <app-user-info [user]="user" ></app-user-info>
       </mat-dialog-content>
       <mat-dialog-actions fxLayoutAlign="center">
      <button (click)="closeDialog()" mat-raised-button> Close </button>
       </mat-dialog-actions>
    `,
    styleUrls: ['./user-info.component.scss']
})
export class UserInfoSmartDialogComponent implements OnInit {
    user: User;
    constructor(
        private dialogRef: MatDialogRef<UserInfoSmartDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data,

    ) { }
    ngOnInit() {
    this.user = this.data.user;
    }
    closeDialog(){
        this.dialogRef.close();
    }

}
