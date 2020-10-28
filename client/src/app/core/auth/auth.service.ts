import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModel } from './models/login.model';
import { Observable } from 'rxjs';
import { RegisterModel } from './models/register.model';

import { UrlService } from '../../shared/url.service';

@Injectable()
export class AuthService {
    private url = this.urlService.getApiUrl();

    constructor(
        private http: HttpClient,
        private urlService: UrlService
    ) { }

    public login(params: LoginModel): Observable<any> {
        return this.http.post(this.url + 'auth/login', params);
    }

    public register(params: RegisterModel): Observable<any> {
        return this.http.post(this.url + 'auth/register', params);
    }

    public checkToken(): Observable<any> {
        return this.http.post(this.url + 'auth/check-token', {});
    }

    public getUserData(): Observable<any> {
        return this.http.get(this.url + 'auth/');
    }

    public getAllUsers(params): Observable<any> {
        let options: any = {};
        options = params;
        return this.http.get(this.url + 'auth/get-users', {
            params: options
        });
    }

    public editUser(params): Observable<any> {
        return this.http.post(this.url + 'auth/update-user', params);
    }

    public deleteUser(params): Observable<any> {
        return this.http.post(this.url + 'auth/', params);
    }
}
