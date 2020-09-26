import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class LinkService {
    private url = 'http://localhost:5000/api/';

    constructor(
        private http: HttpClient
    ) { }

    public addLink(params): Observable<any> {
        return this.http.post(this.url + 'link/', params);
    }

    public getLinkById(params): Observable<any> {
        let options: any = {};
        options = params;
        return this.http.get(this.url + 'link/get-link-by-id', {
            params: options
        });
    }
}
