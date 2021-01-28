import { Component, OnDestroy,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LpDialogsService } from 'lp-dialogs';
import { Task } from '../../../../core/models/task.model';
import { Message } from '../../../../core/models/message.model';
import { User } from '../../../../core/models/user.model';
import { FileModel } from '../../../../core/models/file.model';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../../../core/providers/chat.service';
import { AuthService } from '../../../../auth/shared/providers/auth.service';
import { TaskService } from '../../../../core/providers/task.service';
import { DialogsService } from '../../../../core/providers/dialogs.service';
import { FilesService } from '../../../../core/providers/files.service';

@Component({
  selector: 'app-task-manager-panel',
  templateUrl: './task-manager-panel.component.html',
  styleUrls: ['./task-manager-panel.component.scss']
})
export class TaskManagerPanelComponent implements  OnDestroy,OnInit{
  taskSelected: Task;
  usersConnectedSubs: Subscription;
  taskSubscription:Subscription;
  messagesSubs: Subscription;
  messages: Message[];
  users: User[] = [];
  messagesCount: number;
  dialogSubs: Subscription;
  files:FileModel[]=[]
  tabIndex:number =0;
  constructor(private chatService: ChatService,
              public authService: AuthService,
              public taskService: TaskService,
              private lpDialogsService:LpDialogsService,
               private dialogsService: DialogsService,
              private filesService:FilesService,
              private ar:ActivatedRoute) { }

  ngOnInit(){
     this.ar.paramMap.subscribe((params)=>{
        this.getTaskById(params.get('id')).then(()=>{
          /// getting the messages ///
          this.getMessages(0);
          /// getting the users connected ///
          this.taskService.userInTask(this.taskSelected._id).then((usersOnline: string[]) => {
            (this.taskSelected.participants as User[]).forEach((p: User, index: number) => {
              usersOnline.includes(p._id) ? (this.taskSelected.participants[index] as User).connected = true : (this.taskSelected.participants[index] as User).connected = false;
            });
            this.users = (this.taskSelected.participants as User[]);
            this.listenningUsersConnected();
          });
        })
     })
    this.taskSubscription = this.taskService.task$.subscribe((res: { task: Task, action: string }) => {
      if (res) {
        switch (res.action) {
          case 'PUT':
             res.task._id === this.taskSelected._id ?  this.taskSelected = res.task : null;
            this.users = (this.taskSelected.participants as User[]);
            break;
        }
      }
    })
  }   

  getTaskById(id:string){
    return new Promise((resolve,reject)=>{
      this.taskService.getTaskById(id).subscribe((task: Task) => {
        this.taskSelected = task;
        resolve(true)
      })
    })
  }
  toggleStatus() {
    this.taskService.toggleStatus('on review', this.taskSelected._id).subscribe()
  }
  editTask() {
    this.dialogsService.openEditCreateTaskDialog(this.taskSelected._id)
  }
  deleteTask() {
    this.taskService.deleteTask(this.taskSelected._id).subscribe();
  }
  sendMessage(message: Message) {
    this.chatService.postMessage(message, this.taskSelected._id).subscribe((message: Message) => {
      this.messages = [...this.messages, message];
      this.files = [...this.files,...message.files as FileModel[]]
    });
  }
  getMessages(from: number) {
    this.chatService.getMessages(this.taskSelected._id, from)
    .subscribe((res: { messages: Message[], count: number }) => {
      let messages = this.messages ? this.messages : [];
      messages = [...res.messages, ...messages ];
      this.messages = messages.sort((a: Message, b: Message) => { return a.date - b.date; });
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
      this.messages = [...this.messages, message]
      this.messages = this.messages.sort((a:Message, b:Message) => { return a.date - b.date; });
      this.files = [...this.files, ...message.files as FileModel[]]
    });
  }

  downloadFile(data:{src:any,file:FileModel}){
   const {src,file}  = data;
   this.dialogSubs = this.lpDialogsService.openConfirmDialog('DOWNLOAD FILE?',file.title).subscribe((res:boolean)=>{
   if(res){
     if (src.includes('blob')) {
       this.filesService.downloadFile(src, file.title)
     } else {
       this.filesService.getDbFile(file.name).subscribe((res: Blob) => {
         this.filesService.downloadFile(URL.createObjectURL(res), file.title)
       })
     }
    }
   })
  }
  getFiles(data:{from:number,title:string}){
    this.taskService.getTaskFiles(this.taskSelected._id, data.from, undefined).subscribe((files:FileModel[])=>{
      this.files = files;
    });
  }

  deleteFile(file:FileModel){
    this.filesService.deleteFile(file).subscribe((fileDeleted:FileModel)=>{
     if(fileDeleted){
       this.files = this.files.filter((f) => { return f._id != fileDeleted._id });
       this.messages = this.messages.filter((m:Message)=>{ return !(m.files as FileModel[]).map((f:FileModel)=>{return f._id}).includes(fileDeleted._id)})
     }
    })
  }
  ngOnDestroy() {
    this.taskService.userOutTask(this.taskSelected._id);
    this.usersConnectedSubs ? this.usersConnectedSubs.unsubscribe() : null;
    this.messagesSubs ? this.messagesSubs.unsubscribe() : null;
    this.dialogSubs ?  this.dialogSubs.unsubscribe() : null;
    this.taskSubscription.unsubscribe();
  } 

}
