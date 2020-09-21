import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, Validator } from '@angular/forms';
import { areTheyEqual, checkRegExp } from '../../../validations';
import { of } from 'rxjs';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit  {
  regExpValidations: { error: string, regExp: string }[] = [
    { error: 'hasNumeric', regExp: '(?=.*[0-9])' },
    { error: 'minLength', regExp: '(?=.{8,})' }
  ]
  @Output() reset: EventEmitter<{ password: string,resetCode:string}> = new EventEmitter < { password: string,resetCode:string }>()

  @Output() hide:EventEmitter<void> = new EventEmitter<void>();
      
  resetForm: FormGroup = this.fb.group({
    resetCode: [ '', [Validators.required,Validators.minLength(10)]],
    password1: [{ value: '', disabled:true}, [Validators.required,checkRegExp(this.regExpValidations)]],
    password2: [{ value: '', disabled:true }, [Validators.required,checkRegExp( this.regExpValidations)]],
  },{ validators: areTheyEqual('password1', 'password2') })

  get passwordsDisabled() {
    return this.resetForm ? this.resetForm.controls.resetCode.errors ? true : false : false;
  }

  ngOnInit(){
    this.resetForm.controls.resetCode.valueChanges.subscribe((value)=>{
      
      console.log(this.resetForm)
      if(this.resetForm.controls.resetCode.errors){
          this.resetForm.controls.password1.disable();
        this.resetForm.controls.password2.disable();
      }else{
        this.resetForm.controls.password1.enable();
        this.resetForm.controls.password2.enable();
      }
    })
  }

  constructor(private fb:FormBuilder) {}

  hideModal(){
    this.hide.emit()
  }

  displayPasswordError(resetForm: FormGroup) {
     if (resetForm.invalid && resetForm.touched && resetForm.controls.password1.value.length && resetForm.controls.password2.value.length && resetForm.errors) {
       if (resetForm.errors.areTheyEqual) {
         return true;
       } else {
         return false
       }
     } else {
       return false
     }
  }

  changePass(){
     this.reset.emit({password:this.resetForm.value.password2,resetCode:this.resetForm.value.resetCode});
  }

  changesInCode(form){
    console.log({form})
  }
}
