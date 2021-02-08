import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of, Observable, Subject } from 'rxjs';
import { ProjectService } from './project.service';
import { tap, map} from 'rxjs/operators';
import { NotificationModel } from '../models/notification.model';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { SnackbarNotificationsService } from './snackbar-notifications.service';
import { API_URL } from '../../config/api-url';
import { User } from '../models/user.model';
import { Project } from '../models/project.model';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { WebSocketsService } from './web-sockets.service';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSelectedSrc = new Subject<NotificationModel>();
  public notificationSelected$ = this.notificationSelectedSrc.asObservable();
  private notificationsUncheckedSrc = new BehaviorSubject<NotificationModel[]>([]);
  public notificationsUnchecked$ = this.notificationsUncheckedSrc.asObservable();
  private notificationSrc = new Subject<NotificationModel>();
  public notification$  = this.notificationSrc.asObservable()
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private lpSnackbarNotificationService: SnackbarNotificationsService,
    private projectService:ProjectService,
    private localStorageService:LocalStorageService,
    private wsService:WebSocketsService) { }

  toggleNotification(notificationId:string,itemId?:string){
    return this.http.patch(`${API_URL}toggle-notification`, { notificationId, itemId }).pipe(
      tap((res: any) => { this.notificationsUncheckedSrc.next([...this.notificationsUncheckedSrc.getValue().filter((n)=>{ return n._id != res.notification._id})]) })
      ,map((res:any)=>{ return res.notification}));
  
    }
  getNotifications(queryString:string,skip:number,limit?:number){
    
    const headers = new HttpHeaders({ skip: skip.toString(), limit: limit ? limit.toString(): '9999999' });
    return this.http.get(`${API_URL}notifications${queryString}`,{headers});
  }
  getNotificationsUnchecked(queryString:string,skip:number,limit:number):Observable<any>{
    if (this.notificationsUncheckedSrc.getValue().length > 0){
      return of({notifications:this.notificationsUncheckedSrc.getValue()});
      }else{
        let query = `?checked=false&user=${this.authService.userOnline._id}`
        query+=queryString;
        return this.getNotifications(query, skip, limit).pipe(tap((res:any) => {this.notificationsUncheckedSrc.next(res.notifications)}));
      }
  }
  getNotificationById(id:string){
    return this.http.get(`${ API_URL }notification/${id}`).pipe(map((res:any)=>{ return res.notification }))
  }
  selectNotification(notification?:NotificationModel){
    notification ? this.localStorageService.set('state-data', notification._id, 'notification-selected') : this.localStorageService.remove('state-data','notification-selected')
    this.notificationSelectedSrc.next(notification ? notification : undefined);
  }
  addSnackNotification(notification: NotificationModel){
    this.showSnackNot(notification);
  }

  showSnackNot(notification: NotificationModel) {
    const { method, item, oldItem } = notification;
    const user = notification.userFrom as User;
    const project =  notification.type === 'Project' ? {name:''} : this.projectService.projects.find((p)=>{ return p._id === (notification.project as Project)._id})
    switch (method) {
      case 'POST':
        this.lpSnackbarNotificationService.showNotification('ADHESION', item.name , notification.type, user.name, project.name);
        break;
      case 'PUT':
        if ((item.participants as string[]).includes(this.authService.userOnline._id)) {
          this.lpSnackbarNotificationService.showNotification(method, oldItem ? oldItem.name ? oldItem.name :item.name : item.name, notification.type, user.name, project.name)
        } else {
          this.lpSnackbarNotificationService.showNotification('REMOVAL', oldItem ? oldItem.name ? oldItem.name : item.name : item.name, notification.type, user.name, project.name)
        }
        break;
      case 'DELETE':
        this.lpSnackbarNotificationService.showNotification('DELETE', item.name, notification.type, user.name, project.name)
        break;
      case 'STATUS CHANGE':
        this.lpSnackbarNotificationService.showNotification(method, item.name, notification.type, user.name, project.name, item.status)
        break;
    }
  }
  listenningNotificationsEvents(){
    this.wsService.listen('notification').subscribe((notification:NotificationModel)=>{
      console.log({notification})
      this.addSnackNotification(notification);
      const notifications = this.notificationsUncheckedSrc.getValue();
      notifications.push(notification)
      this.notificationsUncheckedSrc.next(notifications);
      this.notificationSrc.next(notification);
    })
  }
}
