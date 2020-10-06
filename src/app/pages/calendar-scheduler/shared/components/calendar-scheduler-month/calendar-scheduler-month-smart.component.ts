import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Day } from '../../../../../shared/models/day.model';
import { ArrayOperationsService } from '../../../../../library/providers/array-operations.service';
import { EventModel } from '../../../../../shared/models/event.model';
import { EventsService } from '../../../../../shared/providers/events.service';
import { Subscription, timer } from 'rxjs';
import { DialogsService } from '../../../../../shared/providers/dialogs.service';


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
    dayRows: any[];
    eventsSubscription: Subscription
    projectSelectionSubs: Subscription
    @Input() selectedProject: string
    timeRange: number[]
    days: Day[]
    constructor(private arrayOperationsService: ArrayOperationsService,
        public eventsService: EventsService,
        public dialogsService: DialogsService,
        private cdr: ChangeDetectorRef) { }
    ngOnInit(): void {
        this.setRangeAndDays().then(() => {
            this.getEvents();
        })
        this.eventsSubscription = this.eventsService.event$.subscribe((data:{event:EventModel,action:string}) => {
            switch (data.action) {
                case 'POST':
                    this.insertEvent(data.event)
                    break;
                case 'PUT':
                    console.log('to update')
                    this.removeEvent(data.event)
                    this.insertEvent(data.event)
                    break;
                case 'DELETE':
                    console.log('to delete')
                    this.removeEvent(data.event)
                    break;
            }
            this.dayRows = [...this.dayRows]
            this.cdr.markForCheck()
        })
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.selectedDate && !changes.selectedDate.firstChange) {
            this.setRangeAndDays().then(() => {
                this.getEvents();
            })
        }
        if (changes.selectedProject && !changes.selectedProject.firstChange) {
            this.getEvents()
        }
    }

    insertEvent(event:EventModel){
        this.dayRows.forEach((row, ind) => {
            row.forEach((eachDay: Day, index) => {
                let project = (event.project as any)._id ? (event.project as any)._id : event.project
                if ((eachDay.date >= event.startDate) && (eachDay.date <= event.endDate) && (project === this.selectedProject)) {
                    if (event.recursive) {
                        if ((new Date(event.startDate).getDay() === new Date(eachDay.date).getDay())) {
                            this.dayRows[ind][index].events= [...eachDay.events, event]
                        }
                    } else {
                        this.dayRows[ind][index].events = [...eachDay.events, event]
                        console.log('need to be included')
                    }
                }
            })
        })
    }

    removeEvent(event:EventModel){
       this.dayRows =[ ...this.dayRows.map((eachRow)=>{
            return eachRow.map((eachDay:Day)=>{ eachDay.events = eachDay.events.filter((eachEvent:EventModel)=>{  return eachEvent._id != event._id }); return eachDay })
        })]
    }
    getEvents() {
        //// search for events in a date range ///
        this.eventsService.getEventsByTimeRange('month', this.timeRange, this.selectedProject).subscribe((events: EventModel[]) => {
                this.setRangeAndDays();
                this.days.forEach((eachDay: Day, index) => {
                    events.forEach((eachEvent: EventModel) => {
                    if ((eachDay.date >= eachEvent.startDate) && (eachDay.date <= eachEvent.endDate) && (eachEvent.project === this.selectedProject)) {
                        if (eachEvent.recursive) {
                            if ((new Date(eachEvent.startDate).getDay() === new Date(eachDay.date).getDay())) {
                                eachDay.events = [...eachDay.events,eachEvent]
                                this.days[index] = { ...eachDay };
                            }
                        } else {
                            eachDay.events = [...eachDay.events, eachEvent]
                            this.days[index] = { ...eachDay };
                        }
                    }
                })
            })
            this.dayRows = this.arrayOperationsService.divideArray(this.days, 7);
            this.cdr.detectChanges();
        })
    }

    setRangeAndDays() {
        return new Promise(async (resolve, reject) => {
            let monthDays = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0).getDate();
            let lastMonthDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), monthDays, 0, 0, 0, 0);
            let firstMonthDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1, 0, 0, 0, 0);
            this.days = await this.getCalendarDays(this.selectedDate, monthDays, lastMonthDay, firstMonthDay)
            this.timeRange = await this.getTimeRange(this.selectedDate, monthDays, lastMonthDay, firstMonthDay);
            resolve()
        })
    }
    getCalendarDays(date: Date, monthDays: number, lastMonthDay: Date, firstMonthDay: Date) {
        let days = [];
        for (let i = 1 - firstMonthDay.getDay(); i <= monthDays + (6 - lastMonthDay.getDay()); i++) {
            days.push(new Day(new Date(date.getFullYear(), date.getMonth(), i, 0, 0, 0, 0)))
        }
        return days
    }
    getTimeRange(date: Date, monthDays: number, lastMonthDay: Date, firstMonthDay: Date) {
        return [new Date(date.getFullYear(), date.getMonth(), 1 - firstMonthDay.getDay()).getTime(), new Date(date.getFullYear(), date.getMonth(), monthDays + (6 - lastMonthDay.getDay()), 23, 59, 59, 0).getTime()]
    }
    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }
}
