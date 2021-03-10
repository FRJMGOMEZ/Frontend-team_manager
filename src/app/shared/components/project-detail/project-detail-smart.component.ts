import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { LpObject } from 'lp-operations';
import { AuthService } from '../../../auth/shared/providers/auth.service';
import { ProjectService } from '../../../core/providers/project.service';
import { DialogsService } from '../../../core/providers/dialogs.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail-smart',
  template: `
  <app-project-detail [date]="date" [projectSelected]="projectSelected" (editProject)="editProject()" (restoreVersion)="restoreVersion($event)" > </app-project-detail>
  `,
  styles:[]
})
export class ProjectDetailSmartComponent {

  @Input() date: number = new Date().getTime();
  @Input() projectSelected: Project;

  constructor(
    private authService:AuthService,
    private projectService:ProjectService,
    private cdr:ChangeDetectorRef,
    private dialogsService:DialogsService
  ) { }
  restoreVersion(data: { projectChanges: { [key: string]: any }, id: string }) {
    let projectChanges = LpObject.copyObject(data.projectChanges);
    data.projectChanges.user = this.authService.userOnline._id;
    data.projectChanges.participants ? data.projectChanges.participants = data.projectChanges.participants.map((p: any) => { return p._id }) : null;
    this.projectService.putProject(data.projectChanges,this.projectSelected._id).pipe(map((res:any)=>{return res.project})).subscribe((projectUpdated:Project)=>{
      this.projectSelected = LpObject.mergeObjects(projectUpdated, projectChanges); 
      this.cdr.detectChanges();
    })
  }

  editProject() {
    this.dialogsService.openEditProjectDialog(this.projectSelected)
  }

}
