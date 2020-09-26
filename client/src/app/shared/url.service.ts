import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlService {

    constructor(
        private router: Router
    ) { }

    public getUrl() {
        return window.location.href.slice(0, window.location.href.length - this.router.url.length);
    }

}
