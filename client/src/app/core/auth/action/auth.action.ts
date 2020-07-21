import { Action } from '@ngrx/store';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { LoginResponseModel } from '../models/loginResponse.model';

export const ActionTypes = {
    LOGIN: '[login] login',
    LOGIN_SUCCESS: '[login] login success',
    LOGIN_FAIL: '[login] login fail',

    REGISTER: '[register] register',
    REGISTER_SUCCESS: '[register] register success',
    REGISTER_FAIL: '[register] register fail'
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
