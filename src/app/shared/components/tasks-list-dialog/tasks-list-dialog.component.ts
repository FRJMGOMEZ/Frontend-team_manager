import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/providers/task.service';

@Component({
  selector: 'app-tasks-list-dialog',
  templateUrl: './tasks-list-dialog.component.html',
  styleUrls: ['./tasks-list-dialog.component.scss']
})
export class TasksListDialogComponent  {

  dataSource = new MatTableDataSource<Task>([])
  @Input()tasks:Task[]
  @Output() close = new EventEmitter<void>()
  @Output() checkDetails:EventEmitter<string> = new EventEmitter<string>()
  @Output() editTask:EventEmitter<string> = new EventEmitter<string>()
  @Output() deleteTask:EventEmitter<string> = new EventEmitter<string>()
  @Output() back:EventEmitter<void> = new EventEmitter<void>()
  displayedColumns: string[] = ['name', 'time', 'opt'];
  @Input() prevDialog:string
  constructor(public taskService:TaskService) { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.tasks && this.tasks){
      this.dataSource.data = this.tasks;
    }
  }
}
