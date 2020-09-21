import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseHour'
})
export class ParseHourPipe implements PipeTransform {

  transform(hour:string, format:string): string {

    if(hour === null){
      return null
    }
    let result;
    switch(format){
      case 'AM/PM': result = (Number(hour.split(':')[0]) - 12) > 0 ? `${Number(hour.split(':')[0]) - 12}:${Number(hour.split(':')[1])} PM` : `${hour} AM`;
      break;
      case '24': result = hour.split(' ')[hour.split(' ').length -1] === 'AM' ? `${hour.split(' ')[0]}` : `${Number(hour.split(' ')[0].split(':')[0])+12}:${hour.split(' ')[0].split(':')[1]}`;
      break;
    }
    return result;
  }

}
