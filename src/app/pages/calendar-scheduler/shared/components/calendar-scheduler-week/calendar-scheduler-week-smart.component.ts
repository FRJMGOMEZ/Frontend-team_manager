
import { Component, OnInit, Input, SimpleChanges, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { EventsService } from '../../../../../shared/providers/events.service';
import { EventModel } from '../../../../../shared/models/event.model';
import { Subscription } from 'rxjs';
import { DialogsService } from '../../../../../shared/providers/dialogs.service';

@Component({
    selector: 'app-calendar-scheduler-week-smart',
    template: 
    `
    <app-calendar-scheduler-week 
    [week]="week" [events]="events" 
    [selectedDate]="selectedDate" 
    (dateSelection)="dateSelection.next($event); selectedDate = $event"
    (checkEvent)="dialogsService.openEventInfoDialog($event)" 
    (checkEvents)="dialogsService.openEventsListInfoDialog($event)"
    (putEvent)="dialogsService.openEditCreateEventDialog($event)" 
    (deleteEvent)="eventService.deleteEvent($event).subscribe()">
    </app-calendar-scheduler-week>
           
    `
    
    ,
})
export class CalendarSchedulerWeekSmartComponent implements OnInit {
    @Input() selectedDate: Date = new Date()
    @Input() selectedProject: string 
    @Output() dateSelection: EventEmitter<Date> = new EventEmitter<Date>()
    week:Date[]=[]
    events: EventModel[][] 
    eventSubscription:Subscription
    constructor(public eventService:EventsService, private cdr:ChangeDetectorRef , public dialogsService:DialogsService) { }

    ngOnInit(): void {
        this.week = this.getWeek(this.selectedDate);
        this.init();
          
        this.eventSubscription = this.eventService.event$.subscribe(()=>{
            this.init()
        })
    }

    ngOnChanges(changes:SimpleChanges){
        if (changes.selectedDate && !changes.selectedDate.firstChange){
            this.week = this.getWeek(this.selectedDate);
           this.init();
        }
        if (changes.selectedProject && !changes.selectedProject.firstChange){
           this.init();
        }

       
    }

    getWeek(date: Date) {
        let week = [];
        for (let i = -date.getDay() ; i <  7 - date.getDay() ; i++ ){
            week.push(new Date(date.getFullYear(), date.getMonth(), date.getDate() + i))
        }
        return week;
    }

    init(){
    let eventsWeek = [[], [], [], [], [], [], []]
    let lastDay = this.week[this.week.length - 1] 
    let timeRange = [this.week[0].getTime(), new Date(lastDay.getFullYear(),lastDay.getMonth(),lastDay.getDate(),23,59,59,0).getTime()]
    this.eventService.getEventsByTimeRange('week',timeRange, this.selectedProject).subscribe((events:EventModel[])=>{
        events.forEach((eachEvent)=>{
            this.week.forEach((eachDay:Date,index:number)=>{
                  if(eachEvent.startDate <= eachDay.getTime() && eachEvent.endDate >= eachDay.getTime()){
                     eventsWeek[index].push(eachEvent)
                  }
            })
        })
        this.events = [...eventsWeek]
        this.cdr.detectChanges()
    })
 }

}


/* 
https://www.youtube.com/watch?v=35IiEchh7-E
*/