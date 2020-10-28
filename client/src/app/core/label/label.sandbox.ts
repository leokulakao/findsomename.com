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
    addLabelFail,
    getLabelById,
    getLabelByIdLoading,
    getLabelByIdLoaded,
    getLabelByIdFail,
    deleteLabel,
    deleteLabelLoading,
    deleteLabelLoaded,
    deleteLabelFail,
    editLabel,
    editLabelLoading,
    editLabelLoaded,
    editLabelFail
} from './reducer/label.selector';

import { Router } from '@angular/router';

@Injectable()
export class LabelSandbox {
    private subscriptions: Array<Subscription> = [];

    public getAllLabels$ = this.appState$.select(getAllLabels);
    public getAllLabelsLoading$ = this.appState$.select(getAllLabelsLoading);
    public getAllLabelsLoaded$ = this.appState$.select(getAllLabelsLoaded);
    public getAllLabelsFail$ = this.appState$.select(getAllLabelsFail);

    public getLabelById$ = this.appState$.select(getLabelById);
    public getLabelByIdLoading$ = this.appState$.select(getLabelByIdLoading);
    public getLabelByIdLoaded$ = this.appState$.select(getLabelByIdLoaded);
    public getLabelByIdFail$ = this.appState$.select(getLabelByIdFail);

    public addLabel$ = this.appState$.select(addLabel);
    public addLabelLoading$ = this.appState$.select(addLabelLoading);
    public addLabelLoaded$ = this.appState$.select(addLabelLoaded);
    public addLabelFail$ = this.appState$.select(addLabelFail);

    public deleteLabel$ = this.appState$.select(deleteLabel);
    public deleteLabelLoading$ = this.appState$.select(deleteLabelLoading);
    public deleteLabelLoaded$ = this.appState$.select(deleteLabelLoaded);
    public deleteLabelFail$ = this.appState$.select(deleteLabelFail);

    public editLabel$ = this.appState$.select(editLabel);
    public editLabelLoading$ = this.appState$.select(editLabelLoading);
    public editLabelLoaded$ = this.appState$.select(editLabelLoaded);
    public editLoadedFail$ = this.appState$.select(editLabelFail);

    constructor(
        private router: Router,
        protected appState$: Store<store.AppState>,
    ) { }

    public getAllLabels(params) {
        this.appState$.dispatch(new labelAction.GetAllLabelsAction(params));
    }

    public getLabelById(params) {
        this.appState$.dispatch(new labelAction.GetLabelByIdAction(params));
    }

    public addLabel(params) {
        this.appState$.dispatch(new labelAction.AddLabelAction(params));
    }

    public deleteLabel(params) {
        this.appState$.dispatch(new labelAction.DeleteLabelAction(params));
    }

    public editLabel(params) {
        this.appState$.dispatch(new labelAction.EditLabelAction(params));
    }

}
