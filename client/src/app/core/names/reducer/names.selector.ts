import { createSelector } from 'reselect';

import * as fromNames from './names.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.names;

export const getAllNames = createSelector(getState, fromNames.getAllNames);
export const getAllNamesLoading = createSelector(getState, fromNames.getAllNamesLoading);
export const getAllNamesLoaded = createSelector(getState, fromNames.getAllNamesLoaded);
export const getAllNamesFail = createSelector(getState, fromNames.getAllNamesFail);
