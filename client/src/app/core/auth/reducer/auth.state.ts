import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
    token: string;
    tokenLoading: boolean;
    tokenLoaded: boolean;
    tokenFail: boolean;

    register: any;
    registerLoading: boolean;
    registerLoaded: boolean;
    registerFail: boolean;

    userData: any;
    userDataLoading: boolean;
    userDataLoaded: boolean;
    userDataFail: boolean;

    allUsers: any;
    allUsersLoading: boolean;
    allUsersLoaded: boolean;
    allUsersFail: boolean;
}

export const authrecord = Record({
    token: '',
    tokenLoading: false,
    tokenLoaded: false,
    tokenFail: false,

    register: '',
    registerLoading: false,
    registerLoaded: false,
    registerFail: false,

    userData: [],
    userDataLoading: false,
    userDataLoaded: false,
    userDataFail: false,

    allUsers: [],
    allUsersLoading: false,
    allUsersLoaded: false,
    allUsersFail: false
});
