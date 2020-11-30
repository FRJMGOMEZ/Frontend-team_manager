import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../../shared/models/user.model';
import { TaskModel } from '../../../../../shared/models/task.model';

@Component({
  selector: 'app-task-manager-panel',
  templateUrl: './task-manager-panel.component.html',
  styleUrls: ['./task-manager-panel.component.scss']
})
export class TaskManagerPanelComponent implements OnInit {

  @Input() taskSelected:TaskModel;
  constructor() { }
  ngOnInit(): void {
  }

}
