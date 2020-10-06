import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventsService } from '../../providers/events.service';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { EventModel } from '../../models/event.model';

@Component({
    selector: 'app-events-list-dialog-smart',
    template:`
        <app-events-list-dialog [prevDialog]="prevDialog" (close)="close()" (back)="back()" [events]="events" (editEvent)="editEvent($event)" (checkDetails)="checkDetails($event)" > </app-events-list-dialog>
    `

})
export class EventsListDialogSmartComponent implements OnInit {

    selectedProject:string
    selectedDate:Date
    events:EventModel[]=[]
    prevDialog:string
    constructor(
        private eventService:EventsService,
        private dialogRef: MatDialogRef<EventsListDialogSmartComponent>,
        private localStorageService:LocalStorageService,
        @Inject(MAT_DIALOG_DATA) private data) { }

    ngOnInit(): void {
        this.selectedDate = this.localStorageService.get('state-data','date-selected');
        this.selectedDate = this.selectedDate ? new Date(this.selectedDate):undefined;
        this.prevDialog = this.data.prevDialog;
        this.selectedProject = this.localStorageService.get('state-data','project') 
        this.getEvents(new Date(this.data.date));
    }
    getEvents(date){
        let timeRange = [date.getTime(), null]
        this.eventService.getEventsByTimeRange('day', timeRange, this.selectedProject , date.getTime()).subscribe((events:EventModel[])=>{
            this.events = events; 
        })
    }
    checkDetails(eventId:string){
        this.dialogRef.close({ nextDialog:'eventInfo',eventId})
    }
    editEvent(eventId:string){
        this.dialogRef.close({ nextDialog: 'editCreateEvent', eventId })
    }
    close(id?:string,action?:string){
        this.dialogRef.close( id && action ? {id,action}:undefined)
    }
    back(){
        this.dialogRef.close({prevDialog:this.prevDialog})
    }

}
