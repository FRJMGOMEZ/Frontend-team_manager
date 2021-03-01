import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-notifications-filter-smart-dialog',
  template: `
    <mat-dialog-content>
     <app-notifications-filter [queryString]="queryString" (getNotifications)="getNotifications.emit($event);dialogRef.close()" > </app-notifications-filter>
    </mat-dialog-content>
    <mat-dialog-actions fxLayoutAlign="center">
    <button (click)="closeDialog()" mat-raised-button> Close </button>
    </mat-dialog-actions>
    `,
  styles: [`
  .mat-dialog-content{
    max-height:75vh !important
  }
  `]
})
export class NotificationsFilterSmartDialogComponent implements OnInit {
  @Output() getNotifications = new EventEmitter<string>();
  queryString: string;
  constructor(public dialogRef: MatDialogRef<NotificationsFilterSmartDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.queryString = this.data.queryString;
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
