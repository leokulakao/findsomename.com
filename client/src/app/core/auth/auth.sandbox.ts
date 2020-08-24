import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as authAction from './action/auth.action';

import * as store from '../state.interface';
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';
import { GetUserDataModel } from './models/getUserData.model';
import {
    getToken,
    getTokenLoading,
    getTokenLoaded,
    getTokenFail,
    getRegister,
    getRegisterLoading,
    getRegisterLoaded,
    getRegisterFail,
    getUserData,
    getUserDataLoading,
    getUserDataLoaded,
    getUserDataFail
} from './reducer/auth.selector';

import { Router } from '@angular/router';

@Injectable()
export class AuthSandbox {
    private subscriptions: Array<Subscription> = [];

    // login -> token
    public token$ = this.appState$.select(getToken);
    public tokenLoading$ = this.appState$.select(getTokenLoading);
    public tokenLoaded$ = this.appState$.select(getTokenLoaded);
    public tokenFail$ = this.appState$.select(getTokenFail);

    // register
    public register$ = this.appState$.select(getRegister);
    public registerLoading$ = this.appState$.select(getRegisterLoading);
    public registerLoaded$ = this.appState$.select(getRegisterLoaded);
    public registerFail$ = this.appState$.select(getRegisterFail);

    public getUserData$ = this.appState$.select(getUserData);
    public getUserDataLoading$ = this.appState$.select(getUserDataLoading);
    public getUserDataLoaded$ = this.appState$.select(getUserDataLoaded);
    public getUserDataFail$ = this.appState$.select(getUserDataFail);

    constructor(
        private router: Router,
        protected appState$: Store<store.AppState>,
    ) { }

    // login -> token
    public login(params: LoginModel) {
        this.appState$.dispatch(new authAction.LoginAction(new LoginModel(params)));
    }

    // register
    public register(params: RegisterModel) {
        this.appState$.dispatch(new authAction.RegisterAction(new RegisterModel(params)));
    }

    public getUserData() {
        this.appState$.dispatch(new authAction.GetUserDataAction());
    }

    // logOut
    public logOut() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/']);
    }

    // isAuthenticated
    public isAuthenticated(): boolean {
      return !!localStorage.getItem('token') ? true : false;
    }
}
