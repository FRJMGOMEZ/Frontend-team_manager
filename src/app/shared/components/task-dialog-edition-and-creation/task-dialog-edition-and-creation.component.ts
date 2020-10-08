import { Component, NgZone, ViewChild, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { User } from '../../models/user.model';
import { OOService } from '../../../library/providers/objects-operations.service';
import { ParseDatePipe } from '../../../library/pipes/parse-date.pipe';
import { ParseHourPipe } from '../../../library/pipes/parse-hour.pipe';
import { DateOperationsService } from '../../../library/providers/date-operations.service';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task-dialog-edition-and-creation',
  templateUrl: './task-dialog-edition-and-creation.component.html',
  styleUrls: ['./task-dialog-edition-and-creation.component.scss']
})
export class TaskDialogEditionAndCreationComponent implements OnChanges {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  panelOpenState: boolean = false;
  @Input() projectParticipants: User[] = []
  @Input() selectedProject: string
  @Output() postTask: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() putTask: EventEmitter<{ filters: { [key: string]: any }, id: string }> = new EventEmitter<{ filters: { [key: string]: any }, id: string }>()
  @Output() close:EventEmitter<void> = new EventEmitter<void>()
  @Output() back:EventEmitter<void> = new EventEmitter<void>()
  dateFilter = (date: Date): boolean => { return (date.getTime() > new Date(this.task.startDate).getTime()) ? this.task.recursive ? (date.getDay() === new Date(this.task.startDate).getDay()) ? true : false : true : false }
  @Input() task: TaskModel
  taskPristine: TaskModel
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
     this.task ={
       name:'',
       description:'',
       user:'',
       participants:[],
       project:this.selectedProject,
       startDate:null,
       endDate:null,
       recursive:false,
       allDay:false,
       startTime:null,
       endTime:null,
       disabled:false
     }
  }

  constructor(private _ngZone: NgZone) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.task && this.task){
       this.taskPristine = OOService.copyObject(this.task)
    }
  }
  taskHasChanges(): boolean {
    return OOService.areEquals(this.task, this.taskPristine)
  }
  onRecursiveOptChange(recursive: boolean) {
    recursive ? this.task.endDate = null : null;
  }
  allDayOptChange(allDay: boolean) {
    if (allDay) { this.task.startTime = null; this.task.endTime = null }
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  setDate(type: string, value: Date) {
    type === 'startDate' ? this.task.endDate = null : null;
    const datePipe = new ParseDatePipe();
    this.task[type] = datePipe.transform(value, 'miliseconds');
  }

  setTime(type: string, value: string) {
    const timePipe = new ParseHourPipe();
    this.task[type] = timePipe.transform(value, '24');
  }

  checkChangesToPatch(){ 
    let obj = OOService.getObjectDifferences(this.taskPristine,this.task);
    return {taskChanges:obj,id:this.task._id}
  }

  startTimeMin(){
    let today = new Date();
    if( DateOperationsService.dateComparison(new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),0,0,0,0),new Date(this.task.startDate))){
     const  parseHourPipe = new ParseHourPipe();
     let hour = `${today.getHours()}:${today.getMinutes()}`
     let transformed:string = parseHourPipe.transform(hour, 'AM/PM').split(' ').map((val,index)=>{ return index === 1 ? val.toLocaleLowerCase():val }).join(' ')
      return transformed
    }
    return '07:00 am'
  }
}
