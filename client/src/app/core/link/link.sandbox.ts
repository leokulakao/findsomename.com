import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as linkAction from './action/link.action';

import * as store from '../state.interface';
import {
    addLink,
    addLinkLoading,
    addLinkLoaded,
    addLinkFail,
    getLinkById,
    getLinkByIdLoading,
    getLinkByIdLoaded,
    getLinkByIdFail
} from './reducer/link.selector';

@Injectable()
export class LinkSandbox {
    private subscriptions: Array<Subscription> = [];

    public addLink$ = this.appState$.select(addLink);
    public addLinkLoading$ = this.appState$.select(addLinkLoading);
    public addLinkLoaded$ = this.appState$.select(addLinkLoaded);
    public addLinkFail$ = this.appState$.select(addLinkFail);

    public getLinkById$ = this.appState$.select(getLinkById);
    public getLinkByIdLoading$ = this.appState$.select(getLinkByIdLoading);
    public getLinkByIdLoaded$ = this.appState$.select(getLinkByIdLoaded);
    public getLinkByIdFail$ = this.appState$.select(getLinkByIdFail);

    constructor(
        protected appState$: Store<store.AppState>,
    ) { }

    public addLink(params) {
        this.appState$.dispatch(new linkAction.AddLinkAction(params));
    }

    public getLinkById(params) {
        this.appState$.dispatch(new linkAction.GetLinkByIdAction(params));
    }

}
