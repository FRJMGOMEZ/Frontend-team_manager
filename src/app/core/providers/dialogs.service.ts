import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../models/project.model';
import { TaskDialogSmartComponent } from '../../shared/components/task-detail/task-dialog-detail-smart.component';
import { TasksListDialogSmartComponent } from '../../shared/components/tasks-list-dialog/tasks-list-dialog-smart.component';
import { TaskDialogEditionAndCreationSmartComponent } from '../../shared/components/task-edition-and-creation/task-dialog-edition-and-creation-smart.component';
import { ProjectEditionAndCreationSmartComponent } from '../../shared/components/project-edition-and-creation/project-editon-and-creation-smart-component';
import { ActionsRequiredSmartDialogComponent } from '../../shared/components/actions-required/actions-required-smart-dialog.component';
import { ActionRequired } from '../models/action-required';
import { NotificationsFilterSmartDialogComponent } from '../../pages/home/pages/notifications-list/components/notifications-filter/notifications-filter-smart-dialog.component';
import { ProjectsDialogComponent } from '../components/projects/projects-dialog/projects-dialog.component';
import { merge } from 'rxjs';
import { User } from '../models/user.model';
import { UserInfoSmartDialogComponent } from '../../shared/components/user-info/user-info-smart-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  taskId:string;
  tasksDate:number;
  constructor(private dialog: MatDialog) { }

  openTaskInfoDialog(taskId:string,prevDialog?:string){
    this.taskId = taskId;
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.width = '500px';
    dialog.maxHeight = '900px';
    dialog.data = prevDialog ? {taskId,prevDialog} : {taskId}
    let dialogRef: MatDialogRef<any> = this.dialog.open(TaskDialogSmartComponent, dialog)
    let subs = dialogRef.afterClosed().subscribe((data)=>{
      if (data) {
        if (data.prevDialog) {
          this.checkPrevDialog(data.prevDialog)
        }else if(data.nextDialog){
          this.checkNextDialog(data.nextDialog,data.dataRequired,'taskInfo')
        }
      }
      subs.unsubscribe()
    })
  }

  openTasksListInfoDialog(date:number, prevDialog?:string){
    this.tasksDate = date;
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = prevDialog ? { date, prevDialog }: {date};
    dialog.width = '500px';
    let dialogRef: MatDialogRef<any> = this.dialog.open(TasksListDialogSmartComponent, dialog)
    let subs = dialogRef.afterClosed().subscribe((data)=>{
      if(data){
          if(data.prevDialog){
            this.checkPrevDialog(data.prevDialog)
          }else if(data.nextDialog){
             this.checkNextDialog(data.nextDialog,data.taskId,'tasksList')
          }
      }
      subs.unsubscribe()
    })
  }

  openEditCreateTaskDialog(taskId?: string, prevDialog?: string) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.maxHeight= '900px';
    dialog.width = '500px';
    dialog.data = taskId ? prevDialog ? {taskId,prevDialog}: {taskId} : null;
    let dialogRef = this.dialog.open(TaskDialogEditionAndCreationSmartComponent, dialog);
    let subs = dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        if (data.prevDialog) {
          this.checkPrevDialog(data.prevDialog)
        } else if (data.nextDialog) {
          this.checkNextDialog(data.nextDialog, data.taskId, 'editCreateTask')
        }
      }
      subs.unsubscribe()
    })
  }
  openEditProjectDialog(project: Project) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = { project };
    dialog.width = '500px';
    this.dialog.open(ProjectEditionAndCreationSmartComponent, dialog);
  }

  openPostProjectDialog() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.width = '500px';
    this.dialog.open(ProjectEditionAndCreationSmartComponent, dialog);
  }

  checkPrevDialog(prevDialog: string) {
    switch (prevDialog) {
      case 'tasksList': this.openTasksListInfoDialog(this.tasksDate)
        break;
      case 'taskInfo': this.openTaskInfoDialog(this.taskId);
        break;
      case 'editCreateTask': this.openEditCreateTaskDialog(this.taskId);
        break;
    }
  }
  checkNextDialog(nextDialog: string, dataRequired: any, prevDialog: string) {
    switch (nextDialog) {
      case 'tasksList': typeof dataRequired === 'number' ? this.openTasksListInfoDialog(dataRequired, prevDialog) : null
        break;
      case 'taskInfo': typeof dataRequired === 'string' ? this.openTaskInfoDialog(dataRequired, prevDialog) : null
        break;
      case 'editCreateTask': typeof dataRequired === 'string' ? this.openEditCreateTaskDialog(dataRequired, prevDialog) : null;
        break;
    }
  }

  showActionsRequired(actionsRequired:ActionRequired[]){
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.maxHeight = '500px';
    dialog.width = '650px';
    dialog.data = { actionsRequired};
    let dialogRef: MatDialogRef<any> = this.dialog.open(ActionsRequiredSmartDialogComponent, dialog);
    return dialogRef.componentInstance.onActionResolved;
  }


  openNotificationsFilters(queryString:string){
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.maxHeight = '100vh';
    dialog.width = '250px';
    dialog.data = {queryString};
    let dialogRef: MatDialogRef<any> = this.dialog.open(NotificationsFilterSmartDialogComponent, dialog);
    return dialogRef.componentInstance.getNotifications;
  }  

  openProjectList(projects?:Project[]){
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.maxHeight = '100vh';
    dialog.maxWidth = '1000px';
    dialog.data = {projects};
    let dialogRef: MatDialogRef<any> = this.dialog.open(ProjectsDialogComponent, dialog);
    return merge(dialogRef.componentInstance.putProject, dialogRef.componentInstance.deleteProject, dialogRef.componentInstance.selectProject);
  }

  openUserInfo(user:User){
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.data = {user};
    let dialogRef: MatDialogRef<any> = this.dialog.open(UserInfoSmartDialogComponent, dialog);
  }
}
