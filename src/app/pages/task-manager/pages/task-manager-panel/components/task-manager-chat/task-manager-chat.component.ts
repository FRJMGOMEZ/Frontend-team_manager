import { Component, Input, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageModel } from '../../../../../../core/models/message.model';
import { ChatService } from '../../../../../../core/providers/chat.service';
import { Task } from '../../../../../../core/models/task.model';
import { User } from '../../../../../../core/models/user.model';
import { TaskService } from '../../../../../../core/providers/task.service';
import { FileModel } from '../../../../../../core/models/file.model';
import { FilesService } from '../../../../../../core/providers/files.service';
import { AuthService } from '../../../../../../core/providers/auth.service';
import { MediaService } from '../../../../../../core/providers/media.service';

@Component({
  selector: 'app-task-manager-chat',
  templateUrl: './task-manager-chat.component.html',
  styleUrls: ['./task-manager-chat.component.scss']
})
export class TaskManagerChatComponent implements OnInit, OnDestroy {

  messagesSubs: Subscription;
  dialogSubs:Subscription;
  messages: MessageModel[];
  newMessage: MessageModel;
  messagesCount: number;
  usersConnectedSubs: Subscription;
  users: User[] = [];
  @Input() taskSelected:Task;
  constructor(private chatService: ChatService, 
             public taskService: TaskService,
             public filesService:FilesService,
             public authService:AuthService,
             public mdService:MediaService) { }

  ngOnInit() {
    this.listenningMessages();
    this.listenningUsersConnected();
    this.getMessages(0);
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes.taskSelected && this.taskSelected){
      this.users = (this.taskSelected.participants as User[]);
    }
  }
  sendMessage(message: MessageModel) {
    this.chatService.postMessage(message, this.taskSelected._id).subscribe((message: MessageModel) => {
      this.newMessage = message;
    });
  }
  getMessages(from: number) {
    this.chatService.getMessages(this.taskSelected._id, from)
      .subscribe((res: { messages: MessageModel[], count: number }) => {
        let messages = this.messages ? this.messages : [];
        messages.unshift(...res.messages)
        this.messages = [...messages.sort((a: MessageModel, b: MessageModel) => { return a.date - b.date; })];
        this.messagesCount = res.count;
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
    this.messagesSubs = this.chatService.listenningMessages().subscribe((message: MessageModel) => {
      this.newMessage = message;
      this.spreadFiles(message.files as FileModel[])
    });
  }

  spreadFiles(files:FileModel[]){
    files.forEach((f) => {
      this.filesService.spreadFile(f, 'POST');
    })
  }
  ngOnDestroy() {
    this.messagesSubs ? this.messagesSubs.unsubscribe() : null;
    this.usersConnectedSubs ? this.usersConnectedSubs.unsubscribe() : null;
    this.dialogSubs ? this.dialogSubs.unsubscribe() : null;
  }

}
