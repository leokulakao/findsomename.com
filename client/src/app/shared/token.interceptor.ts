import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthSandbox } from '../core/auth/auth.sandbox';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private authSandbox: AuthSandbox
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!!localStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: localStorage.getItem('token')
                }
            });
        }
        return next.handle(req);
    }
}
