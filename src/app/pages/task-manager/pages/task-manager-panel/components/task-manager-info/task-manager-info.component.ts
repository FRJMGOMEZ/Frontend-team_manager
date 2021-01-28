import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../../../../core/models/task.model';
import { TaskService } from '../../../../../../core/providers/task.service';

@Component({
  selector: 'app-task-manager-info',
  templateUrl: './task-manager-info.component.html',
  styleUrls: ['./task-manager-info.component.scss']
})
export class TaskManagerInfoComponent implements OnInit {

  @Input() taskSelected:Task
  @Output() deleteTask = new EventEmitter<void>();
  @Output() toggleStatus = new EventEmitter<void>();
  @Output() editTask = new EventEmitter<void>();
  constructor(public taskService:TaskService) { }
  ngOnInit(): void {}

  ngOnChanges(){
  }

}
