import { Component, Input, ElementRef, Renderer2, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Hour } from '../../../../../shared/models/hour.model';
import { EventModel } from '../../../../../shared/models/event.model';
import { EventsService } from '../../../../../shared/providers/events.service';

@Component({
  selector: 'app-calendar-scheduler-day',
  templateUrl: './calendar-scheduler-day.component.html',
  styleUrls: ['./calendar-scheduler-day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CalendarSchedulerDayComponent {
  @Input() hours: Hour[]
  @Input() events: { event: EventModel, startDateTime: number, endDateTime: number}[] = [];
  @Input() selectedDate: Date
  eventsRenderized:number = 0;
  @Output() checkEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output() putEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor(private renderer: Renderer2, public eventsService:EventsService) { }
  calculateCardWidth() {
    return `${(window.innerWidth - 20) / this.hours.length}px`;
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes.events && this.events){
         this.eventsRenderized = 0;
    }
  }
  hasEvent(eventDiv: ElementRef, event: { event: EventModel, startDateTime: number, endDateTime: number }, hour: Hour, size: 'small' | 'regular') {
    if ((hour.date + 3600000 > event.startDateTime) && (hour.date < event.endDateTime)  && (this.eventsRenderized<=(this.events.length * this.hours.length)*2) ) {
         let percent = 0;
         if ((((hour.date + 3600000) - event.startDateTime) > 3600000) && ((event.endDateTime - hour.date) > 3600000)) {
           percent = 100;
           this.renderEvent(eventDiv,size,percent)
         } else {
           if (hour.date - event.startDateTime < 3600000) {
             percent = Math.ceil(((hour.date + 3600000 - event.startDateTime) * 100) / 3600000);
             size === "regular" ? this.renderer.setStyle(eventDiv, 'margin-left', `${100 - percent}%`) : this.renderer.setStyle(eventDiv, 'margin-top', `${100 - percent}%`)
             this.renderEvent(eventDiv, size, percent)
           } else {
             percent = Math.ceil(((event.endDateTime - hour.date) * 100) / 3600000);
             size === 'regular' ? this.renderer.setStyle(eventDiv, 'margin-right', `${100 - percent}%`) : this.renderer.setStyle(eventDiv, 'margin-bottom', `${100 - percent}%`)
             this.renderEvent(eventDiv, size, percent)
           }
         }
       }
  }
  renderEvent(eventDiv:ElementRef,size: 'small' | 'regular', percent:number){
    if (size === 'regular') {
      this.renderer.setStyle(eventDiv, 'background-color', "#5464bd")
      this.renderer.setStyle(eventDiv, 'width', `${percent}%`);
    } else {
      this.renderer.setStyle(eventDiv, 'background-color', '#5464bd')
      this.renderer.setStyle(eventDiv, 'height', `${percent}%`);
    }
    this.eventsRenderized++
  }
}
