import { Component,  Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { Project } from '../../../core/models/project.model';
import { LpObject } from 'lp-operations';

@Component({
  selector: 'app-project-edition-and-creation',
  templateUrl: './project-edition-and-creation.component.html',
  styleUrls: ['./project-edition-and-creation.component.css']
})
export class ProjectEditionAndCreationComponent implements OnChanges {
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
  @Output() putProject: EventEmitter<{[key:string]:any}> = new EventEmitter<Project>()

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.project) {
      if (this.project) {
        this.projectPristine = LpObject.copyObject(this.project);
      } else {
        this.project = new Project('', this.userOnline._id, [this.userOnline._id], [this.userOnline._id], [], [], true);
        this.participantsSelected = [this.userOnline];
        this.admSelected = [this.userOnline];
        this.admOptions = [this.userOnline];
        this.projectPristine = LpObject.copyObject(this.project);
      }
    }

    if (changes.participantsOptions && this.participantsOptions.length > 0) {
      if (this.project && this.project._id) {
        this.participantsSelected = this.project.participants as User[];
        this.admOptions = this.project.participants as User[];
        this.admSelected = this.project.administrators as User[];
      } else {
        this.project = new Project('',this.userOnline._id,[this.userOnline], [this.userOnline], [], [], true);
        this.participantsSelected = [this.userOnline];
        this.admSelected = [this.userOnline];
        this.admOptions = [this.userOnline];
      }
      this.project.participants = (this.project.participants as User[]).map((p)=>{ return p._id});
      this.project.administrators = (this.project.administrators as User[]).map((adm)=>{ return adm._id});
      this.projectPristine = LpObject.copyObject(this.project);
    }
  }
  participantsChange(participants: string[]) {
    this.project.participants = participants;
    this.participantsSelected = this.participantsOptions.filter((eachUser: User) => { return participants.includes(eachUser._id) });

    this.project.administrators = (this.project.administrators as string[]).filter((eachUser: string) => { return (this.project.participants as string[]).includes(eachUser) });
    this.admSelected = this.admSelected.filter((eachUser: User) => { return (this.project.participants as string[]).includes(eachUser._id) });

    this.admOptions = this.participantsOptions.filter((eachUser: User) => { return (this.project.participants as string[]).includes(eachUser._id) });
  }
  administratorsChange(administrators: string[]) {
    this.project.administrators = administrators;
    this.admSelected = this.admOptions.filter((eachUser: User) => { return administrators.includes(eachUser._id) });
  }

  createProject() {
    this.postProject.emit(this.project);
  }

  saveProjectChanges() {
    const changes = LpObject.getObjectDifferences(this.projectPristine,this.project);
    this.putProject.emit(changes);
  }

  checkProjectState() {
    return LpObject.areEquals(this.project, this.projectPristine);
  }

  hideModal() {
    this.hide.emit();
  }
}
