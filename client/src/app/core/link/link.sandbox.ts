import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as linkAction from './action/link.action';

import * as store from '../state.interface';
import {
    addLink,
    addLinkLoading,
    addLinkLoaded,
    addLinkFail
} from './reducer/link.selector';

@Injectable()
export class LinkSandbox {
    private subscriptions: Array<Subscription> = [];

    public addLink$ = this.appState$.select(addLink);
    public addLinkLoading$ = this.appState$.select(addLinkLoading);
    public addLinkLoaded$ = this.appState$.select(addLinkLoaded);
    public addLinkFail$ = this.appState$.select(addLinkFail);

    constructor(
        protected appState$: Store<store.AppState>,
    ) { }

    public addLink(params) {
        this.appState$.dispatch(new linkAction.AddLinkAction(params));
    }

}
