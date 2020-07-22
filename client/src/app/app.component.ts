import { Component } from '@angular/core';
import { AuthSandbox } from './core/auth/auth.sandbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'client';

    constructor(
        private authSandbox: AuthSandbox
    ) { }

    public logOut() {
        this.authSandbox.logOut();
    }
}
