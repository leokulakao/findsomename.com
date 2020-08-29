import { Action } from '@ngrx/store';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { LoginResponseModel } from '../models/loginResponse.model';
import { EditUserModel } from '../models/editUser.model';

export const ActionTypes = {
    LOGIN: '[login] login',
    LOGIN_SUCCESS: '[login] login success',
    LOGIN_FAIL: '[login] login fail',

    REGISTER: '[register] register',
    REGISTER_SUCCESS: '[register] register success',
    REGISTER_FAIL: '[register] register fail',

    USER_DATA: '[user data] user data',
    USER_DATA_SUCCESS: '[user data] user data success',
    USER_DATA_FAIL: '[user data] user data fail',

    ALL_USERS: '[all users] all users',
    ALL_USERS_SUCCESS: '[all users] all users success',
    ALL_USERS_FAIL: '[all users] all users fail',

    EDIT_USER: '[edit user] edit user',
    EDIT_USER_SUCCESS: '[edit user] edit user success',
    EDIT_USER_FAIL: '[edit user] edit user fail'
};

// login
export class LoginAction implements Action {
    type = ActionTypes.LOGIN;
    constructor(public payload: LoginModel) { }
}
export class LoginSuccessAction implements Action {
    type = ActionTypes.LOGIN_SUCCESS;
    constructor(public payload: LoginResponseModel) { }
}
export class LoginFailAction implements Action {
    type = ActionTypes.LOGIN_FAIL;
    constructor(public payload: any) { }
}

// register
export class RegisterAction implements Action {
    type = ActionTypes.REGISTER;
    constructor(public payload: RegisterModel) { }
}
export class RegisterSuccessAction implements Action {
    type = ActionTypes.REGISTER_SUCCESS;
    constructor(public payload: any) { }
}
export class RegisterFailAction implements Action {
    type = ActionTypes.REGISTER_FAIL;
    constructor(public payload: any) { }
}

// get user data
export class GetUserDataAction implements Action {
    type = ActionTypes.USER_DATA;
    constructor() { }
}
export class GetUserDataSuccessAction implements Action {
    type = ActionTypes.USER_DATA_SUCCESS;
    constructor(public payload: any) { }
}
export class GetUserDataFailAction implements Action {
    type = ActionTypes.USER_DATA_FAIL;
    constructor(public payload: any) { }
}

// get all users
export class GetAllUsersAction implements Action {
    type = ActionTypes.ALL_USERS;
    constructor(public payload: any) { }
}
export class GetAllUsersSuccessAction implements Action {
    type = ActionTypes.ALL_USERS_SUCCESS;
    constructor(public payload: any) { }
}
export class GetAllUsersFailAction implements Action {
    type = ActionTypes.ALL_USERS_FAIL;
    constructor(public payload: any) { }
}

export class EditUserAction implements Action {
    type = ActionTypes.EDIT_USER;
    constructor(public payload: EditUserModel) { }
}
export class EditUserSuccessAction implements Action {
    type = ActionTypes.EDIT_USER_SUCCESS;
    constructor(public payload: any) { }
}
export class EditUserFailAction implements Action {
    type = ActionTypes.EDIT_USER_FAIL;
    constructor(public payload: any) { }
}
