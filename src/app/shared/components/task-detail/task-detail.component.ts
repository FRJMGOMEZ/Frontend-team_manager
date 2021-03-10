import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';
import { LpDialogsService } from 'lp-dialogs';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/providers/task.service';
import { LpObject } from 'lp-operations';
import { MediaService } from '../../../core/providers/media.service';
import { LpDate } from 'lp-operations';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TaskDetailComponent implements OnChanges  {
  @Input() taskSelected: Task;
  taskPristine:Task;
  @Input() date: number;
  @Input() prevDialog: string;
  prevTask:Task;
  @Output() back = new EventEmitter<any>();
  @Output() editTask:EventEmitter<string> = new EventEmitter<string>();
  @Output() restoreVersion: EventEmitter<{ taskChanges: { [key: string]: any }, id: string }> = new EventEmitter<{ taskChanges: { [key: string]: any }, id: string }>();
  isCurrentVersion: boolean;
  currentVersion:number;
  propertiesNoEditables = ['prevStates', 'deliverDate', 'extraTime', 'validationTime', 'actionsRequired', '__v','createdBy'];

  get extraTime(){
    const timesArray = LpDate.milisecsToString(this.taskSelected.extraTime);
    return timesArray.reduce((acum, time, index) => { acum += time + (timesArray[index+1] ?', ' : ''); return acum},'')
  }
  constructor(public tasksService: TaskService, private lpDialogsService:LpDialogsService, public mdService:MediaService){}
  ngOnChanges(changes:SimpleChanges){
    if (changes.taskSelected && this.taskSelected) {
      this.taskPristine = LpObject.copyObject(this.taskSelected);
    }
  }

  restore(){
    this.lpDialogsService.openConfirmDialog('THIS VERSION WILL REPLACE THE CURRENT ONE', 'Are you sure?').subscribe((res) => {
      if(res){
        this.restoreVersion.emit(this.checkChangesToPatch());
      }
    });
  }
  checkChangesToPatch() {
    const taskSelected = Object.keys(this.taskSelected).reduce((acum, key) => { !this.propertiesNoEditables.includes(key) ? acum[key] = this.taskSelected[key] : null; return acum }, {});
    const taskPristine = Object.keys(this.taskPristine).reduce((acum, key) => { !this.propertiesNoEditables.includes(key) ? acum[key] = this.taskPristine[key] : null; return acum }, {});
    let obj = LpObject.getObjectDifferences(taskPristine, taskSelected);
    return { taskChanges: obj, id: this.taskSelected._id };
  }
  versionIsDifferent(){
    return !LpObject.areEquals(this.prevTask, this.taskSelected);
  }
  propertyHasChanged(key:string){
    return this.currentVersion != 0 ?this.prevTask ? JSON.stringify(this.prevTask[key]) != JSON.stringify(this.taskSelected[key]) : false : false;
  }

  setVersion(task:Task){
  this.taskSelected = task;
  const taskSelected = Object.keys(this.taskSelected).reduce((acum,key)=>{ !this.propertiesNoEditables.includes(key) ? acum[key]=this.taskSelected[key] : null; return acum },{});
  const taskPristine = Object.keys(this.taskPristine).reduce((acum, key) => { !this.propertiesNoEditables.includes(key) ? acum[key] = this.taskPristine[key] : null; return acum }, {});
  this.isCurrentVersion = LpObject.areEquals(taskSelected,taskPristine);
  }

  showDescription() {
    this.lpDialogsService.openInfoDialog(this.taskSelected.description, 'TASK DESCRIPTION');
  }

}
