import { Action } from '@ngrx/store';

export const ActionTypes = {
    GET_ALL_LABELS: '[labels] get all labels',
    GET_ALL_LABELS_SUCCESS: '[labels] get all labels success',
    GET_ALL_LABELS_FAIL: '[labels] get all labels fail',
};

export class GetAllLabelsAction implements Action {
    type = ActionTypes.GET_ALL_LABELS;
    constructor(public payload: any) { }
}
export class GetAllLabelsSuccessAction implements Action {
    type = ActionTypes.GET_ALL_LABELS_SUCCESS;
    constructor(public payload: any) { }
}
export class GetAllLabelsFailAction implements Action {
    type = ActionTypes.GET_ALL_LABELS_FAIL;
    constructor(public payload: any) { }
}
