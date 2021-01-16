import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ProjectService } from './project.service';
import { NotificationModel } from '../../models/notification.model';
import { AuthService } from '../auth/shared/providers/auth.service';
import { LpSnackbarNotificationsService } from '../../../library/providers/lp-snackbar-notifications.service';
import { User } from '../../models/user.model';
import { Project } from '../../models/project.model';
import { API_URL } from '../../../config/api-url';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSrc = new Subject<NotificationModel>();
  public notification$ = this.notificationSrc.asObservable();

  constructor(private http: HttpClient, private authService: AuthService, private lpSnackbarNotificationService: LpSnackbarNotificationsService, private projectService:ProjectService) { }

  toggleNotification(notificationId?:string,itemId?:string){
    return this.http.patch(`${API_URL}notification`,{notificationId,itemId})
  }

  getNotifications(){
    return this.http.get(`${API_URL}notifications/${this.authService.userOnline._id}`)
  }
  addSnackNotificaction(notification: NotificationModel){
    this.showSnackNot(notification);
    this.notificationSrc.next(notification)
  }

  showSnackNot(notification: NotificationModel) {
    const { method, item, oldItem } = notification;
    const user = notification.userFrom as User;
    switch (method) {
      case 'POST':
        this.lpSnackbarNotificationService.showNotification('ADHESION', oldItem ? oldItem.name : item.name, notification.type, user.name, (item.project as any).name);
        break;
      case 'PUT':
        if ((item.participants as string[]).includes(this.authService.userOnline._id) || this.projectService.isUserAdm(this.authService.userOnline._id, item.project as string)) {
          this.lpSnackbarNotificationService.showNotification(method, item.name, notification.type, user.name, (item.project as Project).name)
        } else {
          this.lpSnackbarNotificationService.showNotification('REMOVAL', item.name, notification.type, user.name, (item.project as Project).name)
        }
        break;
      case 'DELETE':
        this.lpSnackbarNotificationService.showNotification('DELETE', item.name, notification.type, user.name, (item.project as Project).name)
        break;
      case 'STATUS CHANGE':
        this.lpSnackbarNotificationService.showNotification(method, item.name, notification.type, user.name, (item.project as Project).name, item.status)
        break;
    }
  }
}
