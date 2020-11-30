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

   public static milisecondsToPeriod(milisecs1:number,milisecs2:number){
    let durationString = [];
    let miliseconds =milisecs2 - milisecs1;
    let seconds = miliseconds / 1000;
    if(Number(String(seconds).split('.')[0]) > 0){
      seconds = Number(String(seconds).split('.')[0]);
      let minutes = seconds / 60;
      if (Number(String(minutes).split('.')[0]) > 0){
        minutes = Number(String(minutes).split('.')[0]);
        let hours = minutes / 60;
        if (Math.round((Number('0.' + String(hours).split('.')[1]) * 60)) >= 1) { durationString.push(Math.round(Number('0.' + String(hours).split('.')[1]) * 60) + (Math.round(Number('0.' + String(hours).split('.')[1]) * 60) > 1 ? ' minutes' : ' minute')) }
        if (Number(String(hours).split('.')[0]) > 0) {
          hours = Number(String(hours).split('.')[0]);
          let days = hours/24;
          if (Math.round((Number('0.' + String(days).split('.')[1]) * 24)) >= 1) { durationString.push(Math.round((Number('0.' + String(days).split('.')[1]) * 24)) + (Math.round(Number('0.' + String(days).split('.')[1]) * 24) > 1 ? ' hours' : ' hour')) }
          if (Number(String(days).split('.')[0]) > 0) {
            days = Number(String(days).split('.')[0]);
            durationString.push(`${days} days`)
          }
        }
      }
    }
   /*  durationString = durationString.reverse().reduce((acum,extract)=>{ acum+=` ${extract}`; return acum },'') */
    return durationString.reverse();
   }
}
