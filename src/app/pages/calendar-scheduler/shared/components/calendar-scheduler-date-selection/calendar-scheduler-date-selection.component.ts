import { Component, EventEmitter, Input, OnInit, Output, ViewChild, SimpleChanges } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { LocalStorageService } from '../../../../../library/providers/local-storage.service';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-calendar-scheduler-date-selection',
  templateUrl: './calendar-scheduler-date-selection.component.html',
  styleUrls: ['./calendar-scheduler-date-selection.component.scss']
})
export class CalendarSchedulerDateSelectionComponent implements OnInit {

  @ViewChild('daySelection') daySelection: MatInput
  @ViewChild('yearSelection') yearSelection: MatInput
  @ViewChild('monthSelection') monthSelection: MatSelect
  @Output() dateSelection = new EventEmitter<Date>()
  @Output() formatSelection= new EventEmitter<string>()
  dateFormat: string = 'month'
  @Input()selectedDate: Date
  constructor(private localStorageService: LocalStorageService ) { }

  ngOnInit(): void {

    console.log('date initiALIZATION')
    /// set the calendar date //
    this.selectedDate = this.localStorageService.get('state-data', 'date-selected');
    if (!this.selectedDate) {
      let today = new Date();
      this.selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0)
    } else {
      this.selectedDate = new Date(this.selectedDate);
    }
    this.dateSelection.next(this.selectedDate)
    /// set the date format (day or month) //
    this.setFormat( this.localStorageService.get('state-data','date-format') || 'month')
  }
  //// set the dates value in html ///

  ngOnChanges(changes:SimpleChanges){
    if(changes.dateSelected && this.selectedDate){
     this.setDatesInTemplate()
    }
  }
  ngAfterViewInit() {
      this.setDatesInTemplate()
  }

  setDatesInTemplate(){
    switch (this.dateFormat) {
      case 'month': this.yearSelection.value = this.selectedDate.getFullYear().toString();
        this.monthSelection.value = this.selectedDate.getMonth().toString();
        break;
      case 'day': this.daySelection.value = `${this.selectedDate.getMonth()}/${this.selectedDate.getDate()}/${this.selectedDate.getFullYear()}`
        break;
    }

  }

  setDateBtnDisabled(daySelection?: Date, year?: string, month?: string) {
    if (daySelection) {
      return new Date(daySelection).getTime() === new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 0, 0, 0, 0).getTime();
    } else if (year && month) {
      return new Date(Number(year), Number(month), 1, 0, 0, 0, 0).getTime() === new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1, 0, 0, 0, 0).getTime()
    } else {
      return true;
    }
  }
  setDate(date?: Date, year?: string, month?: string) {
    date = new Date(date);
    (year && month) ? this.selectedDate = new Date(Number(year), Number(month), 1, 0, 0, 0, 0) : this.selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    this.localStorageService.set('state-data', this.selectedDate, 'date-selected')
    this.dateSelection.next(this.selectedDate)
  }
  setFormat(format: string) {
    this.dateFormat = format;
    this.localStorageService.set('state-data', this.dateFormat, 'date-format')
    console.log({format})
    this.formatSelection.next(this.dateFormat)
  }

}
