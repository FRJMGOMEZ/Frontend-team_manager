import { Component, Input, ElementRef, Renderer2, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import { ENDING_TASK_TIME_LAPSO } from '../../shared/data/time-values';
import { LpLocalStorage } from 'lp-operations';
import { Task } from '../../../../../../core/models/task.model';
import { HourModel } from '../../../../../../core/models/hour.model';
import { TaskService } from '../../../../../../core/providers/task.service';
import { LpDate } from '../../../../../../../../projects/lp-operations/src/lp-date';
import { MediaService } from '../../../../../../core/providers/media.service';
@Component({
  selector: 'app-calendar-scheduler-day',
  templateUrl: './calendar-scheduler-day.component.html',
  styleUrls: ['./calendar-scheduler-day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CalendarSchedulerDayComponent {
  @Input() hours: HourModel[];
  @Input() tasks:Task[] = [];
  @Input() selectedDate: Date;
  tasksRenderized:number = 0;
  @Output() checkTask = new EventEmitter<string>();
  @Output() putTask = new EventEmitter<string>();
  @Output() dateSelection = new EventEmitter<Date>();
  week:any;
  constructor(private renderer: Renderer2, public tasksService: TaskService, public mdService:MediaService) { }
  ngOnChanges(changes:SimpleChanges){
    if(changes.tasks && this.tasks){
         this.tasksRenderized = 0;
    }
    if(changes.selectedDate && this.selectedDate){
      this.week = this.getWeek(this.selectedDate);
    }
  }
  taskRender(taskDiv: ElementRef, task:Task, hour: HourModel, size: 'small' | 'regular') {
    if ( this.hasTask(task,hour)  && (this.tasksRenderized<=(this.tasks.length * this.hours.length)*2) ) {
         let percent = 0;
      if ((((hour.date + 3600000) - task.startDate) > 3600000) && ((task.endDate - hour.date) > 3600000)) {
           percent = 100;
           this.renderTask(taskDiv,size,percent,task);
         } else {
           if (hour.date - task.startDate < 3600000) {
             percent = Math.floor(((hour.date + 3600000 - task.startDate) * 100) / 3600000);
             size === "regular" ? this.renderer.setStyle(taskDiv, 'margin-left', `${100 - percent}%`) : this.renderer.setStyle(taskDiv, 'margin-top', `${(percent * (52/this.hours.length)) / 100 }vh`);
             percent -= Math.round((task.endDate < hour.date + 3600000 ? ((hour.date + 3600000 - task.endDate) * 100) / 3600000 : 0));
             this.renderTask(taskDiv, size, percent,task);
           } else {
             percent = Math.ceil(((task.endDate - hour.date) * 100) / 3600000);
             size === 'regular' ? this.renderer.setStyle(taskDiv, 'margin-right', `${100 - percent}%`) : this.renderer.setStyle(taskDiv, 'margin-bottom', `${(percent * (52 / this.hours.length)) / 100 }vh}%`);
             percent -= Math.round((task.endDate < hour.date + 3600000 ? ((hour.date + 3600000 - task.endDate) * 100) / 3600000 : 0));
             this.renderTask(taskDiv, size, percent,task);
           }
         }
       }
  }

  hasTask( task: Task, hour: HourModel){
    if ((hour.date + 3600000 > task.startDate) && (hour.date < task.endDate) ){
      return true;
    }else{
      return false;
    }
  }

  renderTask(taskDiv:ElementRef,size: 'small' | 'regular', percent:number,task:Task){
    if (size === 'regular') {
      this.renderer.setStyle(taskDiv, 'background-color', this.taskColor(task));
      this.renderer.setStyle(taskDiv, 'width', `${percent}%`);
    } else {
      this.renderer.setStyle(taskDiv, 'background-color', this.taskColor(task));
      this.renderer.setStyle(taskDiv, 'height', `${percent}%`);
    }
    this.tasksRenderized++;
  }

  taskColor(task:Task){
    let today = new Date();

    let lapso = ENDING_TASK_TIME_LAPSO;

    if (task.endDate > today.getTime()) {
      if (task.endDate > (today.getTime() + lapso)) {
        return '#5464bd';
      } else {
        return '#d1870c';
      }
    } else {
      return '#ff0000';
    }
  }
  getWeek(date: Date) {
    let week = [];
    for (let i = -date.getDay(); i < 7 - date.getDay(); i++) {
      week.push(new Date(date.getFullYear(), date.getMonth(), date.getDate() + i));
    }
    return week;
  }

  isDaySelected(day: Date) {
    return LpDate.dateComparison(day, this.selectedDate) ;
  }

  selectDate(day) {
    this.selectedDate = day;
    LpLocalStorage.set('state-data', this.selectedDate, 'date-selected');
    this.dateSelection.next(this.selectedDate);
  }

}
