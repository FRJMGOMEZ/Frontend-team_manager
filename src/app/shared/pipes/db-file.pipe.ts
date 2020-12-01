import { Pipe, PipeTransform } from '@angular/core';
import { FileModel } from '../models/file.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

@Pipe({
  name: 'dbFile',
  pure:true
})
export class DbFilePipe implements PipeTransform {

  iconsFormats: string[] = ['pdf'];
  constructor(public http:HttpClient){}
  transform(file:FileModel) {
    let url;
    if (!file) {
      return url = '../../assets/no-image.png'
    } else {
      if(this.iconsFormats.includes(file.mimeType)){
        return `${URL_SERVICES}/file/icons/${file.name}`
      }else{
        return `${URL_SERVICES}get-aws-file/${file.name}`
      }
    }
  }
}
