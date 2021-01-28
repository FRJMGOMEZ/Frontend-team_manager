import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of, Observable, Subject } from 'rxjs';
import { ProjectService } from './project.service';
import { tap, map, filter } from 'rxjs/operators';
import { Notification } from '../models/notification.model';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { LpSnackbarNotificationsService } from '../../library/providers/lp-snackbar-notifications.service';
import { API_URL } from '../../config/api-url';
import { User } from '../models/user.model';
import { Project } from '../models/project.model';
import { LocalStorageService } from '../../library/providers/local-storage.service';
import { WebSocketsService } from './web-sockets.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSelectedSrc = new Subject<Notification>();
  public notificationSelected$ = this.notificationSelectedSrc.asObservable();
  private notificationsUncheckedSrc = new BehaviorSubject<Notification[]>([]);
  public notificationsUnchecked$ = this.notificationsUncheckedSrc.asObservable();
  private notificationSrc = new Subject<Notification>();
  public notification$  = this.notificationSrc.asObservable()
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private lpSnackbarNotificationService: LpSnackbarNotificationsService,
    private projectService:ProjectService,
    private localStorageService:LocalStorageService,
    private wsService:WebSocketsService) { }

  toggleNotification(notificationId:string,itemId?:string){
    return this.http.patch(`${API_URL}toggle-notification`, { notificationId, itemId }).pipe(
      tap((res: any) => { this.notificationsUncheckedSrc.next([...this.notificationsUncheckedSrc.getValue().filter((n)=>{ return n._id != res.notification._id})]) }));
  }
  getNotifications(queryString:string,skip:number,limit?:number){
    const headers = new HttpHeaders({ skip: skip.toString(), limit: limit ? limit.toString(): '9999999' })
    return this.http.get(`${API_URL}notifications/${this.authService.userOnline._id}${queryString}`,{headers}).pipe(tap(console.log))
  }
  getNotificationsUnchecked(queryString:string,skip:number,limit:number):Observable<any>{
    if (this.notificationsUncheckedSrc.getValue().length > 0){
      console.log(this.notificationsUncheckedSrc.getValue())
      return of(this.notificationsUncheckedSrc.getValue()).pipe(tap((res:any) => { this.notificationsUncheckedSrc.next(res.notifications) }))
      }else{
        let query='?checked=false';
        query+=queryString
        return this.getNotifications(query, skip, limit).pipe(tap((res:any) => { this.notificationsUncheckedSrc.next(res.notifications)}))
      }
  }
  getNotificationById(id:string){
    return this.http.get(`${ API_URL }notification/${id}`).pipe(map((res:any)=>{ return res.notification }))
  }
  selectNotification(notification?:Notification){
    notification ? this.localStorageService.set('state-data', notification._id, 'notification-selected') : this.localStorageService.remove('state-data','notification-selected')
    this.notificationSelectedSrc.next(notification ? notification : undefined);
  }
  addSnackNotification(notification: Notification){
    this.showSnackNot(notification);
  }

  showSnackNot(notification: Notification) {
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
    this.wsService.listen('notification').subscribe((notification:Notification)=>{
      this.addSnackNotification(notification);
      const notifications = this.notificationsUncheckedSrc.getValue();
      notifications.push(notification)
      this.notificationsUncheckedSrc.next(notifications);
      this.notificationSrc.next(notification);
    })
  }
}
