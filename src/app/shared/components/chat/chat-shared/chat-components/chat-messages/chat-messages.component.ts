import { Component, Output, EventEmitter, Input, SimpleChanges, ElementRef, ViewChild, AfterViewInit, Renderer2, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatUser } from '../../chat-models/chat-user.model';
import { MessageModel } from '../../../../../../core/models/message.model';
import { FileModel } from '../../../../../../core/models/file.model';


@Component({
  selector: 'chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessagesComponent implements AfterViewInit {
  @ViewChild('divMessages') divMessages : ElementRef;
  dialogSubs:Subscription;
  @Input() messages:MessageModel[];
  @Input() messagesCount:number;
  @Input() userOnline:ChatUser;
  @Input() newMessage:MessageModel;
  @Output() getMessages = new EventEmitter<{from:number}>();
  @Output() downloadFile = new EventEmitter<{src:any,file:FileModel}>();
  showSpinner = false;

  constructor( private renderer: Renderer2, private cdr:ChangeDetectorRef) {}

  ngOnChanges(changes:SimpleChanges){
      if(changes.messages && this.divMessages && !changes.messages.firstChange){
          this.divMessages.nativeElement.scrollTop = 5;
          this.showSpinner = false;
          this.scrollToBottom();
      }
      if(changes.newMessage && this.newMessage ){
         this.messages.push(this.newMessage);
         this.messagesCount++;
         this.scrollToBottom();
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
    this.scrollToBottom();
  }

  scrollToBottom(){
    this.cdr.detectChanges();
    this.divMessages.nativeElement.scrollTop = this.divMessages.nativeElement.scrollHeight;
 }

  ngOnDestroy() {
    this.dialogSubs ? this.dialogSubs.unsubscribe() : null;
  }
}
