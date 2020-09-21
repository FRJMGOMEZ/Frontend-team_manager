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
}
