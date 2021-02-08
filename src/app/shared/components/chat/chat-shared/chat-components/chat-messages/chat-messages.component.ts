import { Component,Output, EventEmitter, Input, SimpleChanges, ElementRef, ViewChild, AfterViewInit, Renderer2, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ChatUser } from '../../chat-models/chat-user.model';
import { Message } from '../../../../../../core/models/message.model';
import { FileModel } from '../../../../../../core/models/file.model';

@Component({
  selector: 'chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessagesComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('divMessages') divMessages : ElementRef;
  dialogSubs:Subscription;
  @Input() messages:Message[];
  messagesToDisplay:Message[];
  @Input() messagesCount:number;
  @Input() userOnline:ChatUser;
  @Input() newMessage:Message;
  @Output() getMessages = new EventEmitter<{from:number}>();
  @Output() downloadFile = new EventEmitter<{src:any,file:FileModel}>();
  showSpinner = false;
  ngAfterViewCheckedTriggered:number = 0;

  constructor( private renderer: Renderer2) { }

  ngOnChanges(changes:SimpleChanges){
      if(changes.messages && this.divMessages && !changes.messages.firstChange){
          this.showSpinner = false;
          this.divMessages.nativeElement.scrollTop = 5;
      }
      if(changes.newMessage && this.newMessage ){
         this.messages.push(this.newMessage);
         this.messagesCount++;
         timer().subscribe(()=>{
          this.scrollToBottom();
          });
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
  ngAfterViewChecked() {
    if (this.ngAfterViewCheckedTriggered < 2){
      this.scrollToBottom();
    }
  }
  scrollToBottom(){
    const div = this.divMessages;
    div.nativeElement.scrollTop = div.nativeElement.scrollHeight;
    this.ngAfterViewCheckedTriggered ++;
 }

  ngOnDestroy() {
    this.dialogSubs ? this.dialogSubs.unsubscribe() : null;
  }
}
