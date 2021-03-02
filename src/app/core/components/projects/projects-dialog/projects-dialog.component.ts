import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { Project } from '../../../models/project.model';
import { ProjectService } from '../../../providers/project.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-projects-dialog',
  templateUrl: './projects-dialog.component.html',
  styleUrls: ['./projects-dialog.component.scss']
})
export class ProjectsDialogComponent implements OnInit {

  projects: Project[] = []
  projectSelected: string;
  @Output() putProject: EventEmitter<{ project: Project, order:'put' }> = new EventEmitter<{project:Project,order:'put'}>();
  @Output() deleteProject: EventEmitter<{ project:string, order: 'delete' }> = new EventEmitter<{ project: string, order: 'delete' }>();
  @Output() selectProject: EventEmitter<{ project: string, order: 'select' }> = new EventEmitter<{ project: string, order: 'select' }>();
  constructor(private dialogRef: MatDialogRef<ProjectsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.projects = this.data.projects || [];
    this.dialogRef.updatePosition({ top: '17%'})
  }
  close(){
    this.dialogRef.close();
  }

}
