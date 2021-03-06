import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { NOTIFICATION_METHODS, NOTIFICATION_TYPES } from '../../../../shared/data/notification-filter';

@Component({
  selector: 'app-notifications-filter',
  templateUrl: './notifications-filter.component.html',
  styleUrls: ['./notifications-filter.component.scss']
})
export class NotificationsFilterComponent implements OnChanges {

   typesOpt = NOTIFICATION_TYPES;
   methodsOpt = NOTIFICATION_METHODS;
   @Input() queryString:string;
   queryFilters = {
    project:'',
    userFrom:'',
    type:'',
    method:'',
    from: null,
    to: null
  };
  @Output() getNotifications = new EventEmitter<string>();
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.queryString && this.queryString){
      const keyValues = this.queryString.split('?')[1].split('&');
      const string = keyValues.reduce((acum: any, keyValue, index) => { const key = '"' + keyValue.split('=')[0] + '"'; const value = '"' + keyValue.split('=')[1] + '"'; acum += `${key}:${value}${keyValues[index + 1] ? ',' : ''}`; return acum }, '{') + '}';
      const obj = JSON.parse(string);
      Object.keys(obj).forEach((key)=>{
      if(Object.keys(this.queryFilters).includes(key.toString())){
        this.queryFilters[key] = key === 'from' || key === 'to' ? Number(obj[key]) : obj[key]
      }
      });
    }
  }
  setDate(type:string,date:Date){
    this.queryFilters[type] = date.getTime();
  }
  
  search() {
    let queryString = Object.keys(this.queryFilters).reduce((acum, key) => { acum ? acum += (this.queryFilters[key] && this.queryFilters[key] != null ? `&${key}=${this.queryFilters[key]}` : '') : acum += (this.queryFilters[key] && this.queryFilters[key] != null ? `?${key}=${this.queryFilters[key]}` : '') ; return acum }, '');
    this.getNotifications.emit(queryString);
  }
}
