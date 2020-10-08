import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../shared/providers/project.service';
import { Project } from '../../shared/models/project.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from '../../shared/providers/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns =
    [ 'name', 'administrators', 'participants', 'messagesNum', 'eventsNum', 'status'];
  dataSource = new MatTableDataSource<Project>([]);

  constructor(private notificationService:NotificationService) {}
  ngOnInit(): void {

    this.notificationService.getNotifications().subscribe(console.log)
     
  }
}