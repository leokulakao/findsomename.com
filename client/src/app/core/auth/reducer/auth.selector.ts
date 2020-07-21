import { createSelector } from 'reselect';

import * as fromAuth from './auth.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.auth;

export const getToken = createSelector(getState, fromAuth.getToken);
export const getTokenLoading = createSelector(getState, fromAuth.getTokenLoading);
export const getTokenLoaded = createSelector(getState, fromAuth.getTokenLoaded);
export const getTokenFail = createSelector(getState, fromAuth.getTokenFail);
