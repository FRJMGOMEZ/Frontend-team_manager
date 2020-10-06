import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ɵConsole } from '@angular/core';
import { User } from '../../models/user.model';
import { Project } from '../../models/project.model';
import { OOService } from '../../../library/providers/objects-operations.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnChanges {
  /* OPCIONES A ELEGIR DE USUARIOS , OPCIONES SELECCIONADAS(O DEL PROYECTO EDITADO) */
  @Input() participantsOptions: User[] = [];
  admOptions: User[] = [];

  participantsSelected: User[] = [];
  admSelected: User[] = []


  /* PROYECTO SELECCIONADO EN CASO DE EDICIÓN */
  @Input() project: Project
  projectPristine: Project

  @Input() userOnline: User;
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();
  @Output() postProject: EventEmitter<Project> = new EventEmitter<Project>()
  @Output() putProject: EventEmitter<Project> = new EventEmitter<Project>()

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.project) {
      if (this.project) {
        this.projectPristine = OOService.copyObject(this.project)
      } else {
        this.project = new Project('', [this.userOnline._id], [this.userOnline._id], [], [], true);
        this.participantsSelected = [this.userOnline];
        this.admSelected = [this.userOnline];
        this.admOptions = [this.userOnline];
        this.projectPristine = OOService.copyObject(this.project)
      }
    }

    if (changes.participantsOptions && this.participantsOptions.length > 0) {
      if (this.project && this.project._id) {
        this.participantsSelected = this.participantsOptions.filter((eachUser: User) => { return (this.project.participants as string[]).includes(eachUser._id) })
        this.admOptions = this.participantsOptions.filter((eachUser: User) => { return (this.project.participants as string[]).includes(eachUser._id) })
        this.admSelected = this.admOptions.filter((eachUser: User) => { return (this.project.administrators as string[]).includes(eachUser._id) })
      } else {
        this.project = new Project('', [this.userOnline._id], [this.userOnline._id], [], [], true);
        this.participantsSelected = [this.userOnline];
        this.admSelected = [this.userOnline];
        this.admOptions = [this.userOnline];
        this.projectPristine = OOService.copyObject(this.project)
      }
    }
  }
  participantsChange(participants: string[]) {

    this.project.participants = participants;
    this.participantsSelected = this.participantsOptions.filter((eachUser: User) => { return participants.includes(eachUser._id) })

    this.project.administrators = (this.project.administrators as string[]).filter((eachUser: string) => { return (this.project.participants as string[]).includes(eachUser) })
    this.admSelected = this.admSelected.filter((eachUser: User) => { return (this.project.participants as string[]).includes(eachUser._id) })

    this.admOptions = this.participantsOptions.filter((eachUser: User) => { return (this.project.participants as string[]).includes(eachUser._id) })
  }
  administratorsChange(administrators: string[]) {
    this.project.administrators = administrators;
    this.admSelected = this.admOptions.filter((eachUser: User) => { return administrators.includes(eachUser._id) })
  }

  createProject() {
    this.postProject.emit(this.project)
  }

  saveProjectChanges() {
    this.putProject.emit(this.project)
  }

  checkProjectState() {
    return OOService.areEquals(this.project, this.projectPristine)
  }

  hideModal() {
    this.hide.emit()
  }
}
