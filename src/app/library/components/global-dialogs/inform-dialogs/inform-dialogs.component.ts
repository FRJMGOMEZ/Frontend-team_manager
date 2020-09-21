import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inform-dialogs',
  templateUrl: './inform-dialogs.component.html',
  styleUrls: ['./inform-dialogs.component.css']
})
export class InformDialogsComponent implements OnInit {

  message: string
  item:string
  title: string
    constructor(private dialogRef: MatDialogRef<InformDialogsComponent>, @Inject(MAT_DIALOG_DATA) private data) { }
  ngOnInit(): void {
    this.message = this.data.message;
    this.title = this.data.title;
    this.item = this.data.item;
  }
  hideModal() {
    this.dialogRef.close()
  }

  /// MUST CREATE A BACKEND TO REPORT ERRORS ///
    reportError(){}
}
