import * as actions from '../action/names.action';
// import { NamesState, authrecord } from './names.state';
import { NamesState, authrecord } from './names.state';

export const initialState: NamesState = (new authrecord() as unknown) as NamesState;

export function reducer(
    state = initialState,
    { type, payload }: any
): NamesState {
    if (!type) {
        return state;
    }
    switch (type) {
        case actions.ActionTypes.GET_ALL_NAMES: {
            return Object.assign({}, state, {
                allNamesLoading: true,
                allNamesLoaded: false,
                allNamesFail: false
            });
        }
        case actions.ActionTypes.GET_ALL_NAMES_SUCCESS: {
            return Object.assign({}, state, {
                allName: payload,
                allNamesLoading: false,
                allNamesLoaded: true,
                allNamesFail: false
            });
        }
        case actions.ActionTypes.GET_ALL_NAMES_FAIL: {
            return Object.assign({}, state, {
                allNamesLoading: false,
                allNamesLoaded: true,
                allNamesFail: true
            });
        }

        default: {
            return state;
        }
    }
}

export const getAllNames = (state: NamesState) => state.allName;
export const getAllNamesLoading = (state: NamesState) => state.allNamesLoading;
export const getAllNamesLoaded = (state: NamesState) => state.allNamesLoaded;
export const getAllNamesFail = (state: NamesState) => state.allNamesFail;
