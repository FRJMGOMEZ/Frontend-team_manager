import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FILE_FORMATS } from '../../../../../../core/data/file-formats';
import { SnackbarNotificationsService } from '../../../../../../core/providers/snackbar-notifications.service';

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
  @Output() showUsers = new EventEmitter<boolean>();
  showU:boolean;
  imgValidationConfig = {
    allowedMimeTypes: FILE_FORMATS.map((ff)=>{ return ff.mimeType}),
    maxSizeKb: 3000,
    maxNameLength: 150,
    multiple: true
  };
  constructor(private lpSnackbarNotificationsService:SnackbarNotificationsService) { }
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
