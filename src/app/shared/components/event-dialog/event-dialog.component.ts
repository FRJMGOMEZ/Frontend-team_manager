import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EventModel } from '../../models/event.model';
import { DateOperationsService } from '../../../library/providers/date-operations.service';
import { EventsService } from '../../providers/events.service';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent  {

  @Input() eventSelected: EventModel

  @Output() close = new EventEmitter<any>();

  @Output() back = new EventEmitter<any>()

  @Output() editEvent:EventEmitter<string> = new EventEmitter<string>()

  @Input() prevDialog:string

  constructor(public eventsService:EventsService){

  }

}
