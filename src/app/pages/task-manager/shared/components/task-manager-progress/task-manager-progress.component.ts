import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { TaskModel } from '../../../../../shared/models/task.model';

@Component({
  selector: 'app-task-manager-progress',
  templateUrl: './task-manager-progress.component.html',
  styleUrls: ['./task-manager-progress.component.scss']
})
export class TaskManagerProgressComponent implements OnChanges {

  timelineProgress = 0;
  @Input() taskSelected:TaskModel
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.taskSelected && this.taskSelected){
      this.timelineProgress = new Date().getTime() > this.taskSelected.startDate ? Math.round(((new Date().getTime() - this.taskSelected.startDate) * 100) /(this.taskSelected.endDate - this.taskSelected.startDate)) : 0;
    }
  }

}
