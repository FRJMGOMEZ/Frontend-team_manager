import { Component,Input, Output, EventEmitter} from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../providers/task.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent  {

  @Input() taskSelected: TaskModel

  @Output() close = new EventEmitter<any>();

  @Output() back = new EventEmitter<any>()

  @Output() editTask:EventEmitter<string> = new EventEmitter<string>()

  @Input() prevDialog:string

  constructor(public tasksService:TaskService){}

}
