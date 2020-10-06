import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SimpleSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from '../../../../../library/providers/local-storage.service';
import { EventsService } from '../../../../../shared/providers/events.service';

@Component({
  selector: 'app-calendar-scheduler-week',
  templateUrl: './calendar-scheduler-week.component.html',
  styleUrls: ['./calendar-scheduler-week.component.scss']
})
export class CalendarSchedulerWeekComponent {

  @Input()week:Date[]=[]
  @Input() events:Date[][]

  @Output() checkEvent: EventEmitter<string> = new EventEmitter<string>()

  @Output() checkEvents:EventEmitter<Date> = new EventEmitter<Date>()

  @Output() putEvent: EventEmitter<string> = new EventEmitter<string>()

  @Output() deleteEvent:EventEmitter<string> = new EventEmitter<string>()

  @Input() selectedDate:Date
  dayWidth: string = `${Math.ceil(95 / 7)}%`

  @Output() dateSelection: EventEmitter<Date> = new EventEmitter<Date>()

  constructor(private localStorageService:LocalStorageService, public eventService:EventsService) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.week && this.week){
        console.log(this.week)
    }
    if(changes.events && !changes.events.firstChange ){
      console.log(this.events)
    }
  }

  isDaySelected(day:Date){
    return day.getTime() === this.selectedDate.getTime()
  }

  selectDate(day){
    this.selectedDate = day;
    this.localStorageService.set('state-data', this.selectedDate, 'date-selected')
    this.dateSelection.next(this.selectedDate)
  }

  emitDate(date){
    console.log({date})
  }
}
