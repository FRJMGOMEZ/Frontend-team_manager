import { Component,  OnDestroy, Input, SimpleChanges } from '@angular/core';
import { TaskModel } from '../../../../../shared/models/task.model';
import { Subscription } from 'rxjs';
import { Message } from '../../../../../shared/models/message.model';
import { User } from '../../../../../shared/models/user.model';
import { ChatService } from '../../../../../shared/providers/chat.service';
import { TaskService } from '../../../../../shared/providers/task.service';
import { AuthService } from 'src/app/auth/shared/providers/auth.service';

@Component({
  selector: 'app-task-manager-chat',
  templateUrl: './task-manager-chat.component.html',
  styleUrls: ['./task-manager-chat.component.scss']
})
export class TaskManagerChatComponent implements  OnDestroy{


  @Input() taskSelected: TaskModel;
  usersConnectedSubs: Subscription;
  messagesSubs: Subscription;
  messages: Message[] = [];
  users: User[] = [];
  messagesCount: number;
  constructor(private chatService: ChatService, public authService: AuthService, private taskService: TaskService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.taskSelected && this.taskSelected) {
      /// getting the messages ///
      this.getMessages(0);
      /// getting the users connected ///
      this.taskService.userOutTask();
      this.taskService.userInTask(this.taskSelected._id).then((usersOnline: string[]) => {
        (this.taskSelected.participants as User[]).forEach((p: User, index: number) => {
          usersOnline.includes(p._id) ? (this.taskSelected.participants[index] as User).connected = true : (this.taskSelected.participants[index] as User).connected = false;
        });
        this.users = (this.taskSelected.participants as User[]);
        this.listenningUsersConnected();
      });
    }
  }
  sendMessage(message: Message) {
    this.chatService.postMessage(message, this.taskSelected._id).subscribe((message: Message) => {
      this.messages = [...this.messages, message];
    });
  }
  getMessages(from: number) {
    this.chatService.getMessages(this.taskSelected._id, from).subscribe((res: { messages: Message[], count: number }) => {
      this.messages = [...res.messages, ...this.messages];
      this.messagesCount = res.count;
      this.listenningMessages();
    });
  }
  listenningUsersConnected() {
    this.usersConnectedSubs ? this.usersConnectedSubs.unsubscribe() : null;
    this.usersConnectedSubs = this.taskService.usersConnected().subscribe((usersOnline: string[]) => {
      (this.taskSelected.participants as User[]).forEach((p: User, index: number) => {
        usersOnline.includes(p._id) ? (this.taskSelected.participants[index] as User).connected = true : (this.taskSelected.participants[index] as User).connected = false;
      });
      this.users = [...(this.taskSelected.participants as User[])];
    });
  }

  listenningMessages() {
    this.messagesSubs = this.chatService.listenningMessages().subscribe((message: Message) => {
      this.messages = [...this.messages, message];
    });
  }
  ngOnDestroy() {
    this.taskService.userOutTask();
    this.usersConnectedSubs ? this.usersConnectedSubs.unsubscribe() : null;
    this.messagesSubs ? this.messagesSubs.unsubscribe() : null;
  } 

}
