import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { LpLocalStorage } from 'lp-operations';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private router:Router,private ar:ActivatedRoute){}
  canActivate(){
    let child = LpLocalStorage.get('state-data','home-path');
    if(child){
      LpLocalStorage.remove('state-data', 'home-path');
     this.router.navigate([`pages/home/${child}`]);
     return;
    }
    return true;
  }
  
}
