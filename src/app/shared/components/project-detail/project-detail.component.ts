import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OOService } from '../../../library/providers/objects-operations.service';
import { Project } from '../../../core/models/project.model';
import { ProjectService } from '../../../core/providers/project.service';
import { LpDialogsService } from 'lp-dialogs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  @Input() projectSelected: Project
  projectV: number
  projectVersions: Project[] = []
  @Output() close = new EventEmitter<any>();
  @Output() back = new EventEmitter<any>()
  @Output() editProject: EventEmitter<string> = new EventEmitter<string>()
  @Output() restoreVersion: EventEmitter<{ taskChanges: { [key: string]: any }, id: string }> = new EventEmitter<{ taskChanges: { [key: string]: any }, id: string }>()
  constructor(public projectService: ProjectService, private lpDialogsService: LpDialogsService) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.projectSelected && this.projectSelected) {
      this.generateVersions()
      this.projectV = this.projectSelected.prevStates.length;
    }
  }
  isLastVersion() {
    return this.projectV > (this.projectSelected.prevStates.length - 1)
  }
  /////TODO: fix when come back to last version ///
  getVersion(taskBase, taskToMerge) {
    return OOService.mergeObjects(taskBase, taskToMerge);
  }
  generateVersions() {
    this.projectVersions = [];
    this.projectVersions.push(this.projectSelected)
    for (let i = this.projectSelected.prevStates.length; i >= 1; i--) {
      this.projectVersions.unshift(this.getVersion(this.projectVersions[0], this.projectSelected.prevStates[i - 1]))
    }
  }
  restore() {
    this.lpDialogsService.openConfirmDialog('THIS VERSION WILL REPLACE THE CURRENT ONE', 'Are you sure?').subscribe((res) => {
      if (res) {
        this.restoreVersion.emit(this.checkChangesToPatch())
      }
    })
  }
  checkChangesToPatch() {
    let obj = OOService.getObjectDifferences(this.projectSelected, this.projectVersions[this.projectV]);
    return { taskChanges: obj, id: this.projectSelected._id }
  }
  versionIsDifferent() {
    return !OOService.areEquals(this.projectVersions[this.projectV], this.projectSelected)
  }
  propertyHasChanged(key: string) {
    return this.projectVersions[this.projectV - 1] ? JSON.stringify(this.projectVersions[this.projectV - 1][key]) != JSON.stringify(this.projectVersions[this.projectV][key]) : false
  }

}
