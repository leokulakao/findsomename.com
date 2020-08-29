import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthSandbox } from '../core/auth/auth.sandbox';

// import { AuthenticationService } from '../_services';

@Injectable()
export class ErrorUnauthorizedInterceptor implements HttpInterceptor {

    constructor(
        private authSandbox: AuthSandbox
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authSandbox.logOut();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
