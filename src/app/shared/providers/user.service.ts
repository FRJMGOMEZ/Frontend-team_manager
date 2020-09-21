import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { URL_SERVICES } from "../../config/config";
import { map, catchError, tap } from "rxjs/operators";
import { User } from '../../shared/models/user.model'
import { ErrorHandlerService } from './error-handler.service';
import { Observable,Subject } from 'rxjs';
import { AuthService } from '../../auth/shared/providers/auth.service';
import { LocalStorageService } from '../../library/providers/local-storage.service';


@Injectable({
    providedIn: 'root'
})
export class UserServices {

    count: number = 0;
    private userSrc: Subject<{ user: User, order: string }> = new Subject < {user: User, order: string}>();
   user$: Observable < {user: User, order: string}> = this.userSrc.asObservable();
   constructor(private http: HttpClient,private authService:AuthService,private errorHandlerService: ErrorHandlerService, private localStorageService:LocalStorageService) {}

    /* ////////////////////////////////////////////// USERS CRUD ////////////////////////////////////////////////////// */
    getUsers(from: number = 0, limit: number = 5): Observable<User[]> {
        let url = `${URL_SERVICES}users?from=${from}&limit=${limit}`;
        return this.http.get(url).pipe(
            tap((res: any) => { this.count = res.count }),
            map((res: any) => { return res.users }),
            catchError(this.errorHandlerService.handleError)
        )
    }
    searchUsers(input: string, from: number = 0, limit: number = 5): Observable<User[]> {
        let url = `${URL_SERVICES}search/users/${input}?from=${from}&limit=${limit}`;
        return this.http.get(url).pipe(
            tap((res: any) => { this.count = res.count }),
            map((res: any) => {
                return res.users;
            })
            , catchError(this.errorHandlerService.handleError))
    }

    postUser(user: User) {
        let url = `${URL_SERVICES}user`;
        return this.http.post(url, user).pipe(
            map((res: any) => {
        })
            , catchError(this.errorHandlerService.handleError)
        )
    }

    putUser(id: string, user: User):Observable<User> {
        let url = `${URL_SERVICES}user/${id}`
        return this.http.put(url, user).pipe(
            tap((res: any) => {
                if (res.user._id === this.authService.userOnline._id) {
                    this.authService.saveInStorage( res.user, this.localStorageService.get('user','token'))
                    this.authService.userOnline = res.user;
                }
                this.userSrc.next({user:res.user,order:'put'})
            }),
            map((res:any)=>{return res.user}),
            catchError(this.errorHandlerService.handleError)
        )
    }

    changeUserStatus(id: string) {
        let url = `${URL_SERVICES}changeUserStatus/${id}`
        return this.http.put(url, {}).pipe(
            tap((res:any)=>{ this.userSrc.next({user:res.user, order:'put'})}),
            catchError(this.errorHandlerService.handleError))
    }

    changeRole(userId: string, role: string) {
        let url = `${URL_SERVICES}changeRole/${userId}/${role}`
        return this.http.put(url, {}).pipe(
            tap((res: any) => { this.userSrc.next({ user: res.user, order: 'put' }) }),
            catchError(this.errorHandlerService.handleError))
    }

    deleteUser(id: string) {
        let url = `${URL_SERVICES}user/${id}`
        return this.http.delete(url).pipe(
            tap((res: any) => { this.userSrc.next({ user: res.user, order: 'delete' }) }),
            catchError(this.errorHandlerService.handleError))
    }

  

    

  /*   userSocketEmit(order: string, user: string) {
        let payload = { order, user }
        this.socket.emit('userSocket', payload)
    }

    userOnlineSocket() {
        return this.socket.fromEvent('userSocket').pipe(map((payload: any) => {
            if (this.userOnline._id === payload.user) {
                if (payload.order === 'delete' || payload.order === 'changeStatus') {
                    this.logout()
                } else if (payload.order === 'changeRole') {
                    if (this.userOnline.role === 'ADMIN_ROLE') {
                        this.userOnline.role = 'USER_ROLE'
                    } else {
                        this.userOnline.role = 'ADMIN_ROLE'
                    }
                    this.saveInStorage(this.userOnline._id, this.userOnline, this.token).then(() => {
                        this.router.navigate(['/dashboard'])
                    })
                }
            }
        }))
    } */


}

