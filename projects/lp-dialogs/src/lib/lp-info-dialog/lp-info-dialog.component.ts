import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lp-info-dialog',
  templateUrl: './lp-info-dialog.component.html',
  styleUrls: ['./lp-info-dialog.component.scss']
})
export class LpInfoDialogComponent implements OnInit {

  message: string
  item: string
  title: string
  constructor(private dialogRef: MatDialogRef<LpInfoDialogComponent>, @Inject(MAT_DIALOG_DATA) private data) { }
  ngOnInit(): void {
    this.message = this.data.message;
    this.title = this.data.title;
    this.item = this.data.item;
  }
  hideModal() {
    this.dialogRef.close()
  }

  /// MUST CREATE A BACKEND TO REPORT ERRORS ///
  reportError() { }

}
