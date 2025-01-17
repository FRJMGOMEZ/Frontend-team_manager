import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, empty } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { WebSocketsService } from './web-sockets.service';
import { MatDialog } from '@angular/material/dialog';
import { LpDialogsService } from 'lp-dialogs';
import { Task } from '../models/task.model';
import { AuthService } from './auth.service';
import { API_URL } from '../../config/api-url';
import { User } from '../models/user.model';
import { LpLocalStorage } from 'lp-operations';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskSrc: Subject<{ task: Task, action: string }> = new Subject<{ task: Task, action: string }>();
  public task$: Observable<{task:Task,action:string}> = this.taskSrc.asObservable();

  constructor(
    private http: HttpClient,
    private lpDialogsService: LpDialogsService,
    private wsService: WebSocketsService,
    private dialogRef: MatDialog,
    private authService:AuthService,
    ) { }

  postTask(task: Task) {
    let url = `${API_URL}task`;
    return this.http.post(url, task).pipe(
      map((res: any) => res.task ),
      tap((task: Task) => { this.lpDialogsService.openInfoDialog('SUCESFULLY CREATED', 'CREATION', task.name); this.taskSrc.next({task,action:'POST'}) }));
  }

  putTask(changes: { [key: string]: any }, id: string) {
    const url = `${API_URL}task/${id}`;
    return this.http.patch(url, {changes}).pipe(
      map((res: any) =>  res.task ),
      tap((task: Task) => { 
        const participantsIds = (task.participants as User[]).map(u=> u._id);
        if (((participantsIds as string[]).includes(this.authService.userOnline._id))){
          this.taskSrc.next({ task, action: 'PUT' });
          this.lpDialogsService.openInfoDialog('SUCESFULLY UPDATED', 'EDITION', task.name); 
        }else{
          this.lpDialogsService.openInfoDialog('YOU ARE OUT THE TASK', 'EDITION', task.name);
          this.taskSrc.next({ task, action: 'DELETE' });
          this.dialogRef.closeAll();
        }
      })
    );
  }

  toggleStatus(newStatus: string, taskId: string) {
    return this.http.put(`${API_URL}task-status`, { newStatus, taskId, frontTime: new Date().getTime() })
      .pipe(
        map((res: any) =>  res.task ),
        tap((task: Task) => {
          this.taskSrc.next({ task, action: 'PUT' });
          this.lpDialogsService.openInfoDialog('SUCESFULLY UPDATED', 'EDITION', task.name);
        })
      );
  }

  getTasks(selector: string,querysString?:string,skip:number=0,limit:number=99999999) {
    let url = `${API_URL}tasks/${selector}${querysString}`;
    let headers = new HttpHeaders({skip:skip.toString(),limit:limit.toString()});
    return this.http.get(url,{headers});
  }

  deleteTask(taskId: string) {
    let url = `${API_URL}task/${taskId}`;
    let backRequest = this.http.delete(url).pipe(
      map((res: any) => res.task ),
      tap((task: Task) => { this.lpDialogsService.openInfoDialog('SUCESFULLY DELETED', 'DELETION', task.name); this.taskSrc.next({task,action:'DELETE'}) }));

    return this.lpDialogsService.openConfirmDialog()
      .pipe(
        switchMap((res: any) =>  res ? backRequest : empty()));
  }

  getTaskById(id: string) {
    let url = `${API_URL}task-by-id/${id}`;
    return this.http.get(url).pipe(
      map((res: any) => { return res.task} )
    );
  }

  userIsPartOfTask(taskId:string,projectId:string):Observable<boolean>{
    return this.http.get(`${API_URL}user-in-task/${taskId}/${projectId}`).pipe(map((res:boolean)=> res))
  }
  getTaskFiles(taskId:string,skip:number,limit:number=30,title:string=""){
    return this.http.get(`${API_URL}task-files/${taskId}?skip=${skip}&limit=${limit}&title=${title}`).pipe(
      map((res:any)=> res.files));
  }
  userInTask(taskId:string){
    return new Promise((resolve,reject)=>{
      this.wsService.emit('user-in-task', { taskId: taskId }, (usersOnline: string[]) => {resolve(usersOnline);})
    });
  }
  userOutTask(taskId:string){
      this.wsService.emit('user-out-task',{taskId});
  }

  usersConnected(){
    return this.wsService.listen('users-in-task');
  }
  taskTimeStarted(task: Task) {
    if (task.startDate <= new Date().getTime()) {
      return true;
    }
    return false;
  }

  taskTimeEnded(task:Task){
    return task.endDate < new Date().getTime();
  }
  listenningTasksEvents() {
    this.wsService.listen('tasks-event').subscribe((res:{task:Task, method:string}) => {
          const {method } = res;
          const task= res.task;
          const participantsIds = (task.participants as User[]).map(u => u._id);
          switch (method) {
            case 'POST':
              if ((participantsIds as string[]).includes(this.authService.userOnline._id)) {
                this.taskSrc.next({ task, action: 'POST' });
              }
              break;
            case 'PUT':
              if ((participantsIds as string[]).includes(this.authService.userOnline._id) ) {
                if (task.prevStates[task.prevStates.length - 1].changes['participants'] && !task.prevStates[task.prevStates.length - 1].changes['participants'].map((p)=>{ return p._id}).includes(this.authService.userOnline._id)) {
                  this.taskSrc.next({ task, action: 'POST' });
                } else {
                  this.taskSrc.next({ task, action: 'PUT' });
                }
              } else {
                 this.taskSrc.next({ task, action: 'DELETE' });
              }
              break;
            case 'DELETE':
              if ((participantsIds as string[]).includes(this.authService.userOnline._id)) {
                this.taskSrc.next({ task, action: 'DELETE' });
              }
              break;
            case 'STATUS CHANGE':
              if ((participantsIds as string[]).includes(this.authService.userOnline._id)) {
                this.taskSrc.next({ task, action: 'PUT' });
              }
            break;  
          }
      let taskOnScreen = LpLocalStorage.get('state-data', 'task-on-screen');
          if ((method === 'PUT' || method === 'DELETE') && taskOnScreen === task._id) {
            this.dialogRef.closeAll();
          }
    })
  }

  canBeEdited(task:Task){
    return !(task.status === 'done' || task.status === 'on review');
  }
}
