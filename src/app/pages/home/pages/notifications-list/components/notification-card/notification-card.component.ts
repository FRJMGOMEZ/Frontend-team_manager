import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from '../../../../../../core/models/notification.model';
import { User } from '../../../../../../core/models/user.model';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {

  @Input() height:number= 0;
  @Input() notification:Notification
  @Input() color:string;
  @Input() userOnline:User;
  isChecked:boolean = false;
  @Output() selectNotification = new EventEmitter<Notification>();
  @Output() toggleNotification = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
    const user = (this.notification.usersTo as any[]).find((u) => { return u.user === this.userOnline._id });
    this.isChecked = user.checked ? true : false;
  }
}
