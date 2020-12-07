import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Message } from '../../../../../models/message.model';
import { FileModel } from '../../../../../models/file.model';
import { FilesService } from '../../../../../providers/files.service';
import { GDService } from '../../../../../../library/components/global-dialogs/global-dialogs.service';
import { Subscription, timer } from 'rxjs';
import { ChatUser } from '../../chat-models/chat-user.model';

@Component({
  selector: 'chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, AfterViewInit {
  @ViewChild('divMessages') divMessages : ElementRef
  dialogSubs:Subscription;
  @Input() messages:Message[];
  @Input() messagesCount:number;
  @Input()userOnline:ChatUser;
  message:Message = new Message('',[],null)
  @Output() sendMsg= new EventEmitter<Message>();
  @Output() getMessages = new EventEmitter<{from:number}>();
  temporaryFiles:File[]=[]
  showSpinner = false;
  constructor(private filesService: FilesService, private gDService: GDService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
      if(changes.messages && this.divMessages ){
        if (this.showSpinner){
          this.showSpinner = false;
          this.divMessages.nativeElement.scrollTop = 5;
        }else{
          timer().subscribe(() => { this.scrollToBottom();});
        }
      }
  }

  ngAfterViewInit(){
    this.renderer.listen(this.divMessages.nativeElement, 'scroll', (e) => {
      if(e.target.scrollTop === 0 && (this.messages.length < this.messagesCount)){    
        this.showSpinner = true;
        this.getMessages.emit({from:this.messages.length})
      }else{
        this.showSpinner = false;
      } 
    });
  }

  sendMessage(event:KeyboardEvent){
    if(event.key === 'Enter'){
       this.sendMsg.emit(this.message)
       this.message = new Message('', [], null);
    }
  }

  setFiles(files:File[]){
    this.message.files.push(...(files as any[]))
    this.temporaryFiles.push(...files)
  }


  downloadFile(fileSrc:any,file:FileModel){
   this.dialogSubs = this.gDService.openConfirmDialog('DOWNLOAD FILE?',file.title).subscribe((res:boolean)=>{
     if(res){
       if (fileSrc.includes('blob')) {
         this.filesService.downloadFile(fileSrc, file.title)
       } else {
         this.filesService.getDbFile(file.name).subscribe((res: Blob) => {
           this.filesService.downloadFile(URL.createObjectURL(res), file.title)
         })
       }
     }
    })
}

scrollToBottom(){
  this.divMessages.nativeElement.scrollTop = this.divMessages.nativeElement.scrollHeight; 
}
 ngOnDestroy(){
   this.dialogSubs ? this.dialogSubs.unsubscribe():null;
 }
}
