import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from '../../providers/task.service';
import { LpDialogsService } from 'lp-dialogs';
import { TaskModel } from '../../../models/task.model';
import { OOService } from '../../../../library/providers/objects-operations.service';



@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TaskDialogComponent implements  OnChanges  {
  @Input() taskSelected: TaskModel
  taskV:number
  taskVersions:TaskModel[]=[]
  @Output() close = new EventEmitter<any>();
  @Output() back = new EventEmitter<any>()
  @Output() editTask:EventEmitter<string> = new EventEmitter<string>()
  @Output() restoreVersion: EventEmitter<{ taskChanges: { [key: string]: any }, id: string }> = new EventEmitter<{ taskChanges: { [key: string]: any }, id: string }>()
  @Input() prevDialog:string

  constructor(public tasksService: TaskService, private lpDialogsService:LpDialogsService){}
  ngOnChanges(changes:SimpleChanges){
     if(changes.taskSelected && this.taskSelected){
      this.generateVersions()
      this.taskV = this.taskSelected.prevStates.length ;
     }
  }
  isLastVersion(){
   return this.taskV > (this.taskSelected.prevStates.length-1)
  }
  /////TODO: fix when come back to last version ///
  getVersion(taskBase,taskToMerge){
      return  OOService.mergeObjects(taskBase,taskToMerge);
  }
  generateVersions(){
      this.taskVersions = [];
      this.taskVersions.push(this.taskSelected)
      for (let i = this.taskSelected.prevStates.length; i >= 1; i--) {
        this.taskVersions.unshift(this.getVersion(this.taskVersions[0], this.taskSelected.prevStates[i - 1]))
      }
  }


  restore(){
    this.lpDialogsService.openConfirmDialog('THIS VERSION WILL REPLACE THE CURRENT ONE', 'Are you sure?').subscribe((res) => {
      if(res){
        this.restoreVersion.emit(this.checkChangesToPatch())
      }
    })
  }
  checkChangesToPatch() {
      let obj = OOService.getObjectDifferences(this.taskSelected, this.taskVersions[this.taskV]);
      return { taskChanges: obj, id: this.taskSelected._id }
  }
  versionIsDifferent(){
    return !OOService.areEquals(this.taskVersions[this.taskV], this.taskSelected)
  }
  propertyHasChanged(key:string){
    return this.taskVersions[this.taskV - 1] ? JSON.stringify(this.taskVersions[this.taskV - 1][key]) != JSON.stringify(this.taskVersions[this.taskV][key]) :false
  }

}
