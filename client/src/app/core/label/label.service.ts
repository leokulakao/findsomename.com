import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UrlService } from '../../shared/url.service';

@Injectable()
export class LabelService {
    private url = this.urlService.getApiUrl();

    constructor(
        private http: HttpClient,
        private urlService: UrlService
    ) { }

    public getAllLabels(params): Observable<any> {
        let options: any = {};
        options = params;
        return this.http.get(this.url + 'label/get-all-labels', {
            params: options
        });
    }

    public getLabelById(params): Observable<any> {
        let options: any = {};
        options = params;
        return this.http.get(this.url + 'label/get-label-by-id', {
            params: options
        });
    }

    public addLabel(params): Observable<any> {
        return this.http.post(this.url + 'label/', params);
    }

    public deleteLabel(params): Observable<any> {
        return this.http.post(this.url + 'label/delete', params);
    }

}
