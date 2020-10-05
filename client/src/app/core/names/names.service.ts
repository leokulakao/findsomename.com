import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UrlService } from '../../shared/url.service';

@Injectable()
export class NamesService {
    private url = this.urlService.getApiUrl();

    constructor(
        private http: HttpClient,
        private urlService: UrlService
    ) { }

    public getAllNames(params): Observable<any> {
        let options: any = {};
        options = params;
        return this.http.get(this.url + 'names/get-all-names', {
            params: options
        });
    }

    public editName(params): Observable<any> {
        return this.http.put(this.url + 'names/', params);
    }
}
