import { Component, ChangeDetectorRef,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../../../core/providers/task.service';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { Task } from '../../../core/models/task.model';
import { OOService } from '../../../library/providers/objects-operations.service';

@Component({
  selector: 'app-task-detail-smart',
  template: `<app-task-detail [isDialog]="false" [taskSelected]="taskSelected" (restoreVersion)="restoreVersion($event)" > </app-task-detail>`,
  
})
export class TaskDetailSmartComponent  {

  tasksSubscription: Subscription;
  @Input() taskSelected: Task
  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService) { }

  restoreVersion(data: { taskChanges: { [key: string]: any }, id: string }) {
    let taskChanges = OOService.copyObject(data.taskChanges);
    data.taskChanges.user = this.authService.userOnline._id;
    data.taskChanges.participants ? data.taskChanges.participants = data.taskChanges.participants.map((p: any) => { return p._id }) : null;
    this.taskService.putTask(data.taskChanges, data.id).subscribe((taskUpdated: Task) => {
      this.taskSelected = OOService.mergeObjects(taskUpdated, taskChanges);
      this.cdr.detectChanges();
    })
  }

}
