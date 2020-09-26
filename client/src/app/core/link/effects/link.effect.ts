import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';
import { LinkService } from '../link.service';
import * as actions from './../action/link.action';
import { Router } from '@angular/router';

@Injectable()
export class LinkEffects {
    constructor(
        private actions$: Actions,
        public router: Router,
        private linkService: LinkService,
    ) { }
    @Effect()
    addLink$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.ADD_LINK),
        map((action: actions.AddLinkAction) => action.payload),
        switchMap(state => {
            return this.linkService.addLink(state).pipe(
                map(data => new actions.AddLinkSuccessAction(data)
                ),
                catchError(error =>
                    of(new actions.AddLinkFailAction(error))
                )
            );
        })
    );

    @Effect()
    getLinkById$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.GET_LINK_BY_ID),
        map((action: actions.GetLinkByIdAction) => action.payload),
        switchMap(state => {
            return this.linkService.getLinkById(state).pipe(
                map(data => new actions.GetLinkByIdSuccessAcion(data)
                ),
                catchError(error =>
                    of(new actions.GetLinkByIdFailAction(error))
                )
            );
        })
    );

    @Effect()
    deleteLink$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.DELETE_LINK),
        map((action: actions.DeleteLinkAction) => action.payload),
        switchMap(state => {
            return this.linkService.deleteLink(state).pipe(
                map(data => new actions.DeleteLinkSuccessAction(data)
                ),
                catchError(error =>
                    of(new actions.DeleteLinkFailAction(error))
                )
            );
        })
    );
}
