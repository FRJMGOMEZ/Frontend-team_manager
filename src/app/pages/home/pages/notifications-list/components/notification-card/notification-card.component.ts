import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationModel } from '../../../../../../core/models/notification.model';
import { User } from '../../../../../../core/models/user.model';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {

  @Input() height:number= 0;
  @Input() notification:NotificationModel
  @Input() color:string;
  @Input() userOnline:User;
  @Output() selectNotification = new EventEmitter<NotificationModel>();
  @Output() toggleNotification = new EventEmitter<string>();

  get method(){
    let label;
    switch(this.notification.method){
      case 'POST': label = 'CREATION';
      break;
      case 'PUT': label = 'EDITION';
      break;
      case 'DELETE': label = 'DELETION';
      break;
    }
    return label;
  }

  get isChecked(){
    const user = (this.notification.usersTo as any[]).find((u) => { return u.user === this.userOnline._id });
    return user ? user.checked ? true : false : true;
  }
  constructor() { }
  ngOnInit(): void {
   
  }
}
