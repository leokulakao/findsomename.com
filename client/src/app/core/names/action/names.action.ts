import { Action } from '@ngrx/store';
import { NamesResponceModel } from '../models/namesResponce.model';

export const ActionTypes = {
    GET_ALL_NAMES: '[names] get all names',
    GET_ALL_NAMES_SUCCESS: '[names] get all names success',
    GET_ALL_NAMES_FAIL: '[names] get all names fail fail',

    EDIT_NAME: '[edit name] edit name',
    EDIT_NAME_SUCCESS: '[edit name] edit name success',
    EDIT_NAME_FAIL: '[edit name] edit name fail'
};

// get all names
export class GetAllNamesAction implements Action {
    type = ActionTypes.GET_ALL_NAMES;
    constructor(public payload: any) { }
}
export class GetAllNamesSuccessAction implements Action {
    type = ActionTypes.GET_ALL_NAMES_SUCCESS;
    constructor(public payload: NamesResponceModel) { }
}
export class GetAllNamesFailAction implements Action {
    type = ActionTypes.GET_ALL_NAMES_FAIL;
    constructor(public payload: any) { }
}
export class EditNameAction implements Action {
    type = ActionTypes.EDIT_NAME;
    constructor(public payload: any) { }
}
export class EditNameSuccessAction implements Action {
    type = ActionTypes.EDIT_NAME_SUCCESS;
    constructor(public payload: any) { }
}
export class EditNameFailAction implements Action {
    type = ActionTypes.EDIT_NAME_FAIL;
    constructor(public payload: any) { }
}
