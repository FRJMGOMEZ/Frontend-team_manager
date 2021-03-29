import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileModel } from '../../../../../../../../core/models/file.model';
import { Task } from '../../../../../../../../core/models/task.model';
import { FilesService } from '../../../../../../../../core/providers/files.service';
import { TaskService } from '../../../../../../../../core/providers/task.service';

@Component({
  selector: 'app-task-manager-files',
  templateUrl: './task-manager-files.component.html',
  styleUrls: ['./task-manager-files.component.scss']
})
export class TaskManagerFilesComponent implements OnChanges {
  from: number = 0;
  total: number = 0;
  files: FileModel[];
  filesCount: number;
  @Input() taskSelected:Task;
  fileSubscription:Subscription
  constructor(
    public filesService: FilesService,
    private taskService:TaskService
  ) { }

  ngOnInit(){
    this.fileSubscription = this.filesService.file$.subscribe((data:{order:string,file:FileModel})=>{
        switch(data.order){
          case 'POST': this.files.push(data.file);
          break;
          case 'DELETE': this.files = this.files.filter((f)=>{ return f._id != data.file._id })
          break;
        }
    })
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes.taskSelected && this.taskSelected){
      /// FIXME: hacer todo lo del scroll 
      this.taskService.getTaskFiles(this.taskSelected._id, 0, 100).subscribe((files: FileModel[]) => {
        this.files = files;
      })
    }
  }
  deleteFile(file: FileModel) {
    this.filesService.deleteFile(file).subscribe((fileDeleted: FileModel) => {
      if (fileDeleted) {
        this.files = this.files.filter((f) => { return f._id != fileDeleted._id });
        this.filesService.spreadFile(fileDeleted,'DELETE')
      }
    });
  }
  ngOnDestroy(){
  this.fileSubscription.unsubscribe();
  }
}
