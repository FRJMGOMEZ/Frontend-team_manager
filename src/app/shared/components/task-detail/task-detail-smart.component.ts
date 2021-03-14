import { Component, ChangeDetectorRef,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../../../core/providers/task.service';
import { AuthService } from '../../../core/providers/auth.service';
import { Task } from '../../../core/models/task.model';
import { LpObject } from 'lp-operations';
import { DialogsService } from '../../../core/providers/dialogs.service';
@Component({
  selector: 'app-task-detail-smart',
  template: `
    <app-task-detail [taskSelected]="taskSelected" (restoreVersion)="restoreVersion($event)" [date]="date" (editTask)="editTask($event)" > </app-task-detail>
 `
})
export class TaskDetailSmartComponent  {

  tasksSubscription: Subscription;
  @Input() taskSelected: Task;
  @Input() date:number = new Date().getTime();
  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private dialogsService:DialogsService) { }

  restoreVersion(data: { taskChanges: { [key: string]: any }, id: string }) {
    let taskChanges = LpObject.copyObject(data.taskChanges);
    data.taskChanges.user = this.authService.userOnline._id;
    data.taskChanges.participants ? data.taskChanges.participants = data.taskChanges.participants.map((p: any) => { return p._id }) : null;
    this.taskService.putTask(data.taskChanges, data.id).subscribe((taskUpdated: Task) => {
      this.taskSelected = LpObject.mergeObjects(taskUpdated, taskChanges);
      this.cdr.detectChanges();
    })
  }

  editTask(taskId: string) {
     this.dialogsService.openEditCreateTaskDialog(taskId)
  }

}
