import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatFilesDialogComponent } from '../chat-files-dialog/chat-files-dialog.component';
import { Message } from '../../../../../../models/message.model';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  message: Message = new Message('', [], null)
  @Output() sendMsg = new EventEmitter<Message>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  sendMessage() {
      this.sendMsg.emit(this.message)
      this.message = new Message('', [], null);
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
