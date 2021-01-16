import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatUser } from './chat-shared/chat-models/chat-user.model';
import { Message } from '../../../models/message.model';
import { FileModel } from '../../../models/file.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() users:ChatUser[]=[];
  @Input() messages:Message[]=[]
  @Input() messagesCount:number;
  @Input() userOnline:ChatUser;
  @Output() sendMsg = new  EventEmitter<Message>() 
  @Output() getMessages = new EventEmitter<{from:number}>();
  @Output() downloadFile = new EventEmitter<{ src: any, file: FileModel }>()

  showUsers = false;
  constructor() { }
  sendMessage(message:Message){
        this.sendMsg.emit(message)
  }
}
