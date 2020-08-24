import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModel } from './models/login.model';
import { Observable } from 'rxjs';
import { RegisterModel } from './models/register.model';
import { GetUserDataModel } from './models/getUserData.model';

@Injectable()
export class AuthService {
    private url = 'http://localhost:5000/api/';

    constructor(
        private http: HttpClient
    ) { }

    public login(params: LoginModel): Observable<any> {
        return this.http.post(this.url + 'auth/login', params);
    }

    public register(params: RegisterModel): Observable<any> {
        return this.http.post(this.url + 'auth/register', params);
    }

    public getUserData(): Observable<any> {
        return this.http.get(this.url + 'auth/');
    }
}
