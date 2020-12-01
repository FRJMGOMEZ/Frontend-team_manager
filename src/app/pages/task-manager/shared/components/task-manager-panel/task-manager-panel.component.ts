import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Message } from 'src/app/shared/models/message.model';
import { TaskModel } from '../../../../../shared/models/task.model';
import { ChatService } from '../../../../../shared/providers/chat.service';

@Component({
  selector: 'app-task-manager-panel',
  templateUrl: './task-manager-panel.component.html',
  styleUrls: ['./task-manager-panel.component.scss']
})
export class TaskManagerPanelComponent implements OnChanges {

  @Input() taskSelected:TaskModel;
  messages:Message[]=[]
  messagesCount:number
  messageFrom:number = 0;
  constructor(private chatService:ChatService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.taskSelected && this.taskSelected) {
       this.chatService.getMessages(this.taskSelected._id,this.messageFrom).subscribe((res:{messages:Message[],count:number})=>{
         console.log({res})
         this.messages = res.messages;
         this.messagesCount = res.count;
       })
    }
  }
  sendMessage(message: Message) {
    this.chatService.postMessage(message, this.taskSelected._id).subscribe((message:Message)=>{
      console.log({message})
       this.messages.push(message)
    })
  }

  

}
