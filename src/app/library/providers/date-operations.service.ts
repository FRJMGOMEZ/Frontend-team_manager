import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateOperationsService {

  constructor() { }

  public static dateComparison(date1: Date, date2: Date) {
    if ((date1.getFullYear() === date2.getFullYear()) && (date1.getMonth() === date2.getMonth()) && (date1.getDate() === date2.getDate())) {
      return true
    } else {
      return false
    }
  }


  public static isRangeInRange(event:{start:Date,end:Date},dayRange:{start:Date,end:Date}){
   /// check if range2 is  in range1 ///
   if(event.start <= dayRange.start && event.end >= dayRange.end){
     return true
   }
   return false
  }

  public static createRange(selectedDate: Date):{ start:Date,end:Date} {
  let monthDays = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  let lastMonthDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), monthDays, 0, 0, 0, 0);
  let firstMonthDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1, 0, 0, 0, 0);
  let range = {start:null,end:null};
  let start = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1 - firstMonthDay.getDay())
  let end = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), monthDays + (6 - lastMonthDay.getDay()), 23, 59, 59, 0)
  range.start = start;
  range.end = end;
  console.log({range})
  return range;
}
}
