import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";
import { Observable,Subject } from 'rxjs';
import { LpDialogsService } from 'lp-dialogs';
import { User } from '../models/user.model';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { API_URL } from '../../config/api-url';
import { LpLocalStorage } from 'lp-operations';

@Injectable({
    providedIn: 'root'
})
export class UserServices {

    count: number = 0;
    private userSrc: Subject<{ user: User, order: string }> = new Subject < {user: User, order: string}>();
   user$: Observable < {user: User, order: string}> = this.userSrc.asObservable();
   constructor(private http: HttpClient,
               private authService:AuthService,
               private errorHandlerService: ErrorHandlerService,
               private lpDialogsService:LpDialogsService
               
            ) {}

    /* ////////////////////////////////////////////// USERS CRUD ////////////////////////////////////////////////////// */
    getUsers(from: number = 0, limit: number = 5): Observable<User[]> {
        let url = `${API_URL}users?from=${from}&limit=${limit}`;
        return this.http.get(url).pipe(
            tap((res: any) => { this.count = res.count }),
            map((res: any) => { return res.users }),
            catchError((err) => { return this.errorHandlerService.handleError(err)})
        )
    }
    searchUsers(input: string, from: number = 0, limit: number = 5): Observable<User[]> {
        let url = `${API_URL}search/users/${input}?from=${from}&limit=${limit}`;
        return this.http.get(url).pipe(
            tap((res: any) => { this.count = res.count }),
            map((res: any) => {
                return res.users;
            })
            , catchError((err) => { return this.errorHandlerService.handleError(err) }))
    }

    postUser(user: User) {
        let url = `${API_URL}user`;
        return this.http.post(url, user).pipe(
            tap(() => { this.lpDialogsService.openInfoDialog('TALK TO SOME ADMINISTRATOR OF YOUR ORGANIZATION TO GET ACCESS','authorization required') }),
            map((res: any) => {
        })
            , catchError((err) => { return this.errorHandlerService.handleError(err) })
        )
    }

    putUser(id: string, user: User):Observable<User> {
        let url = `${API_URL}user/${id}`
        return this.http.put(url, user).pipe(
            tap((res: any) => {
                if (res.user._id === this.authService.userOnline._id) {
                    this.authService.saveUser(res.user, LpLocalStorage.get('user','token'))
                    this.authService.userOnline = res.user;
                }
                this.userSrc.next({user:res.user,order:'put'})
            }),
            map((res:any)=>{return res.user}),
            catchError((err) => { return this.errorHandlerService.handleError(err) })
        )
    }

    changeUserStatus(id: string) {
        let url = `${API_URL}changeUserStatus/${id}`
        return this.http.put(url, {}).pipe(
            tap((res:any)=>{ this.userSrc.next({user:res.user, order:'put'})}),
            catchError((err) => { return this.errorHandlerService.handleError(err) }))
    }

    changeRole(userId: string, role: string) {
        let url = `${API_URL}changeRole/${userId}/${role}`
        return this.http.put(url, {}).pipe(
            tap((res: any) => { this.userSrc.next({ user: res.user, order: 'put' }) }),
            catchError((err) => { return this.errorHandlerService.handleError(err) }))
    }

    deleteUser(id: string) {
        let url = `${API_URL}user/${id}`
        return this.http.delete(url).pipe(
            tap((res: any) => { this.userSrc.next({ user: res.user, order: 'delete' }) }),
            catchError((err) => { return this.errorHandlerService.handleError(err) }))
    }

}

