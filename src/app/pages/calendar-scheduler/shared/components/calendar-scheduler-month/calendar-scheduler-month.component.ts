import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Day } from '../../../../../shared/models/day.model';
import { TaskService } from '../../../../../shared/providers/task.service';



@Component({
  selector: 'app-calendar-scheduler-month',
  templateUrl: './calendar-scheduler-month.component.html',
  styleUrls: ['./calendar-scheduler-month.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CalendarSchedulerMonthComponent {

  labels: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  @Input() selectedDate: Date
  @Input() dayRows: any;
  @Output() checkTask = new EventEmitter<string>()
  @Output() putTask = new EventEmitter<string>();
  @Output() checkTasks = new EventEmitter<number>()
  @Output() deleteTask = new EventEmitter<string>();
  @Input() selectedProject:string
  constructor(public taskService:TaskService) { }
  getDayOfWeek(row: Day[], weekDay: number) {
    let day = row.filter((day) => { return new Date(day.date).getDay() === weekDay })[0];
    let date = day ? new Date(day.date) : null;
    if (date) {
      return day
    }
  }
  checkDayActive(date: number) {
    let today = new Date();
    return new Date(date).getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime()
  }

  ngOnChanges(changes:SimpleChanges){

    console.log(changes.dayRows)

  }

}
