import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Day } from '../../../../../shared/models/day.model';
import { ArrayOperationsService } from '../../../../../library/providers/array-operations.service';
import { EventModel } from '../../../../../shared/models/event.model';
import { EventsService } from '../../../../../shared/providers/events.service';
import { Subscription } from 'rxjs';
import { DialogsService } from '../../../../../shared/providers/dialogs.service';
import { ProjectService } from '../../../../../shared/providers/project.service';
import { Project } from 'src/app/shared/models/project.model';
import { LocalStorageService } from '../../../../../library/providers/local-storage.service';

@Component({
    selector: 'app-calendar-scheduler-month-smart',
    template: `
    
    <app-calendar-scheduler-month 
    [dayRows]="dayRows" 
    [selectedDate]="selectedDate" 
    (checkEvent)="dialogsService.openEventInfoDialog($event)" 
    (putEvent)="dialogsService.openEditCreateEventDialog($event)" 
    (deleteEvent)="eventsService.deleteEvent($event).subscribe()" 
    (checkEvents)="dialogsService.openEventsListInfoDialog($event)"> 
    </app-calendar-scheduler-month>
    
    `,
     changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CalendarSchedulerMonthSmartComponent implements OnInit, OnDestroy, OnChanges {

    @Input() selectedDate: Date = new Date()
    @Output() putEvent = new EventEmitter<string>()
    dayRows: any;
    eventsSubscription: Subscription
    selectedProject:string 
    projectSelectionSubs:Subscription
    constructor(private arrayOperationsService: ArrayOperationsService,
        public eventsService: EventsService,
        public dialogsService: DialogsService,
        private projectService:ProjectService,
        private localStorageService:LocalStorageService,
        private cdr:ChangeDetectorRef) { }
    ngOnInit(): void {
        this.selectedProject = this.localStorageService.get('state-data','project');
        this.init();
        this.projectSelectionSubs = this.projectService.selectedProject$.subscribe((project: Project) => {
            this.selectedProject = project ? project._id : undefined;
            this.init();
        })

        this.eventsSubscription = this.eventsService.event$.subscribe((data: { event: EventModel, order: string }) => {
            switch (data.order) {
                case 'post':
                    this.dayRows.forEach((row: Day[], i) => {
                        row.forEach((eachDay: Day, index) => {
                            if ((eachDay.date >= data.event.startDate) && (eachDay.date <= data.event.endDate)) {
                                if(data.event.recursive){
                                    if(new Date(data.event.startDate).getDay() === new Date(eachDay.date).getDay()){
                                        eachDay.events.push(data.event)
                                        row[i][index] = eachDay;  
                                    }
                                }else{
                                    eachDay.events.push(data.event)
                                    row[i][index] = eachDay;
                                }
                            }
                        })
                    })
                    break;
                case 'put':
                    this.dayRows.forEach((row: Day[], i: number) => {
                        row.forEach((eachDay: Day, ind: number) => {
                            let events = eachDay.events;
                            eachDay.events = [];
                            events.forEach((eachEvent:EventModel)=>{
                                eachEvent._id === data.event._id ? eachEvent = data.event : null;
                                if ((eachDay.date >= eachEvent.startDate) && (eachDay.date <= eachEvent.endDate) && (eachEvent.project === this.selectedProject || eachEvent.project === null)) {
                                    eachDay.events.push(eachEvent)
                                }
                            })
                        })
                    })
                break;
                case 'delete':
                    this.dayRows.forEach((row: Day[], i: number) => {
                        row.forEach((day: Day, ind: number) => {
                            day.events.forEach((eachEvent: EventModel) => {
                                if (eachEvent._id === data.event._id) {
                                    this.dayRows[i][ind].events = this.dayRows[i][ind].events.filter((eachEvent:EventModel)=>{ return eachEvent._id != data.event._id})
                                }
                            })
                        })
                    }) 
            }
            this.cdr.detectChanges();
        })
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.selectedDate && this.selectedDate && !changes.selectedDate.firstChange) {
            this.init();
        }
    }
    init() {
        let monthDays = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 0).getDate();
        let lastMonthDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), monthDays, 0, 0, 0, 0);
        let days = this.getCalendarDays(this.selectedDate, monthDays, lastMonthDay)
        let timeRange = this.getTimeRange(this.selectedDate, monthDays, lastMonthDay);
        //// search for events in a date range ///
        this.eventsService.getEventsByTimeRange('month',timeRange,this.selectedProject).subscribe((events: EventModel[]) => {
            days.forEach((eachDay: Day, index) => {
                events.forEach((eachEvent: EventModel) => {
                    if ((eachDay.date >= eachEvent.startDate) && (eachDay.date <= eachEvent.endDate) && (eachEvent.project === this.selectedProject || eachEvent.project === null || !this.selectedProject)) {
                        if(eachEvent.recursive){
                            if ((new Date(eachEvent.startDate).getDay() === new Date(eachDay.date).getDay())){
                                eachDay.events.push(eachEvent);
                                days[index] = eachDay;
                            }
                        }else{
                            eachDay.events.push(eachEvent)
                            days[index] = eachDay;
                        }
                    }
                })
            })
            this.dayRows = this.arrayOperationsService.divideArray(days, 7);
            this.cdr.detectChanges();
        })
    }
    getCalendarDays(date: Date, monthDays: number, lastMonthDay: Date) {
        let days = [];
        let firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
        for (let i = 1 - firstMonthDay.getDay(); i <= monthDays + (6 - lastMonthDay.getDay()); i++) {
            days.push(new Day(new Date(date.getFullYear(), date.getMonth(), i, 0, 0, 0, 0)))
        }
        return days
    }
    getTimeRange(date: Date, monthDays: number, lastMonthDay: Date) {
        return [new Date(date.getFullYear(), date.getMonth(), 0 - (7 - date.getDay())).getTime(), new Date(date.getFullYear(), date.getMonth(), monthDays + (6 - lastMonthDay.getDay()), 23,59, 59, 0).getTime()]
    }
    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
        this.projectSelectionSubs.unsubscribe();
    }
}
