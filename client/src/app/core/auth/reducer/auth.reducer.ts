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

        case actions.ActionTypes.REGISTER: {
            return Object.assign({}, state, {
                tokenLoading: true,
                tokenLoaded: false,
                tokenFail: false
            });
        }
        case actions.ActionTypes.REGISTER_SUCCESS: {
            return Object.assign({}, state, {
                token: payload.token ? payload.token : '',
                tokenLoading: false,
                tokenLoaded: true,
                tokenFail: false
            });
        }
        case actions.ActionTypes.REGISTER_FAIL: {
            return Object.assign({}, state, {
                tokenLoading: false,
                tokenLoaded: false,
                tokenFail: true
            });
        }

        case actions.ActionTypes.USER_DATA: {
            return Object.assign({}, state, {
                userDataLoading: true,
                userDataLoaded: false,
                userDataFail: false
            });
        }
        case actions.ActionTypes.USER_DATA_SUCCESS: {
            return Object.assign({}, state, {
                userData: payload.data,
                userDataLoading: false,
                userDataLoaded: true,
                userDataFail: false
            });
        }
        case actions.ActionTypes.USER_DATA_FAIL: {
            return Object.assign({}, state, {
                userDataLoading: false,
                userDataLoaded: false,
                userDataFail: true
            });
        }

        case actions.ActionTypes.ALL_USERS: {
            return Object.assign({}, state, {
                allUsersLoading: true,
                allUsersLoaded: false,
                allUsersFail: false
            });
        }
        case actions.ActionTypes.ALL_USERS_SUCCESS: {
            return Object.assign({}, state, {
                allUsers: payload,
                allUsersLoading: false,
                allUsersLoaded: true,
                allUsersFail: false
            });
        }
        case actions.ActionTypes.ALL_USERS_FAIL: {
            return Object.assign({}, state, {
                allUsersLoading: false,
                allUsersLoaded: false,
                allUsersFail: true
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

export const getRegister = (state: AuthState) => state.register;
export const getRegisterLoading = (state: AuthState) => state.registerLoading;
export const getRegisterLoaded = (state: AuthState) => state.registerLoaded;
export const getRegisterFail = (state: AuthState) => state.registerFail;

export const getUserData = (state: AuthState) => state.userData;
export const getUserDataLoading = (state: AuthState) => state.userDataLoading;
export const getUserDataLoaded = (state: AuthState) => state.userDataLoaded;
export const getUserDataFail = (state: AuthState) => state.userDataFail;

export const getAllUsers = (state: AuthState) => state.allUsers;
export const getAllUsersLoading = (state: AuthState) => state.allUsersLoading;
export const getAllUsersLoaded = (state: AuthState) => state.allUsersLoaded;
export const getAllUsersFail = (state: AuthState) => state.allUsersFail;
