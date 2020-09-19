import { createSelector } from 'reselect';

import * as fromLink from './link.reducer';
import { AppState } from '../../state.interface';
import { from } from 'rxjs';

export const getState = (State: AppState) => State.link;

export const addLink = createSelector(getState, fromLink.addLink);
export const addLinkLoading = createSelector(getState, fromLink.addLinkLoading);
export const addLinkLoaded = createSelector(getState, fromLink.addLinkLoaded);
export const addLinkFail = createSelector(getState, fromLink.addLinkFail);
