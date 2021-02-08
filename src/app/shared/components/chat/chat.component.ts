import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatUser } from './chat-shared/chat-models/chat-user.model';
import { Message } from '../../../core/models/message.model';
import { FileModel } from '../../../core/models/file.model';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() users:ChatUser[]=[];
  @Input() messages:Message[];
  @Input() newMessage:Message;
  @Input() messagesCount:number;
  @Input() userOnline:ChatUser;
  @Output() sendMsg = new  EventEmitter<Message>();
  @Output() getMessages = new EventEmitter<{from:number}>();
  @Output() downloadFile = new EventEmitter<{ src: any, file: FileModel }>();
  msg = new BehaviorSubject<Message[]>([]);
  showUsers = false;
  constructor() { }
  sendMessage(message:Message){
        this.sendMsg.emit(message)
  }

  ngOnChanges(changes){
   console.log(changes.newMessage)
  }
}
