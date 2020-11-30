import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { TaskService } from '../../providers/task.service';
import { OOService } from '../../../library/providers/objects-operations.service';
import { AuthService } from '../../../auth/shared/providers/auth.service';

@Component({
    selector: 'app-task-dialog-smart',
    template: `<app-task-dialog [taskSelected]="taskSelected" (close)="closeDialog($event)" (back)="back()" [prevDialog]="prevDialog" (editTask)="editTask($event)" (restoreVersion)="restoreVersion($event)" > </app-task-dialog>`
})
export class TaskDialogSmartComponent implements OnInit {

    tasksSubscription: Subscription;
    taskSelected: TaskModel
    date: number
    prevDialog: string
    constructor(
        private dialogRef: MatDialogRef<TaskDialogSmartComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private taskService: TaskService,
        private localStorageService: LocalStorageService,
        private cdr: ChangeDetectorRef,
        private authService: AuthService) { }

    ngOnInit(): void {

        this.taskService.getTaskById(this.data.taskId).subscribe((task: TaskModel) => {
            this.localStorageService.set('state-data', this.data.taskId, 'task-on-screen')
            this.taskSelected = task;
        })
        this.date = this.data.date ? this.data.date : null;
        this.prevDialog = this.data.prevDialog;
    }

    editTask(taskId: string) {
        this.dialogRef.close({ nextDialog: 'editCreateTask', dataRequired: taskId })
    }

    restoreVersion(data: { taskChanges: { [key: string]: any }, id: string }) {
        let taskChanges = OOService.copyObject(data.taskChanges);
        data.taskChanges.user = this.authService.userOnline._id;
        data.taskChanges.participants ? data.taskChanges.participants = data.taskChanges.participants.map((p: any) => { return p._id }) : null;
        this.taskService.putTask(data.taskChanges, data.id).subscribe((taskUpdated: TaskModel) => {
            this.taskSelected = OOService.mergeObjects(taskUpdated, taskChanges);
            this.cdr.detectChanges();
        })
    }

    back() {
        this.dialogRef.close({ prevDialog: this.prevDialog })
    }
    closeDialog(date?) {
        this.dialogRef.close(date ? { date } : undefined)
        this.localStorageService.remove('state-data', 'task-on-screen')
    }

}
