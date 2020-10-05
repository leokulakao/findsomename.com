import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UrlService } from '../../shared/url.service';

@Injectable()
export class LinkService {
    private url = this.urlService.getApiUrl();

    constructor(
        private http: HttpClient,
        private urlService: UrlService
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

    public deleteLink(params): Observable<any> {
        return this.http.post(this.url + 'link/delete-link', params);
    }
}
