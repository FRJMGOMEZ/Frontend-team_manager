 import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { checkRegExp, areTheyEqual } from '../shared/utils/validations';
import { User } from '../../core/models/user.model';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent {
  imgBackground = 'assets/menu/icon/calendar.png'

  regExpValidations: { error: string, regExp: string }[] = [
    { error: 'hasNumeric', regExp: '(?=.*[0-9])' },
    { error: 'minLength', regExp: '(?=.{8,})' }
  ]
  @Output() toLogin:EventEmitter<void> = new EventEmitter<void>();

  @Output() registration:EventEmitter<User> = new EventEmitter<User>();

  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required, checkRegExp(this.regExpValidations)]],
    password2: ['', [Validators.required, checkRegExp(this.regExpValidations)]]
  }, { validators: areTheyEqual('password1', 'password2') })

  constructor(private fb: FormBuilder, private deviceDetectorService:DeviceDetectorService) {}
  
  navigateToLogin(){
     this.toLogin.emit();
   }

   doRegistration(){
    let user = new User(this.userForm.value.name,this.userForm.value.email,this.userForm.value.password2);
    this.registration.emit(user);
   }

   displayPasswordError(userForm:FormGroup){
     if (userForm.invalid && userForm.touched && userForm.value.password1.length && userForm.value.password2.length && userForm.errors){
          if(userForm.errors.areTheyEqual){
            return true;
          }else{
            return false
          }
     }else{
      return false
     }
   }
}

