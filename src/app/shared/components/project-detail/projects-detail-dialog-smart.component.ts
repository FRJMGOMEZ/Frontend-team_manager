import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { ProjectService } from '../../../core/providers/project.service';
import { LpObject, LpLocalStorage } from 'lp-operations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { DialogsService } from '../../../core/providers/dialogs.service';

@Component({
  selector: 'app-projects-detail-dialog-smart',
  template:`
   <mat-dialog-content>
   <app-project-detail [date]="date" [projectSelected]="projectSelected" (editProject)="editProject()" (restoreVersion)="restoreVersion($event)" > </app-project-detail>
   </mat-dialog-content>
   <mat-dialog-actions fxLayoutAlign="center">
     <button mat-raised-button (click)="closeDialog()" >CLOSE</button>
   </mat-dialog-actions>
  `,
  styles:[]
})
export class ProjectsDetailDialogSmartComponent implements OnInit {
   date: number = new Date().getTime();
   projectSelected: Project;
   prevDialog: string

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef,
    private dialogRef: MatDialogRef<ProjectsDetailDialogSmartComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogsService:DialogsService

  ) { }

  ngOnInit(): void {
    this.projectService.getProjectById(this.data.projectId).subscribe((project:Project)=>{
      LpLocalStorage.set('state-data', this.data.projectId, 'project-on-screen')
      this.projectSelected = project;
    })
    this.date = this.data.date ? this.data.date : this.date;
    this.prevDialog = this.data.prevDialog;
  }
  restoreVersion(data: { projectChanges: { [key: string]: any }, id: string }) {
    let projectChanges = LpObject.copyObject(data.projectChanges);
    data.projectChanges.user = this.authService.userOnline._id;
    data.projectChanges.participants ? data.projectChanges.participants = data.projectChanges.participants.map((p: any) => { return p._id }) : null;
    this.projectService.putProject(data.projectChanges, this.projectSelected._id).pipe(map((res: any) => { return res.project })).subscribe((projectUpdated: Project) => {
      this.projectSelected = LpObject.mergeObjects(projectUpdated, projectChanges);
      this.cdr.detectChanges();
    })
  }

  editProject() {
    this.dialogsService.openEditProjectDialog(this.projectSelected);
    this.closeDialog();
  }
  back() {
    this.dialogRef.close({ prevDialog: this.prevDialog })
  }
  closeDialog(date?) {
    this.dialogRef.close(date ? { date } : undefined)
    LpLocalStorage.remove('state-data', 'task-on-screen')
  }

}
