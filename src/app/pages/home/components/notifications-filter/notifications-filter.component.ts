import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../core/providers/notification.service';
import { HomeComponent } from '../../home.component';

@Component({
  selector: 'app-notifications-filter',
  templateUrl: './notifications-filter.component.html',
  styleUrls: ['./notifications-filter.component.scss']
})
export class NotificationsFilterComponent implements OnInit {

  constructor(private notificationService: NotificationService, private homeComponent:HomeComponent) { }

  ngOnInit(): void {
  }
  getNotifications(queryString: string) {
    /* this.notificationService.getNotifications(this.homeComponent.childQuery ? this.homeComponent.childQuery += '&' + queryString.split('?')[1] : queryString, 0).subscribe() */
  }

}
