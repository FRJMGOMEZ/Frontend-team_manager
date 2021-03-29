import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
import { AuthService } from '../../core/providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.authService.userOnline.token 
    return this.isExpired(token) ? this.authService.logout() : this.tokenNeedsRefresh(token) ? this.authService.refreshToken() : true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.checkToken()
  }


  isExpired(token:string){
    const decoded = jwt_decode(token);
    const expiration = decoded.exp * 1000;
    if(new Date().getTime()> expiration){
      return true
    }else{
      return false
    }
  }

  tokenNeedsRefresh(token:string){
    const decoded = jwt_decode(token);
    const expiration = decoded.exp * 1000;
    if (new Date().getTime() + 180000 > expiration) {
      return true
    } else {
      return false
    }
  }
}
