import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatFilesDialogComponent } from '../chat-files-dialog/chat-files-dialog.component';
import { MessageModel } from '../../../../../../core/models/message.model';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  
  @ViewChild('textArea') textArea : ElementRef
  message: MessageModel = new MessageModel('', [], null)
  @Output() sendMsg = new EventEmitter<MessageModel>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  sendMessage() {
      this.sendMsg.emit(this.message)
      this.message = new MessageModel('', [], null);
      this.textArea.nativeElement.focus();
  }

  setFiles(files: File[]) {
    this.dialog.open(ChatFilesDialogComponent, {
      data: {
        files:files
      }
    }).afterClosed().subscribe((res:{accepted:boolean,text?:string})=>{
     if(res.accepted){
       this.message.text = res.text ? res.text: '';
       this.message.files.push(...(files as any[]));
       this.sendMessage();
     }
    })
  }
}
