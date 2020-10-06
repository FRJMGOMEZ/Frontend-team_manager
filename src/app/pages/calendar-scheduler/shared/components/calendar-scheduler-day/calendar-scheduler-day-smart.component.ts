

import { Component, OnInit, Input, SimpleChanges, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Hour } from '../../../../../shared/models/hour.model';
import { EventsService } from '../../../../../shared/providers/events.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../../../../library/providers/local-storage.service';
import { EventModel } from '../../../../../shared/models/event.model';
import { DialogsService } from '../../../../../shared/providers/dialogs.service';

@Component({
    selector: 'app-calendar-scheduler-day-smart',
    template: `
    <app-calendar-scheduler-day [hours]="hours" [events]="events" [selectedDate]="selectedDate" (checkEvent)="checkEvent($event)" (putEvent)="putEvent($event)" > </app-calendar-scheduler-day>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CalendarSchedulerDaySmartComponent implements OnInit, OnDestroy {

    @Input() hoursRange: { start: number, end: number }
    @Input() selectedDate: Date
    timeRange:any[]
    @Input() selectedProject: string
    hours: Hour[] = []
    events: { event: EventModel, startDateTime: number, endDateTime: number }[] = []
    eventSubscription: Subscription
    constructor(private eventService: EventsService,
                 private dialogService:DialogsService,
                 private cdr:ChangeDetectorRef) { }
    ngOnInit(): void {
        this.init();
        this.eventSubscription = this.eventService.event$.subscribe(() => {
            // TODO: Create an inner update system ??
            this.init()
        })
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.selectedDate && !changes.selectedDate.firstChange) {
            this.init();
        }
        if (changes.selectedProject && !changes.selectedProject.firstChange){
            this.init();
        }
    }
    init() {
        this.hours = [];
        for (let i = this.hoursRange.start; i < this.hoursRange.end; i++) {
            this.hours.push(new Hour(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), i, 0, 0, 0)))
        }
        this.timeRange = [this.selectedDate.getTime(),null]
        this.eventService.getEventsByTimeRange('day', this.timeRange, this.selectedProject , this.selectedDate.getTime()).subscribe((events: EventModel[]) => {
            let formatedEvents = [];
            events.forEach((eachEvent) => { formatedEvents.push(this.getEventTimes(eachEvent)) })
            this.events = [...formatedEvents];
            this.cdr.detectChanges()
        })
    }
    getEventTimes(event: EventModel): { event: EventModel, startDateTime: number, endDateTime: number } {
        let eventDayFormat: { event: EventModel, startDateTime: number, endDateTime: number } = { event: null, startDateTime: null, endDateTime: null }
        if (event.startTime) {
            const startTime = event.startTime.split(':').reduce((acum, time, index) => { return index === 0 ? acum + Number(time) : (acum + (Number(time) / 60)) }, 0) * 3600000;
            const endTime = event.endTime.split(':').reduce((acum, time, index) => { return index === 0 ? acum + Number(time) : (acum + Number(time) / 60) }, 0) * 3600000;
            eventDayFormat.startDateTime = this.selectedDate.getTime() + startTime;
            eventDayFormat.endDateTime = this.selectedDate.getTime() + endTime;
        } else {
            eventDayFormat.startDateTime = this.selectedDate.getTime();
            eventDayFormat.endDateTime = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 23, 59, 0, 0).getTime();
        }
        eventDayFormat.event = event;
        return eventDayFormat
    }

    checkEvent(eventId:string){
        this.dialogService.openEventInfoDialog(eventId)
    }

    putEvent(eventId:string){
        this.dialogService.openEditCreateEventDialog(eventId)
    }
    ngOnDestroy() {
        this.eventSubscription.unsubscribe();
    }

}

