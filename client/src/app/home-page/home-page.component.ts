import { Component, OnInit } from '@angular/core';
import { AuthSandbox } from '../core/auth/auth.sandbox';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
    constructor(
      public authSandbox: AuthSandbox
    ) { }

    ngOnInit(): void {}
}
