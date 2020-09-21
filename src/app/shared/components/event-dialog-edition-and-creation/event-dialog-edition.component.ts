import { Component, NgZone, ViewChild, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { User } from '../../models/user.model';
import { EventModel } from '../../models/event.model';
import { OOService } from '../../../library/providers/objects-operations.service';
import { ParseDatePipe } from '../../../library/pipes/parse-date.pipe';
import { ParseHourPipe } from '../../../library/pipes/parse-hour.pipe';
import { DateOperationsService } from '../../../library/providers/date-operations.service';

@Component({
  selector: 'app-event-dialog-edition-and-creation',
  templateUrl: './event-dialog-edition-and-creation.component.html',
  styleUrls: ['./event-dialog-edition-and-creation.component.scss']
})
export class EventDialogEditionAndCreationComponent implements OnChanges {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  panelOpenState: boolean = false;
  @Input() projectParticipants: User[] = []
  @Input() selectedProject: string
  @Output() postEvent: EventEmitter<EventModel> = new EventEmitter<EventModel>();
  @Output() putEvent: EventEmitter<{ [key: string]: any }> = new EventEmitter<{ [key: string]: any }>()
  @Output() close:EventEmitter<void> = new EventEmitter<void>()
  @Output() back:EventEmitter<void> = new EventEmitter<void>()
  allDay: boolean = false;
  dateFilter = (date: Date): boolean => { return (date.getTime() > new Date(this.event.startDate).getTime()) ? this.event.recursive ? (date.getDay() === new Date(this.event.startDate).getDay()) ? true : false : true : false }
  @Input() event: EventModel
  eventPristine: EventModel
  today = new Date()
  @Input() prevDialog: string
  customTimepickerTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#f5f5f5',
      buttonColor: '#3f51b5',
    },
    dial: {
      dialBackgroundColor: '#f5f5f5',
      dialActiveColor: 'black',
      dialInactiveColor: '#a0a0a0'
    },
    clockFace: {
      clockFaceBackgroundColor: '#f5f5f5',
      clockHandColor: '#3f51b5',
      clockFaceTimeInactiveColor: 'black',
      clockFaceTimeActiveColor: 'black'
    }
  };
  ngOnInit(){
     this.event ={
       name:'',
       description:'',
       user:'',
       participants:[],
       project:this.selectedProject,
       startDate:null,
       endDate:null,
       recursive:false,
       startTime:null,
       endTime:null,
       taskEvent:false,
       disabled:false
     }
  }

  constructor(private _ngZone: NgZone) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.event && this.event){
       this.eventPristine = OOService.copyObject(this.event)
    }
  }
  eventHasChanges(): boolean {
    return OOService.areEquals(this.event, this.eventPristine)
  }
  onRecursiveOptChange(recursive: boolean) {
    recursive ? this.event.endDate = null : null;
  }
  allDayOptChange(allDay: boolean) {
    if (allDay) { this.event.startTime = null; this.event.endTime = null }
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  setDate(type: string, value: Date) {
    type === 'startDate' ? this.event.endDate = null : null;
    const datePipe = new ParseDatePipe();
    this.event[type] = datePipe.transform(value, 'miliseconds');
  }

  setTime(type: string, value: string) {
    const timePipe = new ParseHourPipe();
    this.event[type] = timePipe.transform(value, '24');
  }

  checkChangesToPatch(){ 
    //TODO: 
    let obj = OOService.getObjectDifferences(this.eventPristine,this.event);
    console.log({obj})
    return obj
  }

  startTimeMin(){
    let today = new Date();
    if( DateOperationsService.dateComparison(new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),0,0,0,0),new Date(this.event.startDate))){
     const  parseHourPipe = new ParseHourPipe();
     let hour = `${today.getHours()}:${today.getMinutes()}`
     let transformed:string = parseHourPipe.transform(hour, 'AM/PM').split(' ').map((val,index)=>{ return index === 1 ? val.toLocaleLowerCase():val }).join(' ')
      return transformed
    }
    return '07:00 am'
  }
}
