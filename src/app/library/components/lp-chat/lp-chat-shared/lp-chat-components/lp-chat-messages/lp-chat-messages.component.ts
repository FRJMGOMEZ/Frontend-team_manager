import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Message } from '../../../../../../shared/models/message.model';

@Component({
  selector: 'lp-chat-messages',
  templateUrl: './lp-chat-messages.component.html',
  styleUrls: ['./lp-chat-messages.component.scss']
})
export class LpChatMessagesComponent implements OnInit {

  @Input() messages:Message[];
  message:Message = new Message('',[],null)
  @Output() sendMsg= new EventEmitter<Message>()
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(event:KeyboardEvent){
    if(event.key === 'Enter'){
       this.sendMsg.emit(this.message)
       this.message = new Message('', [], null);
    }
  }

  setFiles(files:File[]){
    this.message.files.push(...(files as any[]))
  }

}
