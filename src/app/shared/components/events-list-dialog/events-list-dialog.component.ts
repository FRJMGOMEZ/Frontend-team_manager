import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { MatTableDataSource } from '@angular/material/table';
import { DateOperationsService } from '../../../library/providers/date-operations.service';
import { EventsService } from '../../providers/events.service';

@Component({
  selector: 'app-events-list-dialog',
  templateUrl: './events-list-dialog.component.html',
  styleUrls: ['./events-list-dialog.component.scss']
})
export class EventsListDialogComponent  {

  dataSource = new MatTableDataSource<EventModel>([])
  @Input()events:EventModel[]
  @Output() close = new EventEmitter<void>()
  @Output() checkDetails:EventEmitter<string> = new EventEmitter<string>()
  @Output() editEvent:EventEmitter<string> = new EventEmitter<string>()
  @Output() deleteEvent:EventEmitter<string> = new EventEmitter<string>()
  @Output() back:EventEmitter<void> = new EventEmitter<void>()
  displayedColumns: string[] = ['name', 'time', 'opt'];
  @Input() prevDialog:string
  constructor(public eventsService:EventsService) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.events && this.events){
      this.dataSource.data = this.events;
    }
  }
}
