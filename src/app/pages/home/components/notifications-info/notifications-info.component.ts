import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../../core/providers/media.service';

@Component({
  selector: 'app-notifications-info',
  templateUrl: './notifications-info.component.html',
  styleUrls: ['./notifications-info.component.scss']
})
export class NotificationsInfoComponent implements OnInit {

  constructor(public mdService:MediaService) { }

  ngOnInit(): void {
  }

}
