import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { DialogsService } from '../../shared/providers/dialogs.service';

@Component({
  selector: 'app-calendar-scheduler',
  templateUrl: './calendar-scheduler.component.html',
  styleUrls: ['./calendar-scheduler.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CalendarSchedulerComponent implements  AfterViewInit, OnInit  {

  @ViewChild('daySelection') daySelection: MatInput
  @ViewChild('yearSelection') yearSelection: MatInput
  @ViewChild('monthSelection') monthSelection: MatSelect
  /* month, week or day */
  dateFormat:string = 'month'
  selectedDate:Date
  selectedEvent:string

  constructor(private localStorageService:LocalStorageService, private dialogsService:DialogsService, private cdr:ChangeDetectorRef){}

  ngOnInit(){
    this.selectedDate = this.localStorageService.get('state-data','date-selected');
    if(!this.selectedDate){
      let today = new Date();
      this.selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0)
    }else{
      this.selectedDate = new Date(this.selectedDate);
    }
    this.dateFormat = this.localStorageService.get('state-data','date-format') || 'month';
    this.cdr.detectChanges()
  }
  setDateBtnDisabled(daySelection?:Date,year?:string,month?:string){
    if(daySelection){
      return new Date(daySelection).getTime() === new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 0, 0, 0, 0).getTime();
    }else if(year && month){
      return new Date(Number(year), Number(month), 1, 0, 0, 0, 0).getTime() === new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1, 0, 0, 0, 0).getTime()
    }else{
      return true;
    }
  }
  ngAfterViewInit(){
    switch(this.dateFormat){
      case 'month': this.yearSelection.value = this.selectedDate.getFullYear().toString();
        this.monthSelection.value = this.selectedDate.getMonth().toString();
      break;
      case 'day': this.daySelection.value = `${this.selectedDate.getMonth()}/${this.selectedDate.getDate()}/${this.selectedDate.getFullYear()}`
      break;
    }
  }
  setDate(date?:Date,year?:string,month?:string){
       date = new Date(date);
      (year && month) ? this.selectedDate = new Date(Number(year),Number(month),1,0,0,0,0) : this.selectedDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0);
      this.localStorageService.set('state-data',this.selectedDate,'date-selected')
      this.cdr.detectChanges();
  }
  formatChange(format:string){
    this.dateFormat = format;
    this.localStorageService.set('state-data',this.dateFormat,'date-format')
  }

  postEvent(){
    this.dialogsService.openEditCreateEventDialog();
  }
  putEvent(eventId:string){
    this.dialogsService.openEditCreateEventDialog(eventId);
  }
}
