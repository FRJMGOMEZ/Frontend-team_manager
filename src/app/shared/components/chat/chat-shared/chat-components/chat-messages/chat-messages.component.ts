import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, ElementRef, ViewChild, AfterViewInit, Renderer2, ChangeDetectorRef, AfterViewChecked, ChangeDetectionStrategy, AfterContentInit } from '@angular/core';
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
  @ViewChild('divMessages') divMessages : ElementRef
  dialogSubs:Subscription;
  @Input() messages:Message[];
  @Input() messagesCount:number;
  @Input() userOnline:ChatUser;
  @Output() getMessages = new EventEmitter<{from:number}>();
  @Output() downloadFile = new EventEmitter<{src:any,file:FileModel}>()
  showSpinner = false;
  ngAfterViewCheckedTriggered:number = 0;

  constructor( private renderer: Renderer2) { }

  ngOnChanges(changes:SimpleChanges){
      if(changes.messages && this.divMessages && !changes.messages.firstChange){
          this.showSpinner = false;
          this.divMessages.nativeElement.scrollTop = 5;
          console.log(this.messages);
          timer(100).subscribe(()=>{
            this.scrollToBottom();
          })
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
    div.nativeElement.scrollTop = 9999999999999999999;
    this.ngAfterViewCheckedTriggered ++;
 }

  ngOnDestroy() {
    this.dialogSubs ? this.dialogSubs.unsubscribe() : null;
  }
}
