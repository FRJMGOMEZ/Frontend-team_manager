import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from '../providers/auth.service';
import { LoadSpinnerService } from '../components/load-spinner/load-spinner.service';
import { ErrorHandlerService } from '../providers/error-handler.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private loadSpinnerService: LoadSpinnerService, private errorHandlerService:ErrorHandlerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
       req.method === 'GET' ? this.loadSpinnerService.state.next(true) : null;
        if (this.authService.userOnline) {
            const token = this.authService.userOnline['token'];
            const authReq = req.clone({
                setHeaders: { token: `${token}` }
            });
            return this.handle(authReq,next);
        }
        else {
            return this.handle(req,next);
        }
    }

    handle(req: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            tap((res)=>{
             res.type !== 0 && req.method === 'GET' ? this.loadSpinnerService.state.next(false) : null;
           }),
           catchError((err) => this.errorHandlerService.handleError(err))
           )
    }
}