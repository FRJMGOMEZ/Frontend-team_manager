import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { TaskService } from '../../providers/task.service';

@Component({
    selector: 'app-task-dialog-smart',
    template: `
    
    <app-task-dialog [taskSelected]="taskSelected" (close)="closeDialog($event)" (back)="back()" [prevDialog]="prevDialog" (editTask)="editTask($event)" > </app-task-dialog>
    `

})
export class TaskDialogSmartComponent implements OnInit {

    tasksSubscription:Subscription;
    taskSelected:TaskModel
    date:number
    prevDialog:string
    constructor(private dialogRef: MatDialogRef<TaskDialogSmartComponent>,
                @Inject(MAT_DIALOG_DATA) private data,
                private taskService:TaskService,
                private localStorageService:LocalStorageService) { }

    ngOnInit(): void {
     
       this.taskService.getTaskById(this.data.taskId).subscribe((task:TaskModel)=>{
           this.localStorageService.set('state-data', this.data.taskId, 'task-on-screen')
         this.taskSelected = task;
       })
       this.date = this.data.date ? this.data.date : null;
       this.prevDialog = this.data.prevDialog;
    }

    editTask(taskId:string){
        this.dialogRef.close({ nextDialog:'editCreateTask', dataRequired:taskId})
    }

    back(){
        this.dialogRef.close({prevDialog:this.prevDialog})
    }
    closeDialog(date?){
        this.dialogRef.close(date? {date}:undefined)
        this.localStorageService.remove('state-data','task-on-screen')
    }

}
