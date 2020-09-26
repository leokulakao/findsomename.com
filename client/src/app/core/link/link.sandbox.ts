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
    getLinkByIdFail,
    deleteLink,
    deleteLinkLoading,
    deleteLinkLoaded,
    deleteLinkFail
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

    public deleteLink$ = this.appState$.select(deleteLink);
    public deleteLinkLoading$ = this.appState$.select(deleteLinkLoading);
    public deleteLinkLoaded$ = this.appState$.select(deleteLinkLoaded);
    public deleteLinkFail$ = this.appState$.select(deleteLinkFail);

    constructor(
        protected appState$: Store<store.AppState>,
    ) { }

    public addLink(params) {
        this.appState$.dispatch(new linkAction.AddLinkAction(params));
    }

    public getLinkById(params) {
        this.appState$.dispatch(new linkAction.GetLinkByIdAction(params));
    }

    public deleteLink(params) {
        this.appState$.dispatch(new linkAction.DeleteLinkAction(params));
    }

}
