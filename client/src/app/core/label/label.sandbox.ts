import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as labelAction from './action/label.action';

import * as store from '../state.interface';
import {
    getAllLabels,
    getAllLabelsLoading,
    getAllLabelsLoaded,
    getAllLabelsFail,
    addLabel,
    addLabelLoading,
    addLabelLoaded,
    addLabelFail
} from './reducer/label.selector';

import { Router } from '@angular/router';

@Injectable()
export class LabelSandbox {
    private subscriptions: Array<Subscription> = [];

    public getAllLabels$ = this.appState$.select(getAllLabels);
    public getAllLabelsLoading$ = this.appState$.select(getAllLabelsLoading);
    public getAllLabelsLoaded$ = this.appState$.select(getAllLabelsLoaded);
    public getAllLabelsFail$ = this.appState$.select(getAllLabelsFail);

    public addLabel$ = this.appState$.select(addLabel);
    public addLabelLoading$ = this.appState$.select(addLabelLoading);
    public addLabelLoaded$ = this.appState$.select(addLabelLoaded);
    public addLabelFail$ = this.appState$.select(addLabelFail);

    constructor(
        private router: Router,
        protected appState$: Store<store.AppState>,
    ) { }

    public getAllLabels(params) {
        this.appState$.dispatch(new labelAction.GetAllLabelsAction(params));
    }

    public addLabel(params) {
        this.appState$.dispatch(new labelAction.AddLabelAction(params));
    }

}
