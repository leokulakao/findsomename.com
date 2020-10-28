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

    tokenChecked: string;
    tokenCheckedLoading: boolean;
    tokenCheckedLoaded: boolean;
    tokenCheckedFail: boolean;

    userData: any;
    userDataLoading: boolean;
    userDataLoaded: boolean;
    userDataFail: boolean;

    allUsers: any;
    allUsersLoading: boolean;
    allUsersLoaded: boolean;
    allUsersFail: boolean;

    editUser: any;
    editUserLoading: boolean;
    editUserLoaded: boolean;
    editUserFail: boolean;

    deleteUser: any;
    deleteUserLoading: boolean;
    deleteUserLoaded: boolean;
    deleteUserFail: boolean;
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

    tokenChecked: '',
    tokenCheckedLoading: false,
    tokenCheckedLoaded: false,
    tokenCheckedFail: false,

    userData: [],
    userDataLoading: false,
    userDataLoaded: false,
    userDataFail: false,

    allUsers: [],
    allUsersLoading: false,
    allUsersLoaded: false,
    allUsersFail: false,

    editUser: [],
    editUserLoading: false,
    editUserLoaded: false,
    editUserFail: false,

    deleteUser: [],
    deleteUserLoading: false,
    deleteUserLoaded: false,
    deleteUserFail: false
});
