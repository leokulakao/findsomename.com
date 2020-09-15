import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';
import { LoginResponseModel } from '../models/loginResponse.model';
import { RegisterResponseModel } from '../models/registerResponse.model';
import { AuthService } from '../auth.service';
import * as actions from './../action/auth.action';
import { Router } from '@angular/router';
import { AuthSandbox } from '../auth.sandbox';
import { AllUsersResponceModel } from '../models/allUsersResponce.model';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        public router: Router,
        private authService: AuthService,
        private authSandbox: AuthSandbox
    ) { }

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LOGIN),
        map((action: actions.LoginAction) => action.payload),
        switchMap(state => {
            return this.authService.login(state).pipe(
                tap(response => {
                    localStorage.setItem('token', new LoginResponseModel(response).token);
                    this.authSandbox.getUserData();
                    this.router.navigate(['/dashboard']);
                }),
                map(loggedin => new actions.LoginSuccessAction(new LoginResponseModel(loggedin))
                ),
                catchError(error =>
                    of(new actions.LoginFailAction(error))
                )
            );
        })
    );

    @Effect()
    register$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.REGISTER),
        map((action: actions.RegisterAction) => action.payload),
        switchMap(state => {
            return this.authService.register(state).pipe(
                tap(response => {
                    this.router.navigate(['/login']);
                }),
                map(registeredin => new actions.RegisterSuccessAction(new RegisterResponseModel(registeredin))
                ),
                catchError(error =>
                    of(new actions.RegisterFailAction(error))
                )
            );
        })
    );

    @Effect()
    getUserData$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.USER_DATA),
        map((action: actions.GetUserDataAction) => action),
        switchMap(state => {
            return this.authService.getUserData().pipe(
                map(data => new actions.GetUserDataSuccessAction(data)
                ),
                catchError(error =>
                    of(new actions.GetUserDataFailAction(error))
                )
            );
        })
    );

    @Effect()
    getAllUsers$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.ALL_USERS),
        map((action: actions.GetAllUsersAction) => action),
        switchMap(state => {
            return this.authService.getAllUsers(state).pipe(
                map(data => new actions.GetAllUsersSuccessAction(new AllUsersResponceModel(data))
                ),
                catchError(error =>
                    of(new actions.GetAllUsersFailAction(error))
                )
            );
        })
    );

    @Effect()
    editUser$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.EDIT_USER),
        map((action: actions.EditUserAction) => action.payload),
        switchMap(state => {
            return this.authService.editUser(state).pipe(
                map(data => new actions.EditUserSuccessAction(data)
                ),
                catchError(error =>
                    of(new actions.EditUserFailAction(error))
                )
            );
        })
    );

    @Effect()
    deleteUser$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.DELETE_USER),
        map((action: actions.DeleteUserAction) => action.payload),
        switchMap(state => {
            return this.authService.deleteUser(state).pipe(
                map(data => new actions.DeleteUserSuccessAction(data)
                ),
                catchError(error =>
                    of(new actions.DeleteUserFailAction(error))
                )
            );
        })
    );
}
