import { Component } from '@angular/core';
import { AuthSandbox } from 'src/app/core/auth/auth.sandbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'client';

    constructor(
        public authSandbox: AuthSandbox
    ) {
        this.authSandbox.checkToken();
        this.authSandbox.checkTokenFail$.subscribe(data => data ? this.authSandbox.logOut() : null);
    }
}
