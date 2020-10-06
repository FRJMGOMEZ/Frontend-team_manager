import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { AuthService } from '../../auth/shared/providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  toggleNotification(notificationId:string,checked:boolean){
    return this.http.patch(`${URL_SERVICES}notification/${notificationId}`,{checked})
  }

  getNotifications(){
    return this.http.get(`${URL_SERVICES}notifications/${this.authService.userOnline._id}`)
  }
}
