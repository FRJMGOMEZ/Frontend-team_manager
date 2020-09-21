import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService:AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if (this.authService.userOnline) {
            const token = this.authService.userOnline['token'];
            const authReq = req.clone({
                setHeaders: { token: `${token}` }
            });
            return next.handle(authReq)
        }
        else {
            return next.handle(req);
        }
    }

}