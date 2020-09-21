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

  /*   if(!file.format){

      if(file.name){
          let ext = file.name.split('.');
          ext = ext[ext.length - 1];
          url = `${URL_SERVICES}files/`
          switch (ext) {
            case 'pdf': url += 'icons/pdf.png';
              break;
          }
          return url 
      }else{
        if (file.indexOf("https") >= 0) {
          return file;
        }
        if (file.indexOf('base64') >= 0) {
          return file
        }
      }
    }else{
        let textFormats = ['pdf'];
        let imgFormats = ['png', 'jpg', 'gif', 'jpeg','JPG'];
        if (imgFormats.indexOf(file.format) >= 0) {
          if (!file.location.includes('cargomusic')) {
            url = `${URL_SERVICES}files/`
            url += `${file.name}`
            return url;
          }else{
            return `${URL_SERVICES}getAwsFileBuffer/${file.name}`
          }
        } else if (textFormats.indexOf(file.format) >= 0) {
          url = `${URL_SERVICES}files/icons`
          switch (file.format) {
            case 'pdf': url += '/pdf.png';
              break;
          }
          return url
        }
    }  */
      }
  }