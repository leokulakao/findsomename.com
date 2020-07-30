import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as namesAction from './action/names.action';

import * as store from '../state.interface';
import {
    getAllNames,
    getAllNamesLoading,
    getAllNamesLoaded,
    getAllNamesFail
} from './reducer/names.selector';

@Injectable()
export class NamesSandbox {
    private subscriptions: Array<Subscription> = [];

    public getAllNames$ = this.appState$.select(getAllNames);
    public getAllNamesLoading$ = this.appState$.select(getAllNamesLoading);
    public getAllNamesLoaded$ = this.appState$.select(getAllNamesLoaded);
    public getAllNamesFail$ = this.appState$.select(getAllNamesFail);

    constructor(
        protected appState$: Store<store.AppState>,
    ) { }

    public getAllNames(params) {
        this.appState$.dispatch(new namesAction.GetAllNamesAction(params));
    }
}