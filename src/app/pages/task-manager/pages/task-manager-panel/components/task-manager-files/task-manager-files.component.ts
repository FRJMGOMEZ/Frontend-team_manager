import { Component, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FileModel } from '../../../../../../core/models/file.model';
import { Task } from '../../../../../../core/models/task.model';

@Component({
  selector: 'app-task-manager-files',
  templateUrl: './task-manager-files.component.html',
  styleUrls: ['./task-manager-files.component.scss']
})
export class TaskManagerFilesComponent implements OnChanges {
  from: number = 0;
  total: number = 0;
  @Input() files: FileModel[];
  @Input() filesCount: number;
  @Input() taskSelected:Task
  @Output() getFiles = new EventEmitter<{ from: number, title: string }>()
  @Output() deleteFile = new EventEmitter<FileModel>();
  @Output() downloadFile = new EventEmitter<{src:string,file:FileModel}>();
  constructor() { }
  ngOnChanges(changes:SimpleChanges){
    if(changes.taskSelected && this.taskSelected){
      this.getFiles.emit({ from: this.from, title: '' })
    }
  }
}
