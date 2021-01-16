import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, empty } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { WebSocketsService } from './web-sockets.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from './project.service';
import { NotificationService } from './notification.service';
import { LpDialogsService } from 'lp-dialogs';
import { TaskModel } from '../../models/task.model';
import { LpErrorHandlerService } from '../../../library/providers/lp-error-handler.service';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { AuthService } from '../auth/shared/providers/auth.service';
import { NotificationModel } from '../../models/notification.model';
import { API_URL } from '../../../config/api-url';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskSrc: Subject<{ task: TaskModel, action: string }> = new Subject<{ task: TaskModel, action: string }>();
  public task$: Observable<{task:TaskModel,action:string}> = this.taskSrc.asObservable();

  constructor(
    private http: HttpClient,
    private errorHandlerService: LpErrorHandlerService,
    private lpDialogsService: LpDialogsService,
    private wsService: WebSocketsService,
    private dialogRef: MatDialog,
    private localStorageService:LocalStorageService,
    private authService:AuthService,
    private notificationService:NotificationService,
    private projectService:ProjectService,
    private notificationsService:NotificationService) { }

  postTask(task: TaskModel) {
    let url = `${API_URL}task`;
    return this.http.post(url, task).pipe(
      map((res: any) => { return res.task }),
      tap((task: TaskModel) => { this.lpDialogsService.openInfoDialog('SUCESFULLY CREATED', 'CREATION', task.name); this.taskSrc.next({task,action:'POST'}) }),
      catchError((err) => {  this.lpDialogsService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }))
  }

  putTask(task: { [key: string]: any }, id: string) {
    const url = `${API_URL}task/${id}`;
    return this.http.patch(url, task).pipe(
      map((res: any) => { return res.task }),
      tap((task: TaskModel) => { 
        if(((task.participants as string[]).includes(this.authService.userOnline._id)) || this.projectService.isUserAdm(this.authService.userOnline._id,task.project as string) ){
          this.taskSrc.next({ task, action: 'PUT' }) 
          this.lpDialogsService.openInfoDialog('SUCESFULLY UPDATED', 'EDITION', task.name); 
        }else{
          this.lpDialogsService.openInfoDialog('YOU ARE OUT THE TASK', 'EDITION', task.name); this.taskSrc.next({ task, action: 'DELETE' }) 
          this.dialogRef.closeAll();
        }
      }),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err)})
    )
  }

  toggleStatus(newStatus:string,taskId:string){
    let request = this.http.put(`${API_URL}task-status`, { newStatus, taskId,frontTime:new Date().getTime()})
    .pipe(
     map((res: any) => { return res.task }),
     tap((task:TaskModel) => {
      this.taskSrc.next({ task, action: 'PUT' })
      this.lpDialogsService.openInfoDialog('SUCESFULLY UPDATED', 'EDITION', task.name);}))

    return this.lpDialogsService.openConfirmDialog('ARE YOU SURE?', `The task status will switch to "${newStatus}" status`).pipe(
      switchMap((res: boolean) => { return res ? request : empty()}),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err)}))
  }
  
  getTasks(selector: string,querysString?:string,skip:number=0,limit:number=99999999) {
    let url = `${API_URL}tasks/${selector}${querysString}`
    let headers = new HttpHeaders({skip:skip.toString(),limit:limit.toString()})
    return this.http.get(url,{headers}).pipe(
      catchError((err) => { return this.errorHandlerService.handleError(err) }))
  }

  deleteTask(taskId: string) {
    let url = `${API_URL}task/${taskId}`;
    let backRequest = this.http.delete(url).pipe(
      map((res: any) => { return res.task }),
      tap((task: TaskModel) => { this.lpDialogsService.openInfoDialog('SUCESFULLY DELETED', 'DELETION', task.name); this.taskSrc.next({task,action:'DELETE'}) }),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }));

    return this.lpDialogsService.openConfirmDialog()
      .pipe(
        switchMap((res: any) => {
          return res ? backRequest : empty()
        }))
  }

  getTaskById(id: string) {
    let url = `${API_URL}task-by-id/${id}`;
    return this.http.get(url).pipe(
      map((res: any) => { return res.task }),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) })
    )
  }
  getTaskFiles(taskId:string,skip:number,limit:number=30,title:string=""){
    return this.http.get(`${API_URL}task-files/${taskId}?skip=${skip}&limit=${limit}&title=${title}`).pipe(
      map((res:any)=>{ return res.files}),
      catchError((err) => { this.lpDialogsService.openInfoDialog(err.error.err.message, 'ERROR'); return this.errorHandlerService.handleError(err) }))
  }
  userInTask(taskId:string){
    return new Promise((resolve,reject)=>{
      this.wsService.emit('user-in-task', { taskId: taskId }, (usersOnline: string[]) => {
        resolve(usersOnline);
      })
    })
  }
  userOutTask(taskId:string){
      this.wsService.emit('user-out-task',{taskId})
  }

  usersConnected(){
    return this.wsService.listen('users-in-task').pipe(tap(console.log))
  }
  taskTimeStarted(task: TaskModel) {
    if (task.startDate <= new Date().getTime()) {
      task.editable = false;
      return true
    }
    task.editable = true;
    return false
  }
  listenningTasksEvents() {
    this.wsService.listen('tasks-event').subscribe((notification:NotificationModel) => {
        this.notificationService.toggleNotification(notification._id).subscribe(()=>{
          const {method } = notification;
          const task= notification.item;
          const taskOld = notification.oldItem;
          let sendSnackNot = false;
          switch (method) {
            case 'POST':
              if ((task.participants as string[]).includes(this.authService.userOnline._id)) {
                this.taskSrc.next({ task, action: 'POST' });
                sendSnackNot = true;
              }
              break;
            case 'PUT':
              if ((task.participants as string[]).includes(this.authService.userOnline._id) ) {
                if (!(taskOld.participants as string[]).includes(this.authService.userOnline._id)) {
                  console.log('was a post')
                  this.taskSrc.next({ task, action: 'POST' });
                  sendSnackNot = true;
                } else {
                  this.taskSrc.next({ task, action: 'PUT' });
                  sendSnackNot = true;
                }
              } else {
                if ((taskOld.participants as string[]).includes(this.authService.userOnline._id)) {
                  this.taskSrc.next({ task, action: 'DELETE' });
                  sendSnackNot = true;
                }
              }
              break;
            case 'DELETE':
              if ((task.participants as string[]).includes(this.authService.userOnline._id)) {
                this.taskSrc.next({ task, action: 'DELETE' })
                sendSnackNot = true;
              }
              break;
            case 'STATUS CHANGE':
              if ((task.participants as string[]).includes(this.authService.userOnline._id)) {
                this.taskSrc.next({ task, action: 'PUT' })
                sendSnackNot = true;
              }
            break;  
          }
          sendSnackNot ? this.notificationsService.addSnackNotificaction(notification) : null;
          let taskOnScreen = this.localStorageService.get('state-data', 'task-on-screen');
          if ((method === 'PUT' || method === 'DELETE') && taskOnScreen === task._id) {
            this.dialogRef.closeAll();
          }
        })
    })
  }
}
