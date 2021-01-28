import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Inject } from '@angular/core';

import { formatDate } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { Day } from '../../../../core/models/day.model';
import { Task } from '../../../../core/models/task.model';
import { ENDING_TASK_TIME_LAPSO } from '../../data/time-values';
import { TaskService } from '../../../../core/providers/task.service';

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
  constructor(public taskService: TaskService, @Inject(LOCALE_ID) private locale: string) { }
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

   get cellSize(){
     if(this.dayRows){
       const days = this.dayRows.flat()
       return days.length > 35 ? '9.5vh': '11vh'
     }else{
       return '10vh'
     }
   }
  iconColor(task:Task){
    let today = new Date();
    let lapso = ENDING_TASK_TIME_LAPSO
    if (task.endDate>today.getTime()){
      if (task.endDate > today.getTime() + lapso) {
          return 'primary'
      } else {
        return 'accent'
      }
    }else{
      return 'warn'
    }
  }

  eventTooltip(task:Task){
    return `${task.name} \n START:${formatDate(new Date(task.startDate), 'M/d/yy, h:mm a', this.locale)} \n END:${formatDate(new Date(task.endDate), 'M/d/yy, h:mm a', this.locale)} `
  }

}
