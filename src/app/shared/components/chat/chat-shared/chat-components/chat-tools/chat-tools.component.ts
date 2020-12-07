import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FILE_FORMATS } from '../../../../../../library/data/lp-file-formats';
import { LpSnackbarNotificationsService } from '../../../../../../library/providers/lp-snackbar-notifications.service';


@Component({
  selector: 'chat-tools',
  templateUrl: './chat-tools.component.html',
  styleUrls: ['./chat-tools.component.scss']
})
export class ChatToolsComponent implements OnInit {
  filesInfo:string
  @ViewChild('fileUploader') fileUploader : NgModel
  filesUploaderChanges:Subscription
  @Output() files = new EventEmitter<File[]>();
  imgValidationConfig = {
    allowedMimeTypes: [
      'text/plain',
      'image/gif',
      'image/jpeg',
      'image/png',
      'application/msword',
      'application/vnd.oasis.opendocument.text',
      'text/plain', 
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    maxSizeKb: 3000,
    maxNameLength: 150,
    multiple: true
  };
  constructor(private lpSnackbarNotificationsService:LpSnackbarNotificationsService) { }
  ngOnInit(): void {
    this.filesInfo = `Allowed formats: ${FILE_FORMATS.reduce((acum,ff)=>{ this.imgValidationConfig.allowedMimeTypes.indexOf(ff.mimeType) >=0 ? acum+= `${ acum ? `, ${ff.format}`: ff.format}` :''; return acum},'')}\nmax size kb: ${this.imgValidationConfig.maxSizeKb}\nmax name length: ${this.imgValidationConfig.maxNameLength}`
  }
  ngAfterViewInit(){
   this.filesUploaderChanges = this.fileUploader.valueChanges.subscribe(()=>{
     if(this.fileUploader.errors){
       let error = Object.keys(this.fileUploader.errors)[0]
      switch(error){
        case 'invalidMimeType': this.lpSnackbarNotificationsService.validationError('INVALID FILE FORMAT');
        break;
        case 'invalidFileSize': this.lpSnackbarNotificationsService.validationError('INVALID FILE SIZE');
        break;
        case 'invalidNameLength': this.lpSnackbarNotificationsService.validationError('INVALID FILE NAME LENGTH');
        break;
      }
     }
    })
  }
  setFiles(files:FileList){
    if(files != null){
      const filesArray = [];
      Array.from(files).forEach((f: File) => { filesArray.push(f) });
      this.files.emit(filesArray);
    }
  }

  ngOnDestroy(){
    this.filesUploaderChanges.unsubscribe();
  }
}
