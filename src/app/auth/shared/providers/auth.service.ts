import { Injectable } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { catchError, map, tap } from 'rxjs/operators';
import { URL_SERVICES } from '../../../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../library/providers/local-storage.service';
import { LpErrorHandlerService } from '../../../library/providers/lp-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userOnline: User;
  constructor(private http: HttpClient, private plErrorHandlerService:LpErrorHandlerService, private router: Router, private localStorageService: LocalStorageService) {
    this.uploadFromStorage();
  }

  /////// LOGIN //////
  login(credentials: any, rememberMe: boolean = false) {
    rememberMe ? this.localStorageService.set('rememberMe', credentials.email) : this.localStorageService.remove('rememberMe')
    let url = `${URL_SERVICES}login`;
    return this.http.post(url, credentials).pipe(
      tap((res: any) => { this.saveInStorage(res.user, res.token) }),
      map((res: any) => {
        return res;
      })
      , catchError((err) => {return this.plErrorHandlerService.handleError(err) }))
  }


  /////// STORAGE ACCESS AND WRITE //////
  saveInStorage(user: User, token?: string) {
    return new Promise((resolve, reject) => {
      token ? user.token = token : null
      this.localStorageService.set('user', JSON.stringify(user))
      this.userOnline = user;
      resolve()
    })
  }
  uploadFromStorage() {
    this.userOnline = this.localStorageService.get('user');
  }
  cleanStorage() {
    localStorage.removeItem("user");
    this.userOnline = null;
  }
  //////// LOGIN WITH TOKEN (A TRAVÉS DE GUARD) ///////////
  checkToken(): Observable<boolean> {
    //// REVISAMOS SI HAY TOKEN EN EL STORAGE  ////
    let token = this.localStorageService.get('user', 'token') || undefined;
    if (token) {
      return this.http.get(`${URL_SERVICES}check-token`).pipe(map((res: any) => {console.log('token is valid');return true;}))
    } else {
      return this.handleNoToken()
    }
  }

  refreshToken():Observable<boolean>{
    return this.http.get(`${URL_SERVICES}refresh-token`).pipe(
      tap((res:any)=>{
        this.saveInStorage(res.user, res.token)
      }),
      map(()=>{ return true }))
  }

  /* MANEJA LA RESPUESTA NEGATIVA DE CHECKTOKEN */
  handleNoToken(): Observable<boolean> {
    return of(false).pipe(tap(() => {
      this.router.navigate(['auth'])
    }))
  }

  ////// PASSWORD RECOVERING /////
  changePassword(password1: string, password2: string) {
    let url = `${URL_SERVICES}changePassword/${password1}/${password2}`
    return this.http.put(url, {}).pipe(
      catchError((err) => { return this.plErrorHandlerService.handleError})
    )
  }

  forgotPassword(email: string) {
    let url = `${URL_SERVICES}forgotPassword/${email}`
    return this.http.put(url, {}).pipe(map((res: any) => {
    })
      , catchError((err) => { return this.plErrorHandlerService.handleError }))
  }

  checkResetCode(userMail: string, resetCode: string) {
    let url = `${URL_SERVICES}checkResetCode/${userMail}/${resetCode}`
    return this.http.put(url, {}).pipe(
      catchError((err) => { return this.plErrorHandlerService.handleError }))
  }

  setNewPassword(resetCode: string, password: string, email: string) {
    let url = `${URL_SERVICES}setNewPassword/${email}/${resetCode}/${password}`
    return this.http.put(url, {}).pipe(map((res: any) => {
      if (res.message) {
        return res.message
      }
    })
      , catchError((err) => { return this.plErrorHandlerService.handleError })
    )
  }

  /* LOGOUT */
  logout() {
    return of(false).pipe(tap(()=>{
      this.router.navigate(["auth"]).then(() => {
        this.cleanStorage();
      })
    }))
  }
}
