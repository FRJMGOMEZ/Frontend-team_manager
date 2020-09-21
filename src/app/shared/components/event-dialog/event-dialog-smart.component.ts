import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventsService } from '../../providers/events.service';
import { Subscription } from 'rxjs';
import { EventModel } from '../../models/event.model';

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
    constructor(private dialogRef: MatDialogRef<EventDialogSmartComponent>, @Inject(MAT_DIALOG_DATA) private data, private eventService:EventsService) { }

    ngOnInit(): void {
       this.eventService.getEventById(this.data.eventId).subscribe((event:EventModel)=>{
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
        this.dialogRef.close(date? {date}:undefined);
    }

}
