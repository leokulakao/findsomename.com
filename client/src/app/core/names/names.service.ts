import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class NamesService {
    private url = 'http://localhost:5000/api/';

    constructor(
        private http: HttpClient
    ) { }

    public getAllNames(params): Observable<any> {
        console.log(params);
        return this.http.get(this.url + 'names/getAllNames', params);
    }
}
