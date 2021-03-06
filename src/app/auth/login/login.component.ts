import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Credentials} from '../shared/models/credentials';
import { AuthDialogService } from '../shared/providers/auth-dialog.service';
import { LpLocalStorage } from 'lp-operations';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  imgBackground = '../../../assets/images/team-manager.jpg'
  @Output() login: EventEmitter<{ credentials: Credentials, rememberMe: boolean }> = new EventEmitter<{ credentials: Credentials, rememberMe: boolean }>();

  @Output() toRegistration:EventEmitter<void> = new EventEmitter<void>();

  @Output() openInfo:EventEmitter<boolean> = new EventEmitter<boolean>();
  hidePass = true;
  email: string;
  password:string;
  rememberMe: boolean
  passwordRegExpValidations:{error:string,regExp:string}[]=[
    { error: 'hasNumeric', regExp:'(?=.*[0-9])'},
    { error: 'minLength', regExp:'(?=.{8,})'}
  ]

  constructor(private dialogService: AuthDialogService){}

  ngOnInit() {
    this.checkRememberMe();
  }
 checkRememberMe(){
   this.email = LpLocalStorage.get('rememberMe') || "";
    this.email ? this.rememberMe = true : this.rememberMe = false;
  }
 doLogin() {
    let credentials = new Credentials(this.email,this.password);
    this.login.emit({credentials,rememberMe:this.rememberMe})
  }
  navigateToRegistration(){
     this.toRegistration.emit();
  }
  recoverPassword(){
    this.dialogService.openRecoverPassDialog()
  }
  showInfo(param:boolean){
    this.openInfo.emit(param)
  }

  togglePassVisibility(){
    this.hidePass = !this.hidePass;
  }
}

