import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';
import { NamesService } from '../names.service';
import * as actions from './../action/names.action';
import { Router } from '@angular/router';
import { NamesResponceModel } from '../models/namesResponce.model';

@Injectable()
export class NamesEffects {
    constructor(
        private actions$: Actions,
        public router: Router,
        private namesService: NamesService,
    ) { }

    @Effect()
    getAllNames$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.GET_ALL_NAMES),
        map((action: actions.GetAllNamesAction) => action.payload),
        switchMap(state => {
            return this.namesService.getAllNames(state).pipe(
                tap(response => console.log(response)),
                map(data => new actions.GetAllNamesSuccessAction(new NamesResponceModel(data))
                ),
                catchError(error =>
                    of(new actions.GetAllNamesFailAction(error))
                )
            );
        })
    );
}
