import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';
import { LoginResponseModel } from '../models/loginResponse.model';
import { AuthService } from '../auth.service';
import * as actions from './../action/auth.action';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        public router: Router,
        private authService: AuthService,
    ) { }

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LOGIN),
        map((action: actions.LoginAction) => action.payload),
        switchMap(state => {
            return this.authService.login(state).pipe(
                tap(response => {
                    console.log(response);
                }),
                map(loggedin => new actions.LoginSuccessAction(new LoginResponseModel(loggedin))
                ),
                catchError(error =>
                    of(new actions.LoginFailAction(new LoginResponseModel(error)))
                )
            );
        })
    );
}
