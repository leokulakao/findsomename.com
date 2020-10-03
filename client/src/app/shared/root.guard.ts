import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthSandbox } from '../core/auth/auth.sandbox';

@Injectable({
    providedIn: 'root'
})
export class RootGuard implements CanActivate, CanActivateChild {
    user;
    constructor(
        private authSandbox: AuthSandbox,
        private router: Router
    ) {
        this.authSandbox.getUserData();
        this.authSandbox.getUserData$.subscribe(data => data ? this.user = data : null);
    }
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (!!localStorage.getItem('token') && !!this.user) {
            if (this.user.permission === 'root') {
                return of(true);
            }
        } else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return of(false);
        }
    }

    canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(router, state);
    }
}
