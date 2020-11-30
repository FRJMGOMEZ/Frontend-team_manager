import { Injectable } from '@angular/core';
import {  TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { Subject, Observable, empty } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { GDService } from '../../library/components/global-dialogs/global-dialogs.service';
import { WebSocketsService } from './web-sockets.service';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { ProjectService } from './project.service';
import { Project } from '../models/project.model';
import { NotificationModel } from '../models/notification.model';
import { User } from '../models/user.model';
import { NotificationService } from './notification.service';
import { LpErrorHandlerService } from '../../library/providers/lp-error-handler.service';
import { LpSnackbarNotificationsService } from '../../library/providers/lp-snackbar-notifications.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskSrc: Subject<{ task: TaskModel, action: string }> = new Subject<{ task: TaskModel, action: string }>();
  public task$: Observable<{task:TaskModel,action:string}> = this.taskSrc.asObservable();

  constructor(
    private http: HttpClient,
    private errorHandlerService: LpErrorHandlerService,
    private gdService: GDService,
    private wsService: WebSocketsService,
    private plSnackbarNotificationsService:LpSnackbarNotificationsService,
    private dialogRef: MatDialog,
    private localStorageService:LocalStorageService,
    private authService:AuthService,
    private notificationService:NotificationService,
    private projectService:ProjectService) { }

  postTask(task: TaskModel) {
    let url = `${URL_SERVICES}task`;
    return this.http.post(url, task).pipe(
      map((res: any) => { return res.task }),
      tap((task: TaskModel) => { this.gdService.openInfoDialog('SUCESFULLY CREATED', 'CREATION', task.name); this.taskSrc.next({task,action:'POST'}) }),
      catchError((err) => {  this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }))
  }

  putTask(task: { [key: string]: any }, id: string) {
    const url = `${URL_SERVICES}task/${id}`;
    return this.http.patch(url, task).pipe(
      map((res: any) => { return res.task }),
      tap((task: TaskModel) => { 
        if(((task.participants as string[]).includes(this.authService.userOnline._id)) || this.projectService.isUserAdm(this.authService.userOnline._id,task.project as string) ){
          this.taskSrc.next({ task, action: 'PUT' }) 
          this.gdService.openInfoDialog('SUCESFULLY UPDATED', 'EDITION', task.name); 
        }else{
          this.gdService.openInfoDialog('YOU ARE OUT THE TASK', 'EDITION', task.name); this.taskSrc.next({ task, action: 'DELETE' }) 
          this.dialogRef.closeAll();
        }
      }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) })
    )
  }

  getTasks(selector: string, querysString?:string) {
    let url = `${URL_SERVICES}tasks/${selector}${querysString}`
    return this.http.get(url).pipe(
      map((res: any) => { return res.tasks }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }))
  }

  deleteTask(taskId: string) {
    let url = `${URL_SERVICES}task/${taskId}`;
    let backRequest = this.http.delete(url).pipe(
      map((res: any) => { return res.task }),
      tap((task: TaskModel) => { this.gdService.openInfoDialog('SUCESFULLY DELETED', 'DELETION', task.name); this.taskSrc.next({task,action:'DELETE'}) }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }));

    return this.gdService.openConfirmDialog()
      .pipe(
        switchMap((res: any) => {
          return res ? backRequest : empty()
        }))
  }

  getTaskById(id: string) {
    let url = `${URL_SERVICES}task-by-id/${id}`;
    return this.http.get(url).pipe(
      map((res: any) => { return res.task }),
      catchError((err) => { this.gdService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) })
    )
  }
  userInTask(taskId:string){
   this.wsService.emit('user-in-task',{taskId:taskId})
  }
  editionBanned(task: TaskModel) {
    let today = new Date();
    if (task.startDate < new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime()) {
      task.editable = false;
      return true
    }
    task.editable = true;
    return false
  }
  listenningTaskSockets() {
    this.wsService.listen('tasks-change').subscribe((notification:NotificationModel) => {
        this.notificationService.toggleNotification(notification._id,true).subscribe(()=>{
          const { userFrom, method } = notification;
          const task= notification.item;
          const taskOld = notification.oldItem;
          const user = userFrom as User;
          console.log({taskOld})
          switch (method) {
            case 'POST':
              if ((task.participants as string[]).includes(this.authService.userOnline._id) || this.projectService.isUserAdm(this.authService.userOnline._id, task.project as string)) {
                this.taskSrc.next({ task, action: 'POST' })
                this.plSnackbarNotificationsService.showSocketNotification('ADHESION', taskOld ? taskOld.name : task.name, 'task', user.name, (task.project as Project).name)
              }
              break;
            case 'PUT':
              if ((task.participants as string[]).includes(this.authService.userOnline._id) || this.projectService.isUserAdm(this.authService.userOnline._id, task.project as string)) {
                if (!(taskOld.participants as string[]).includes(this.authService.userOnline._id) && !this.projectService.isUserAdm(this.authService.userOnline._id, task.project as string)) {
                  this.taskSrc.next({ task, action: 'POST' })
                  this.plSnackbarNotificationsService.showSocketNotification(method, task.name, 'project', user.name, (task.project as Project).name)
                } else {
                  this.taskSrc.next({ task, action: 'PUT' })
                  this.plSnackbarNotificationsService.showSocketNotification(method, task.name, 'project', user.name, (task.project as Project).name)
                }
              } else {
                if ((taskOld.participants as string[]).includes(this.authService.userOnline._id)) {
                  this.taskSrc.next({ task, action: 'DELETE' })
                  this.plSnackbarNotificationsService.showSocketNotification('REMOVAL', task.name, 'project', user.name, (task.project as Project).name)
                }
              }
              break;
            case 'DELETE':
              if ((task.participants as string[]).includes(this.authService.userOnline._id) || this.projectService.isUserAdm(this.authService.userOnline._id, task.project as string)) {
                this.taskSrc.next({ task, action: 'DELETE' })
                this.plSnackbarNotificationsService.showSocketNotification('DELETE', task.name, 'project', user.name, (task.project as Project).name)
              }
              break;
          }
          let taskOnScreen = this.localStorageService.get('state-data', 'task-on-screen');
          if ((method === 'PUT' || method === 'DELETE') && taskOnScreen === task._id) {
            this.dialogRef.closeAll();
          }
        })
    })
  }
}
