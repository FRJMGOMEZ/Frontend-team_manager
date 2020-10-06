import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventsService } from '../../providers/events.service';
import { Subscription } from 'rxjs';
import { EventModel } from '../../models/event.model';
import { LocalStorageService } from '../../../library/providers/local-storage.service';

@Component({
    selector: 'app-event-dialog-smart',
    template: `
    
    <app-event-dialog [eventSelected]="eventSelected" (close)="closeDialog($event)" (back)="back()" [prevDialog]="prevDialog" (editEvent)="editEvent($event)" > </app-event-dialog>
    `

})
export class EventDialogSmartComponent implements OnInit {

    eventsSubscription:Subscription;
    eventSelected:EventModel
    date:number
    prevDialog:string
    constructor(private dialogRef: MatDialogRef<EventDialogSmartComponent>,
                @Inject(MAT_DIALOG_DATA) private data,
                private eventService:EventsService,
                private localStorageService:LocalStorageService) { }

    ngOnInit(): void {
     
       this.eventService.getEventById(this.data.eventId).subscribe((event:EventModel)=>{
           this.localStorageService.set('state-data', this.data.eventId, 'event-on-screen')
         this.eventSelected = event;
       })
       this.date = this.data.date ? this.data.date : null;
       this.prevDialog = this.data.prevDialog;
    }

    editEvent(eventId:string){
        this.dialogRef.close({ nextDialog:'editCreateEvent', dataRequired:eventId})
    }

    back(){
        this.dialogRef.close({prevDialog:this.prevDialog})
    }
    closeDialog(date?){
        this.dialogRef.close(date? {date}:undefined)
        this.localStorageService.remove('state-data','event-on-screen')
    }

}
