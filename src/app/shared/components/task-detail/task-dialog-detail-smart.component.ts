import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/providers/task.service';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { LpObject, LpLocalStorage } from 'lp-operations';

@Component({
    selector: 'app-task-dialog-smart',
    template: `
    <mat-dialog-content>
     <app-task-detail [taskSelected]="taskSelected"  (back)="back()" [prevDialog]="prevDialog" (editTask)="editTask($event)" (restoreVersion)="restoreVersion($event)" [date]="date" > </app-task-detail>
    </mat-dialog-content>
    <mat-dialog-actions fxLayoutAlign="center">
    <button (click)="closeDialog()" mat-raised-button> Close </button>
    </mat-dialog-actions>
    `,
    styles:[
        `
        mat-dialog-content{
            margin-bottom:0px !important;
            max-height:100vh!important;
        }
        `
    ]
    
})
export class TaskDialogSmartComponent implements OnInit {

    taskSelected: Task
    date: number = new Date().getTime();
    prevDialog: string
    constructor(
        private dialogRef: MatDialogRef<TaskDialogSmartComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private taskService: TaskService,
        private cdr: ChangeDetectorRef,
        private authService: AuthService) { }

    ngOnInit(): void {
        this.taskService.getTaskById(this.data.taskId).subscribe((task: Task) => {
            LpLocalStorage.set('state-data', this.data.taskId, 'task-on-screen')
            this.taskSelected = task;
        })
        this.prevDialog = this.data.prevDialog;
    }

    editTask(taskId: string) {
        this.dialogRef.close({ nextDialog: 'editCreateTask', dataRequired: taskId })
    }

    restoreVersion(data: { taskChanges: { [key: string]: any }, id: string }) {
        let taskChanges = LpObject.copyObject(data.taskChanges);
        data.taskChanges.user = this.authService.userOnline._id;
        data.taskChanges.participants ? data.taskChanges.participants = data.taskChanges.participants.map((p: any) => { return p._id }) : null;
        this.taskService.putTask(data.taskChanges, data.id).subscribe((taskUpdated: Task) => {
            this.taskSelected = LpObject.mergeObjects(taskUpdated, taskChanges);
            this.cdr.detectChanges();
        })
    }

    back() {
        this.dialogRef.close({ prevDialog: this.prevDialog })
    }
    closeDialog(date?) {
        this.dialogRef.close(date ? { date } : undefined)
        LpLocalStorage.remove('state-data', 'task-on-screen')
    }

}
