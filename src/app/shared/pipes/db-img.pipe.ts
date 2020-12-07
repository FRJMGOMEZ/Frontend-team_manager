import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../../config/config';

@Pipe({
  name: 'dbImg',
  pure:true
})
export class dbImgPipe implements PipeTransform {
  transform(file:any) {
    let url;
    if (!file) {
      return url = '../../assets/no-image.png'
    }else{

      if(!file.name){
        if (file.indexOf("https") >= 0) {
          return file;
        }
        if (file.indexOf('base64') >= 0) {
          return file
        }
      }else{
        return `${URL_SERVICES}get-aws-file/${file.name}`
      }
    }
      }
  }