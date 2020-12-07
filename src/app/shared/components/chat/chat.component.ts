import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { Message } from '../../models/message.model';
import { ChatUser } from './chat-shared/chat-models/chat-user.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() users:ChatUser[]=[];
  @Input() messages:Message[]=[]
  @Input() messagesCount:number;
  @Input() userOnline:ChatUser;
  @Output() sendMsg = new  EventEmitter<Message>() 
  @Output() getMessages = new EventEmitter<{from:number}>()
  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.messagesCount)
  }

  sendMessage(message:Message){
        this.sendMsg.emit(message)
  }

}
