import { Component, Input, ElementRef, Renderer2, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Hour } from '../../../../../shared/models/hour.model';
import { EventModel } from '../../../../../shared/models/event.model';

@Component({
  selector: 'app-calendar-scheduler-day',
  templateUrl: './calendar-scheduler-day.component.html',
  styleUrls: ['./calendar-scheduler-day.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CalendarSchedulerDayComponent {
  @Input() hours: Hour[]
  @Input() events: { event: EventModel, startDateTime: number, endDateTime: number}[] = [];
  @Input() selectedDate: Date
  eventsRenderized:number = 0;
  @Output() checkEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output() putEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor(private renderer: Renderer2) { }
  calculateCardWidth() {
    return `${(window.innerWidth - 40) / this.hours.length}px`;
  }
  ngDoCheck(){
    console.log('checked')
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
             percent = Math.round(((hour.date + 3600000 - event.startDateTime) * 100) / 3600000);
             size === "regular" ? this.renderer.setStyle(eventDiv, 'margin-left', `${100 - percent}%`) : this.renderer.setStyle(eventDiv, 'margin-top', `${100 - percent}%`)
             this.renderEvent(eventDiv, size, percent)
           } else {
             percent = Math.round(((event.endDateTime - hour.date) * 100) / 3600000);
             size === 'regular' ? this.renderer.setStyle(eventDiv, 'margin-right', `${100 - percent}%`) : this.renderer.setStyle(eventDiv, 'margin-bottom', `${100 - percent}%`)
             this.renderEvent(eventDiv, size, percent)
           }
         }
       }
  }
  renderEvent(eventDiv:ElementRef,size: 'small' | 'regular', percent:number){
    if (size === 'regular') {
      this.renderer.setStyle(eventDiv, 'background-color', "#3f51b5")
      this.renderer.setStyle(eventDiv, 'width', `${percent}%`);
    } else {
      this.renderer.setStyle(eventDiv, 'background-color', 'blue')
      this.renderer.setStyle(eventDiv, 'height', `${percent}%`);
    }
    this.eventsRenderized++
  }

  editionBanned(eventStartDate:number){
     if(new Date().getTime() > eventStartDate){
       return true
     }
     return false
  }
}
