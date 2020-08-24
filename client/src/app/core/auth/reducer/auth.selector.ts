import { createSelector } from 'reselect';

import * as fromAuth from './auth.reducer';
import { AppState } from '../../state.interface';
import { formatCurrency } from '@angular/common';

export const getState = (State: AppState) => State.auth;

export const getToken = createSelector(getState, fromAuth.getToken);
export const getTokenLoading = createSelector(getState, fromAuth.getTokenLoading);
export const getTokenLoaded = createSelector(getState, fromAuth.getTokenLoaded);
export const getTokenFail = createSelector(getState, fromAuth.getTokenFail);

export const getRegister = createSelector(getState, fromAuth.getRegister);
export const getRegisterLoading = createSelector(getState, fromAuth.getRegisterLoading);
export const getRegisterLoaded = createSelector(getState, fromAuth.getRegisterLoaded);
export const getRegisterFail = createSelector(getState, fromAuth.getRegisterFail);

export const getUserData = createSelector(getState, fromAuth.getUserData);
export const getUserDataLoading = createSelector(getState, fromAuth.getUserDataLoading);
export const getUserDataLoaded = createSelector(getState, fromAuth.getUserDataLoaded);
export const getUserDataFail = createSelector(getState, fromAuth.getUserDataFail);
