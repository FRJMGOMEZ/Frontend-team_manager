import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../../../library/providers/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private localStorageService:LocalStorageService,private router:Router,private ar:ActivatedRoute){}
  canActivate(){
    let child = this.localStorageService.get('state-data','home-path');
    if(child){
      this.localStorageService.remove('state-data', 'home-path');
     this.router.navigate([`pages/home/${child}`]);
     return;
    }
    return true;
  }
  
}
