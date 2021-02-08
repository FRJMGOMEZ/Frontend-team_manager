import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Task } from '../../../core/models/task.model';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { TaskService } from '../../../core/providers/task.service';
import { LpObject } from 'lp-operations';

@Component({
    selector: 'app-tasks-list-dialog-smart',
    template:`
        <app-tasks-list-dialog [prevDialog]="prevDialog" (close)="close()" (back)="back()" [tasks]="tasks" (editTask)="editTask($event)" (checkDetails)="checkDetails($event)" > </app-tasks-list-dialog>
    `

})
export class TasksListDialogSmartComponent implements OnInit {

    selectedProject:string
    selectedDate:Date
    tasks:Task[]=[]
    prevDialog:string
    constructor(
        private taskService:TaskService,
        private dialogRef: MatDialogRef<TasksListDialogSmartComponent>,
        private localStorageService:LocalStorageService,
        @Inject(MAT_DIALOG_DATA) private data) { }

    ngOnInit(): void {
        this.selectedDate = this.localStorageService.get('state-data','date-selected');
        this.selectedDate = this.selectedDate ? new Date(this.selectedDate):undefined;
        this.prevDialog = this.data.prevDialog;
        this.selectedProject = this.localStorageService.get('state-data','project') 
        this.getTasks(new Date(this.data.date));
    }
    getTasks(date){
        let timeRange = [date.getTime(), null]
        this.taskService.getTasks('day', LpObject.toQueryString({ project: this.selectedProject, from: timeRange[0], to: timeRange[1] })).pipe(map((res: any) => { return res.tasks })).subscribe((tasks:Task[])=>{
            this.tasks = tasks; 
        })
    }
    checkDetails(taskId:string){
        this.dialogRef.close({ nextDialog:'taskInfo',taskId})
    }
    editTask(taskId:string){
        this.dialogRef.close({ nextDialog: 'editCreateTask', taskId })
    }
    close(id?:string,action?:string){
        this.dialogRef.close( id && action ? {id,action}:undefined)
    }
    back(){
        this.dialogRef.close({prevDialog:this.prevDialog})
    }

}