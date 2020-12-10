import { Component, NgZone, ViewChild, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { OOService } from '../../../library/providers/objects-operations.service';

import { DateOperationsService } from '../../../library/providers/date-operations.service';
import { TaskModel } from '../../models/task.model';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { LpParseDatePipe } from '../../../library/lp-pipes/lp-parse-date.pipe';
import { LpParseHourPipe } from '../../../library/lp-pipes/lp-parse-hour.pipe';


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
  @Input() task: TaskModel
  taskPristine: TaskModel
  today = new Date()
  @Input() prevDialog: string

  ngOnInit(){
     this.task ={
       name:'',
       description:'',
       user:'',
       participants:[],
       project:this.selectedProject,
       priority:1,
       status:'',
       startDate:null,
       endDate:null,
       disabled:false
     }
  }

  constructor(private _ngZone: NgZone, private authService:AuthService) { }

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
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  setDate(type: string, value: Date) {
    if(type === 'startDate'){
      this.task.endDate = null;
    }
    const datePipe = new LpParseDatePipe();
    this.task[type] = datePipe.transform(value, 'miliseconds');
 }

  checkChangesToPatch(){ 
    let obj = OOService.getObjectDifferences(this.taskPristine,this.task);
    obj.user = this.authService.userOnline._id;
    return {taskChanges:obj,id:this.task._id}
  }

  startTimeMin(){
    let now = new Date();
    if( DateOperationsService.dateComparison(new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),0,0,0,0),new Date(this.task.startDate))){
     const  parseHourPipe = new LpParseHourPipe();
     let hour = `${now.getHours()}:${now.getMinutes()}`
     let transformed:string = parseHourPipe.transform(hour, 'AM/PM').split(' ').map((val,index)=>{ return index === 1 ? val.toLocaleLowerCase():val }).join(' ')
      return hour
    }
    return '07:00 am'
  }
  get timeString(){
    return this.task.startDate && this.task.endDate ?  DateOperationsService.milisecondsToPeriod(this.task.startDate,this.task.endDate):null;
  }
}
