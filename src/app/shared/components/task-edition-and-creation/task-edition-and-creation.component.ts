import { Component, NgZone, ViewChild, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { User } from '../../../core/models/user.model';
import { Task } from '../../../core/models/task.model';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { LpDate, LpObject } from 'lp-operations';
import { TaskService } from '../../../core/providers/task.service';
import { MediaService } from '../../../core/providers/media.service';
import { LpParseDatePipe, LpParseHourPipe } from 'lp-date-pipes';
@Component({
  selector: 'app-task-edition-and-creation',
  templateUrl: './task-edition-and-creation.component.html',
  styleUrls: ['./task-edition-and-creation.component.scss']
})
export class TaskEditionAndCreationComponent implements OnChanges {

  @Input() isDialog: boolean = true;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  panelOpenState: boolean = false;
  @Input() projectParticipants: User[] = [];
  @Input() selectedProject: string;
  @Output() postTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() putTask: EventEmitter<{ filters: { [key: string]: any }, id: string }> = new EventEmitter<{ filters: { [key: string]: any }, id: string }>();
  @Output() close:EventEmitter<void> = new EventEmitter<void>();
  @Output() back:EventEmitter<void> = new EventEmitter<void>();

  @Output() dialogBack = new EventEmitter<void>();
  @Input() task: Task;
  taskPristine: Task;
  today = new Date();
  @Input() prevDialog: string;

  ngOnInit(){
     this.task ={
       name:'',
       description:'',
       createdBy:this.authService.userOnline._id,
       participants:[],
       reviewers:[],
       project:this.selectedProject,
       priority:1,
       status:'',
       startDate:null,
       endDate:null
     }
  }

  constructor(private _ngZone: NgZone, private authService:AuthService, public taskService:TaskService, public mdService:MediaService) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.task && this.task){
       this.taskPristine = LpObject.copyObject(this.task);
    }
  }
  taskHasChanges(): boolean {
    return LpObject.areEquals(this.task, this.taskPristine);
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
    let obj = LpObject.getObjectDifferences(this.taskPristine,this.task);
    obj.user = this.authService.userOnline._id;
    return {taskChanges:obj,id:this.task._id};
  }

  startTimeMin(){
    let now = new Date();
    if( LpDate.dateComparison(new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),0,0,0,0),new Date(this.task.startDate))){
     const  parseHourPipe = new LpParseHourPipe();
     let hour = `${now.getHours()}:${now.getMinutes()}`;
      return hour;
    }
    return '07:00 am';
  }

  participantsChange(change){
    this.task.participants = change;
    this.task.reviewers = (this.task.reviewers as string[]).filter((rw)=>{ return (this.task.participants as string[]).includes(rw)})
  }
  get timeString(){
    return this.task.startDate && this.task.endDate ?  LpDate.milisecondsToPeriod(this.task.startDate,this.task.endDate):null;
  }

  get reviewersOptions(){
    return this.projectParticipants.filter((p:User)=>{ return (this.task.participants as string[]).includes(p._id) });
  }
}
