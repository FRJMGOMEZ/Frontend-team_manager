import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { User } from '../../models/user.model';
import { Project } from '../../models/project.model';
import { OOService } from '../../../library/providers/objects-operations.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit, OnChanges {
  /* OPCIONES A ELEGIR DE USUARIOS , OPCIONES SELECCIONADAS(O DEL PROYECTO EDITADO) */
  @Input() participantsOptions: User[] = [];
  admOptions: User[] = [];
  participantsSelected: User[] = []
  admSelected: User[] = []

  /* PROYECTO SELECCIONADO EN CASO DE EDICIÓN */
  @Input() project: Project
  projectPristine:Project
  @Input() userOnline: User;
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();
  @Output() postProject: EventEmitter<Project > = new EventEmitter<Project >()
  @Output() putProject:EventEmitter<Project> = new EventEmitter<Project>()

  projectForm: FormGroup = this.fb.group({
    name: ['', [Validators.required,Validators.minLength(3)]],
    status:['',[Validators.required]],
    participants: this.fb.array([]),
    administrators: this.fb.array([])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /* SI CREAMOS UN NUEVO PROYECTO INCLUIMOS A USER-ONLINE COMO ADM Y PARTICIPANTE, POR DEFECTO */
    this.participantsSelected.push(this.userOnline);
    this.admSelected.push(this.userOnline);
    const controlParticipants = <FormArray>this.projectForm.get('participants');
    controlParticipants.push(this.fb.control(this.userOnline._id));
    const controlAdm = <FormArray>this.projectForm.get('administrators');
    controlAdm.push(this.fb.control(this.userOnline._id))
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.project) {
      if(this.project){
        let participantsToInclude = this.participantsOptions.filter((user: User) => { return this.project.participants.includes(user._id) && user._id != this.userOnline._id });
        this.participantsSelected.push(...participantsToInclude);
        const controlParticipants = <FormArray>this.projectForm.get('participants');
        participantsToInclude.forEach((user: User) => {
          let control = this.fb.control(user._id);
          controlParticipants.push(control);
        })
        let admToInclude = this.admOptions.filter((user: User) => { return this.project.administrators.includes(user._id) && user._id != this.userOnline._id });
        this.admSelected.push(...admToInclude);
        const controlAdm = <FormArray>this.projectForm.get('administrators');
        admToInclude.forEach((user: User) => {
          let control = this.fb.control(user._id);
          controlAdm.push(control);
        })
        this.projectForm.patchValue({
          name: this.project.name,
          status: this.project.status
        })
        timer().subscribe(() => {
          this.projectPristine = OOService.copyObject(this.projectForm.value)
        })

      }
    }
  }
  participantsChange(participantIds: string[]) {
    this.participantsSelected = [this.userOnline,...this.participantsOptions.filter((user:User)=>{ return participantIds.includes(user._id)})]
    const arrayControl = <FormArray>this.projectForm.get('participants');
    let controls = arrayControl.controls;
    controls = controls.filter((control: FormControl) => { return participantIds.includes(control.value) || control.value === this.userOnline._id })
    arrayControl.clear();
    controls.forEach((control: FormControl) => {
      arrayControl.push(control)
    })
    this.admOptions = this.participantsOptions.filter((user:User)=>{ return participantIds.includes(user._id) })
    this.projectForm.markAsDirty();
    this.administratorsChange(this.admSelected.filter((user: User) => { return participantIds.includes(user._id) }).map((user: User) => { return user._id }))
  }

  administratorsChange(administratorsIds: string[]) {
    this.admSelected = [this.userOnline, ...this.admOptions.filter((user: User) => { return administratorsIds.includes(user._id) })]
    const arrayControl = <FormArray>this.projectForm.get('administrators');
    let controls = arrayControl.controls;
    controls = controls.filter((control: FormControl) => { return administratorsIds.includes(control.value) || control.value === this.userOnline._id })
    arrayControl.clear();
    controls.forEach((control: FormControl) => {
      arrayControl.push(control)
    })
    this.projectForm.markAsDirty();
  }

  createProject() {
    let project = new Project(this.projectForm.value.name, this.projectForm.value.participants, this.projectForm.value.administrators, this.projectForm.value.description);
    this.postProject.emit(project)
  }

  saveProjectChanges(){
      this.project = {...this.project,...this.projectForm.value}
      this.putProject.emit(this.project)
  }


  checkProjectState(){
    return OOService.areEquals(this.projectForm.value, this.projectPristine)
  }

  hideModal() {
    this.hide.emit()
  }
}
