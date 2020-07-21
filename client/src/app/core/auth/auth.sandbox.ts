/*
 * galvintec
 * version 3.0
 * http://www.galvintec.com
 *
 * Copyright (c) 2019 galvintec ltd
 * Author galvintec ltd <support@galvintec.com>
 * Licensed under the MIT license.
 */
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as authAction from './action/auth.action';

import * as store from '../state.interface';
import { LoginModel } from './models/login.model';
import {
    getToken,
    getTokenLoading,
    getTokenLoaded,
    getTokenFail
} from './reducer/auth.selector';

@Injectable()
export class AuthSandbox {
    private subscriptions: Array<Subscription> = [];

    // login
    public token$ = this.appState$.select(getToken);
    public tokenLoading$ = this.appState$.select(getTokenLoading);
    public tokenLoaded$ = this.appState$.select(getTokenLoaded);
    public tokenFail$ = this.appState$.select(getTokenFail);

    constructor(
        protected appState$: Store<store.AppState>,
    ) {
        this.registerEvents();
    }

    // login -> token
    public login(params: LoginModel) {
        this.appState$.dispatch(new authAction.LoginAction(new LoginModel(params)));
    }


    public registerEvents() {
        this.subscriptions.push();
    }

    // public unsubscribeEvents() {
    //     this.subscriptions.forEach(each => {
    //         each.unsubscribe();
    //     });
    // }
}
