import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { API_URL } from '../../../config/api-url';


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
        return `${API_URL}get-aws-file/${file.name}`
      }
    }
      }
  }