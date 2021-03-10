import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { ProjectService } from '../../../core/providers/project.service';
import { LpDialogsService } from 'lp-dialogs';
import { LpObject } from 'lp-operations';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnChanges{
  propertiesNoEditables = ['prevStates','actionsRequired', '__v','createdBy'];
  @Input() isDialog:boolean = false;
  @Input() date:number;
  @Input() projectSelected: Project;
  projectPristine:Project;
  prevProject:Project;
  @Output() close = new EventEmitter<any>();
  @Output() back = new EventEmitter<any>();
  isLastVersion:boolean = false;
  isFirstVersion:boolean;
  @Output() editProject: EventEmitter<void> = new EventEmitter<void>();
  @Output() restoreVersion: EventEmitter<{ projectChanges: { [key: string]: any }, id: string }> = new EventEmitter<{ projectChanges: { [key: string]: any }, id: string }>();
  currentVersion:number
  constructor(public projectService: ProjectService, private lpDialogsService: LpDialogsService) { }
  ngOnChanges(changes:SimpleChanges){
   if(changes.projectSelected && this.projectSelected){
     console.log(this.projectSelected);
    this.projectPristine = LpObject.copyObject(this.projectSelected);
   }
  }
  restore() {
    this.lpDialogsService.openConfirmDialog('THIS VERSION WILL REPLACE THE CURRENT ONE', 'Are you sure?').subscribe((res) => {
      if (res) {
      this.restoreVersion.emit(this.checkChangesToEdit());
        this.checkChangesToEdit()
      }
    })
  }
  checkChangesToEdit() {
    const projectSelected = Object.keys(this.projectSelected).reduce((acum, key) => { !this.propertiesNoEditables.includes(key) ? acum[key] = this.projectSelected[key] : null; return acum }, {});
    const projectPristine = Object.keys(this.projectPristine).reduce((acum, key) => { !this.propertiesNoEditables.includes(key) ? acum[key] = this.projectPristine[key] : null; return acum }, {});
    let obj = LpObject.getObjectDifferences(projectPristine, projectSelected);
    console.log({obj,projectSelected,projectPristine});
    return { projectChanges: obj, id: this.projectSelected._id };
  }
  versionIsDifferent() {
    return  !LpObject.areEquals(this.prevProject, this.projectSelected) 
  }
  propertyHasChanged(key: string) {
    return this.currentVersion !== 0 ? this.prevProject ? JSON.stringify(this.prevProject[key]) != JSON.stringify(this.projectSelected[key]) : false : false;
  }

  setVersion(project:Project){
   this.projectSelected = project;
   const projectSelected = Object.keys(this.projectSelected).reduce((acum, key) => { !this.propertiesNoEditables.includes(key) ? acum[key] = this.projectSelected[key] : null; return acum }, {});
   const projectPristine = Object.keys(this.projectPristine).reduce((acum, key) => { !this.propertiesNoEditables.includes(key) ? acum[key] = this.projectPristine[key] : null; return acum }, {});
   this.isLastVersion = LpObject.areEquals(projectSelected,projectPristine);
  }

}
