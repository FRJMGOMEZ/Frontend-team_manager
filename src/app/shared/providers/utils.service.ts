import { Injectable } from '@angular/core';
import { Day } from '../models/day.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getMonday(day: Day): Date {
    let monday;
    let date = new Date(day.date);
    switch (date.getDay()) {
      case 0: monday = new Date(date.getTime() - (86400000 * 6));
        break;
      case 1: monday = new Date(date.getTime());
        break;
      case 2: monday = new Date(date.getTime() - (86400000 * 1));
        break;
      case 3: monday = new Date(date.getTime() - (86400000 * 2));
        break;
      case 4: monday = new Date(date.getTime() - (86400000 * 3));
        break;
      case 5: monday = new Date(date.getTime() - (86400000 * 4));
        break;
      case 6: monday = new Date(date.getTime() - (86400000 * 5));
        break;
    }
    return monday;
  }
}
