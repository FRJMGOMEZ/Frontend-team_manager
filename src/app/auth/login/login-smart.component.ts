import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/providers/auth.service';
import { Credentials } from '../shared/models/credentials';
@Component({
  selector: "app-login-smart",
  template:`
   <app-login (login)="login($event)" (toRegistration)="navigateToRegistration()" > </app-login>`
})
export class LoginSmartComponent implements OnInit {
  
  email: string;
  rememberMe: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private ar:ActivatedRoute,
  ) {}
   ngOnInit() {
     if(this.authService.userOnline){
          this.authService.cleanStorage()
    } 
  }
 login(data:{credentials:Credentials,rememberMe:boolean}) {
  this.authService.login(data.credentials, data.rememberMe).subscribe((res:any) => {
      this.router.navigate([""]);
    });
  }
  navigateToRegistration(){
      this.router.navigate(['registration'],{relativeTo:this.ar.parent})
  }
}
 