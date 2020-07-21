import * as actions from '../action/auth.action';
import { AuthState, authrecord } from './auth.state';

export const initialState: AuthState = (new authrecord() as unknown) as AuthState;

export function reducer(
    state = initialState,
    { type, payload }: any
): AuthState {
    if (!type) {
        return state;
    }
    switch (type) {
        case actions.ActionTypes.LOGIN: {
            return Object.assign({}, state, {
                tokenLoading: true,
                tokenLoaded: false,
                tokenFail: false
            });
        }
        case actions.ActionTypes.LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                token: payload.token ? payload.token : '',
                tokenLoading: false,
                tokenLoaded: true,
                tokenFail: false
            });
        }
        case actions.ActionTypes.LOGIN_FAIL: {
            return Object.assign({}, state, {
                tokenLoading: false,
                tokenLoaded: true,
                tokenFail: true
            });
        }
        default: {
            return state;
        }
    }
}

export const getToken = (state: AuthState) => state.token;
export const getTokenLoading = (state: AuthState) => state.tokenLoading;
export const getTokenLoaded = (state: AuthState) => state.tokenLoaded;
export const getTokenFail = (state: AuthState) => state.tokenFail;
