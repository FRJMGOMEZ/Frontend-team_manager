import { Component, EventEmitter, Input, OnInit, Output, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Task } from '../../../../core/models/task.model';

@Component({
  selector: 'app-task-manager-list',
  templateUrl: './task-manager-list.component.html',
  styleUrls: ['./task-manager-list.component.scss']
})
export class TaskManagerListComponent implements OnInit {

  @ViewChild('paginator') paginator : MatPaginator
  pageSize:number = 5;
  @Input() taskTotal:number = 0
  @Input() taskFrom:number = 0;
  @Input() taskSelected:string;
  @Input() tasksList:Task[] = [];
  @Output() selectTask = new EventEmitter<string>();
  @Output() getItems = new EventEmitter<number>();
  displayedColumns: string[] = ['name', 'end date', 'status', 'priority', 'options'];
  constructor() { }
  ngOnInit(): void {}
  paginatorChange(event){
    console.log({event})
    this.getItems.emit(this.pageSize * event.pageIndex  )
  }
  ngOnChanges(changes:SimpleChanges){
       if(changes.taskTotal && this.taskTotal != null){
          this.paginator ? this.paginator.pageIndex = 0 : null;
       }
  }

}



