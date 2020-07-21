import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModel } from './models/login.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    private url: 'http://localhost:5000/api/';

    constructor(
        private http: HttpClient
    ) { }

    public login(params: LoginModel): Observable<any> {
        return this.http.post(this.url + 'login', params);
    }
}
