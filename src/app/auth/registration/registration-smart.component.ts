import { Component } from '@angular/core';
import { UserServices } from '../../shared/providers/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
    selector: 'app-registration-smart',
    template:`
    <app-registration  (toLogin)="navigateToLogin()" (registration)="registration($event)" > </app-registration>
    `
})
export class RegistrationSmartComponent {

    constructor(private userService:UserServices, private router:Router, private ar:ActivatedRoute){}

    registration(user: User) {
        this.userService.postUser(user).subscribe(()=>{
            this.router.navigate( ['login'], {relativeTo: this.ar.parent})
        })
    }   

    navigateToLogin(){
        this.router.navigate(['login'], { relativeTo: this.ar.parent }) 
    }

}

