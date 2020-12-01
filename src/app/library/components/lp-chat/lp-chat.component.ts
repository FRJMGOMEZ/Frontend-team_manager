import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LpChatUser } from './lp-chat-shared/lp-chat-models/lp-chat-user.model';
import { Message } from '../../../shared/models/message.model';

@Component({
  selector: 'lp-chat',
  templateUrl: './lp-chat.component.html',
  styleUrls: ['./lp-chat.component.scss']
})
export class LpChatComponent implements OnInit {
  @Input() users:LpChatUser[]=[];
  @Input() usersConnected:string[];
  @Input() messages:Message[]=[]
  @Output() sendMsg = new  EventEmitter<Message>() 
  constructor() { }
  ngOnInit(): void {
  }

  sendMessage(message:Message){
    console.log({message})
        this.sendMsg.emit(message)
  }

}
