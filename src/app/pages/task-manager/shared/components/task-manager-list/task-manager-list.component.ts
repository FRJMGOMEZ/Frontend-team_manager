import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-manager-list',
  templateUrl: './task-manager-list.component.html',
  styleUrls: ['./task-manager-list.component.scss']
})
export class TaskManagerListComponent implements OnInit {
  @Input()taskSelected:string;
  displayedColumns: string[] = ['name','end date','status','priority','options'];
  @Input() dataSource = [];
  @Output() selectTask = new EventEmitter<string>()
  constructor() { }
  ngOnInit(): void {}

}



