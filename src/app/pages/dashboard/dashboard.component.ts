import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../shared/providers/project.service';
import { Project } from '../../shared/models/project.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns =
    [ 'name', 'administrators', 'participants', 'messagesNum', 'tasksNum', 'status'];
  dataSource = new MatTableDataSource<Project>([]);

  constructor(private projectService:ProjectService) {}
  ngOnInit(): void {
     this.projectService.projects$.subscribe((projects:Project[])=>{
         this.dataSource.data = projects;
         this.dataSource.paginator = this.paginator;
     })
  }
}