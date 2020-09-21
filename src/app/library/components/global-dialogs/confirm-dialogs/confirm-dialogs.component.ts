import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialogs',
  templateUrl: './confirm-dialogs.component.html',
  styleUrls: ['./confirm-dialogs.component.css']
})
export class ConfirmDialogsComponent implements OnInit {

  message:string
  title:string
  constructor(private dialogRef: MatDialogRef<ConfirmDialogsComponent>,@Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit(): void {
    this.message = this.data.message;
    this.title = this.data.title;
  }

  hideModal(accepted:boolean){
    this.dialogRef.close(accepted)
  }

}
