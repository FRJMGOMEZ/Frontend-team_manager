import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lp-chat-tools',
  templateUrl: './lp-chat-tools.component.html',
  styleUrls: ['./lp-chat-tools.component.scss']
})
export class LpChatToolsComponent implements OnInit {

  @Output() files = new EventEmitter<File[]>();
  constructor() { }

  ngOnInit(): void {
  }

  setFiles(files:FileList){
    const filesArray = []
    Array.from(files).forEach((f:File)=>{filesArray.push(f)});
    this.files.emit(filesArray)
  }

  imgValidationConfig ={
    allowedMimeTypes: ['image/gif', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.oasis.opendocument.text', 'text/xml', 'application/pdf'],
    maxSizeKb:1500,
    maxNameLength:100,
    multiple:true
  }
}
