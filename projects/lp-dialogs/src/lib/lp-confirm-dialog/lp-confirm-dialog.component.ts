import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lp-confirm-dialog',
  templateUrl: './lp-confirm-dialog.component.html',
  styleUrls: ['./lp-confirm-dialog.component.scss']
})
export class LpConfirmDialogComponent implements OnInit {

  message: string
  title: string
  constructor(private dialogRef: MatDialogRef<LpConfirmDialogComponent >, @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit(): void {
    this.message = this.data.message;
    this.title = this.data.title;
  }

  hideModal(accepted: boolean) {
    this.dialogRef.close(accepted)
  }

}
