import { Injectable } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { catchError, map, tap } from 'rxjs/operators';
import { URL_SERVICES } from '../../../config/config';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../../../shared/providers/error-handler.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../library/providers/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userOnline: User;
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router, private localStorageService: LocalStorageService) {
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
      , catchError((err) => { console.log({err});return this.errorHandlerService.handleError(err) }))
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
      let userId = this.localStorageService.get('user', '_id') || undefined;
      if (userId) {
        return this.http.put(`${URL_SERVICES}check-token`, { userId }).pipe(map((res: any) => {
          ///// SI ESTAMOS EN MODO DEMO ////
          if (res.user) {
            this.saveInStorage(res.user, res.token);
            return true;
          } else {
            /////// NO ESTAMOS EN MODO DEMO, RECIBIMOS OTRO TOKEN Y EL USUARIO Y LOS REESCRIBIMOS //////
            if (res.token) {
              this.saveInStorage(this.userOnline, res.token);
              return true
            } else {
              this.router.navigate(['auth']).then(() => { })
              return false
            }
          }
        }))
      } else {
        console.log('handle no token')
        return this.handleNoToken();
      }
    } else {
      console.log('handle no token 1')
      return this.handleNoToken()
    }
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
      catchError(this.errorHandlerService.handleError)
    )
  }

  forgotPassword(email: string) {
    let url = `${URL_SERVICES}forgotPassword/${email}`
    return this.http.put(url, {}).pipe(map((res: any) => {
    })
      , catchError(this.errorHandlerService.handleError))
  }

  checkResetCode(userMail: string, resetCode: string) {
    let url = `${URL_SERVICES}checkResetCode/${userMail}/${resetCode}`
    return this.http.put(url, {}).pipe(
      catchError(this.errorHandlerService.handleError))
  }

  setNewPassword(resetCode: string, password: string, email: string) {
    let url = `${URL_SERVICES}setNewPassword/${email}/${resetCode}/${password}`
    return this.http.put(url, {}).pipe(map((res: any) => {
      console.log({ res })
      if (res.message) {
        return res.message
      }
    })
      , catchError(this.errorHandlerService.handleError)
    )
  }

  /* LOGOUT */
  logout() {
    this.router.navigate(["auth"]).then(() => {
      this.cleanStorage();
    })
  }
}
