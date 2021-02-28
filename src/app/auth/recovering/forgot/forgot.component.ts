import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  email:string

  @Output() recoverPass:EventEmitter<string> = new EventEmitter<string>()

  @Output() doHide:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    
  }

  hideModal(){
    this.doHide.emit()
  }

  forgotRequest(){
     this.recoverPass.emit(this.email)
  }
}