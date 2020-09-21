import { Component, EventEmitter, Output, Input, ViewChild, SimpleChanges, OnInit, AfterViewInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggleSideMenu: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
  
}