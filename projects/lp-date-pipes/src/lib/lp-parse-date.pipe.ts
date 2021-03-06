import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lpParseDate'})
export class LpParseDatePipe implements PipeTransform {
  transform(time: Date | number, to: string): unknown {
    let converted;
    if (time === null) {
      return null
    }
    switch (to) {
      case 'miliseconds': converted = (time as Date).getTime();
        break;
      case 'date': converted = new Date((time as number))
        break;
    }
    return converted;
  }

}
