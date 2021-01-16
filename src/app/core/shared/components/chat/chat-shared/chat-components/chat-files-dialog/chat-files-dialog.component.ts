import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chat-files-dialog',
  templateUrl: './chat-files-dialog.component.html',
  styleUrls: ['./chat-files-dialog.component.scss']
})
export class ChatFilesDialogComponent {

  files:File[]
  text:string

  constructor(public dialogRef: MatDialogRef<ChatFilesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {files:File[]}) {
    this.files = data.files;
    }

  accept(){
    this.dialogRef.close({accepted:true,text:this.text})
  }

  cancel(){
    this.dialogRef.close({accepted:false})
  }

}
