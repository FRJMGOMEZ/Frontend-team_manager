import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServices } from '../../providers/user.service';
import { User } from '../../../models/user.model';


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

