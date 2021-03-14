import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { NotificationModel } from '../models/notification.model';
import { AuthService } from './auth.service';
import { SnackbarNotificationsService } from './snackbar-notifications.service';
import { API_URL } from '../../config/api-url';
import { User } from '../models/user.model';
import { WebSocketsService } from './web-sockets.service';
import { LpLocalStorage } from 'lp-operations';
import { LoadSpinnerService } from '../components/load-spinner/load-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSelectedSrc = new Subject<NotificationModel>();
  public notificationSelected$ = this.notificationSelectedSrc.asObservable();
  private notificationsUncheckedSrc = new Subject<boolean>();
  public notificationsUnchecked$ = this.notificationsUncheckedSrc.asObservable();
  private notificationSrc = new Subject<NotificationModel>();
  public notification$  = this.notificationSrc.asObservable();
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private lpSnackbarNotificationService: SnackbarNotificationsService,
    private wsService:WebSocketsService) { }

  toggleNotification(notificationId:string,itemId?:string){
    return this.http.patch(`${API_URL}toggle-notification`, { notificationId, itemId }).pipe(
          tap((res: any) => { this.notificationsUncheckedSrc.next(false);})
          ,map((res: any) =>  res.notification ));
    }
  getNotifications(queryString:string,skip:number,limit?:number){
    const headers = new HttpHeaders({ skip: skip.toString(), limit: limit ? limit.toString(): '9999999' });
    return this.http.get(`${API_URL}notifications${queryString}`,{headers})
  }
  getNotificationsUnchecked(queryString:string,skip:number,limit:number):Observable<any>{
    let query = `checked=false&userTo=${this.authService.userOnline._id}`;
    queryString+= queryString ? '&' + query : '?' + query;
    return this.getNotifications(queryString, skip, limit);
  }
  getNotificationById(id:string){
    return this.http.get(`${ API_URL }notification/${id}`).pipe(map((res:any)=>{ return res.notification }));
  }

  selectNotification(notification?:NotificationModel){
    notification ? LpLocalStorage.set('state-data', notification._id, 'notification-selected') : LpLocalStorage.remove('state-data','notification-selected');
    this.notificationSelectedSrc.next(notification ? notification : undefined);
  }
  addSnackNotification(notification: NotificationModel){
    this.showSnackNot(notification);
  }

  showSnackNot(notification: NotificationModel) {
    if((notification.userFrom as User)._id !== this.authService.userOnline._id){
      const { method, item, prevItem } = notification;
      const user = notification.userFrom as User;
      const project = notification.type === 'Project' ? { name: '' } : notification.project as { name: string, _id: string };
      switch (method) {
        case 'POST':
          this.lpSnackbarNotificationService.showNotification('ADHESION', item.name, notification.type, user.name, project.name);
          break;
        case 'PUT':
          if ((item.participants as string[]).includes(this.authService.userOnline._id)) {
            this.lpSnackbarNotificationService.showNotification(method, prevItem ? prevItem.name ? prevItem.name : item.name : item.name, notification.type, user.name, project.name);
          } else {
            this.lpSnackbarNotificationService.showNotification('REMOVAL', prevItem ? prevItem.name ? prevItem.name : item.name : item.name, notification.type, user.name, project.name);
          }
          break;
        case 'DELETE':
          this.lpSnackbarNotificationService.showNotification('DELETE', item.name, notification.type, user.name, project.name);
          break;
      }
    }
  }
  listenningNotificationsEvents(){
    this.wsService.listen('notification').subscribe((notification:NotificationModel)=>{
      (notification.userFrom as User)._id !== this.authService.userOnline._id ? this.addSnackNotification(notification):null;
      (notification.usersTo as any).map((u)=>{ return u.user}).includes(this.authService.userOnline._id) ? this.notificationsUncheckedSrc.next(true) : null;
      this.notificationSrc.next(notification);
    })
  }
}
