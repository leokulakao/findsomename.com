import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthSandbox } from '../core/auth/auth.sandbox';
import { LoginModel } from '../core/auth/models/login.model';

import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

    public loginForm: FormGroup;
    public email: FormControl;
    public password: FormControl;

    private subscriptions: Subscription[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private authSandbox: AuthSandbox
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.initSubs();
    }

    private initForm() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);

        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    }

    private initSubs() {
        this.subscriptions.push(this.authSandbox.token$.subscribe(token => {
            console.log(token);
        }));
    }

    public onSubmit() {
        const params: any = {};
        params.email = this.email.value ? this.email.value : '';
        params.password = this.password.value ? this.password.value : '';
        this.authSandbox.login(params);
    }

}
