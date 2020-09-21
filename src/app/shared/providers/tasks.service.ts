import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private taskSrc: Subject<{ task: Task, order: string }> = new Subject<{ task: Task, order: string }>();

  task$: Observable<{ task: Task, order: string }> = this.taskSrc.asObservable();

  constructor(private http: HttpClient, private errorHandlerService:ErrorHandlerService) { }

  //////// TASKS CRUD LOGIC ////////
  getTasksByProject(projectId: string) {
    let url = `${URL_SERVICES}tasksByProject/${projectId}`
    return this.http.get(url).pipe(map((res: any) => {
      return res.tasks;
    }),
      catchError(this.errorHandlerService.handleError))
  }
  postTask(task: Task) {
    let url = `${URL_SERVICES}task`
    return this.http.post(url, task).pipe(
      tap((res:any)=>{ this.taskSrc.next({ task : res.task, order:'post'}) }),
      catchError(this.errorHandlerService.handleError))
  }

  markTaskAsChecked(taskId: string) {
    let url = `${URL_SERVICES}checkTask/${taskId}`
    return this.http.put(url, {}).pipe(
      tap((res:any) => {this.taskSrc.next({ task: res.task, order: 'put' })}),
      catchError(this.errorHandlerService.handleError)
    )
  }

  putTask(taskId: string, task: Task) {
    let url = `${URL_SERVICES}task/${taskId}`;
    return this.http.put(url, task).pipe(
      tap((res: any) => { this.taskSrc.next({ task: res.task, order: 'put' })}),
      catchError(this.errorHandlerService.handleError)
      )
  }

  toggleTaskStat(taskId: string) {
    let url = `${URL_SERVICES}toggleTaskStatus/${taskId}`
    return this.http.put(url, {}).pipe(
      tap((res: any) => { this.taskSrc.next({ task: res.task, order: 'put' }) }),
      catchError(this.errorHandlerService.handleError)
    )
  }

    deleteTask(taskId: string) {
     let url = `${URL_SERVICES}task/${taskId}`
     return this.http.delete(url).pipe(
       tap((res: any) => { this.taskSrc.next({ task: res.task, order: 'delete' }) }),
       catchError(this.errorHandlerService.handleError)
     )
   } 

    getTasksByUser(projectId:string,input: string) {
     let url = `${URL_SERVICES}tasks-by-user/${projectId}/${input}`
     return this.http.get(url).pipe(map((res: any) => {
           return res.tasks
     }))
   }

  /* 
 */
  

  ////// TASK SOCKET LOGIC ///////
  /*  emitTask(taskOrder) {
     let payload = { taskOrder, room: this._projectServices.projectSelectedId }
     this.socket.emit('task', payload)
   } */

  /* taskSocket() {
    return this.socket.fromEvent('task').pipe(map((taskOrder: TaskOrder) => {
      if (taskOrder && taskOrder.order === 'post') {
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          this.taskChecked(taskOrder.task._id).subscribe(() => {
            taskOrder.task.checked = true;
            this._projectServices.myTasks.push(taskOrder.task)
          })
        } else {
          this._projectServices.groupTasks.push(taskOrder.task)
        }
        this._projectServices.groupTasks = _.sortBy(this._projectServices.groupTasks, (task) => {
          return task.dateLimit
        })
        this._projectServices.myTasks = _.sortBy(this._projectServices.myTasks, (task) => {
          return task.dateLimit
        })
      } else if (taskOrder.order === 'put') {
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          this._projectServices.myTasks.forEach((task, index) => {
            if (task._id === taskOrder.task._id) {
              this._projectServices.myTasks[index] = taskOrder.task;
            }
          })
        } else {
          this._projectServices.groupTasks.forEach((task, index) => {
            if (task._id === taskOrder.task._id) {
              this._projectServices.groupTasks[index] = taskOrder.task;
            }
          })
        }
      } else if (taskOrder.order === 'delete') {
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          this._projectServices.myTasks = this._projectServices.myTasks.filter((task) => { return task._id != taskOrder.task._id })
        } else {
          this._projectServices.groupTasks = this._projectServices.groupTasks.filter((task) => { return task._id != taskOrder.task._id })
        }
      }

      if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
        this._projectServices.myTasks = _.sortBy(this._projectServices.myTasks, (task) => {
          return task.dateLimit
        })
      } else {
        this._projectServices.groupTasks = _.sortBy(this._projectServices.groupTasks, (task) => {
          return task.dateLimit
        })
      }
    }))
  } */
}
