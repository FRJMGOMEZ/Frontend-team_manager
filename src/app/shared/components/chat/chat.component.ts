import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatUser } from './chat-shared/chat-models/chat-user.model';
import { MessageModel } from '../../../core/models/message.model';
import { FileModel } from '../../../core/models/file.model';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() users:ChatUser[]=[];
  @Input() messages:MessageModel[];
  @Input() newMessage:MessageModel;
  @Input() messagesCount:number;
  @Input() userOnline:ChatUser;
  @Output() sendMsg = new  EventEmitter<MessageModel>();
  @Output() getMessages = new EventEmitter<{from:number}>();
  @Output() downloadFile = new EventEmitter<{ src: any, file: FileModel }>();
  msg = new BehaviorSubject<MessageModel[]>([]);
  showUsers = false;
  constructor() { }
  sendMessage(message:MessageModel){
        this.sendMsg.emit(message)
  }
}
