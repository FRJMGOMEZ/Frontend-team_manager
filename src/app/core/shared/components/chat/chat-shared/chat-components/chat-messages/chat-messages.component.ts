import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ChatUser } from '../../chat-models/chat-user.model';
import { Message } from '../../../../../../models/message.model';
import { FileModel } from '../../../../../../models/file.model';

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
  @Input() userOnline:ChatUser;
  @Output() getMessages = new EventEmitter<{from:number}>();
  @Output() downloadFile = new EventEmitter<{src:any,file:FileModel}>()
  showSpinner = false;
  constructor( private renderer: Renderer2) { }

  ngOnInit(): void {}

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

scrollToBottom(){
  this.divMessages.nativeElement.scrollTop = this.divMessages.nativeElement.scrollHeight; 
}
 ngOnDestroy(){
   this.dialogSubs ? this.dialogSubs.unsubscribe():null;
 }
}
