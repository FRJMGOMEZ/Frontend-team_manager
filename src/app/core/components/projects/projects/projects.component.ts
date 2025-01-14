import { Component, Input, Output, EventEmitter, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent  {

  @Input() projects: Project[] = []
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggleSideMenu: EventEmitter<void> = new EventEmitter<void>();
  @Output() projectSelectedOut: EventEmitter<Project> = new EventEmitter<Project>();
  @Input() projectSelectedIn: string = ''
  @Output() putProject: EventEmitter<Project> = new EventEmitter<Project>();
  @Output() postProject: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns = ['name', 'administrators', 'participants', 'status', 'actions'];
  dataSource = new MatTableDataSource<Project>([]);
  @Output() deleteProject: EventEmitter<string> = new EventEmitter<string>();
  constructor() { };
  ngOnInit(){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.projects) {
      this.dataSource.data = this.projects;
      this.dataSource.paginator = this.paginator;
    }
  }
  selectProject(project:Project){  
    this.projectSelectedOut.emit(project);
  }

  get projectSelected(){
    return this.projects.find((p)=>{ return  p._id === this.projectSelectedIn})
  }

}
