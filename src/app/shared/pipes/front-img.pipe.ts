import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../../config/config';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'frontImg'
})
export class FrontImgPipe implements PipeTransform {
  constructor(private http:HttpClient){}
  transform(img:string): any {
    let url;
    url = `${URL_SERVICES}files/company/${img}`;
    return url
  }
}
