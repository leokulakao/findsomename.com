import { Action } from '@ngrx/store';

export const ActionTypes = {
    GET_ALL_LABELS: '[labels] get all labels',
    GET_ALL_LABELS_SUCCESS: '[labels] get all labels success',
    GET_ALL_LABELS_FAIL: '[labels] get all labels fail',

    GET_LABEL_BY_ID: '[label] get label by id',
    GET_LABEL_BY_ID_SUCCESS: '[label] get label by id success',
    GET_LABEL_BY_ID_FAIL: '[label] get label by id fail',

    ADD_LABEL: '[label] add label',
    ADD_LABEL_SUCCESS: '[label] add label success',
    ADD_LABEL_FAIL: '[label] add label fail',

    DELETE_LABEL: '[label] delete label',
    DELETE_LABEL_SUCCESS: '[label] delete label success',
    DELETE_LABEL_FAIL: '[label] delete label fail'
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

export class GetLabelByIdAction implements Action {
    type = ActionTypes.GET_LABEL_BY_ID;
    constructor(public payload: any) { }
}
export class GetLabelByIdSuccessAction implements Action {
    type = ActionTypes.GET_LABEL_BY_ID_SUCCESS;
    constructor(public payload: any) { }
}
export class GetLabelByIdFailAction implements Action {
    type = ActionTypes.GET_LABEL_BY_ID_FAIL;
    constructor(public payload: any) { }
}

export class AddLabelAction implements Action {
    type = ActionTypes.ADD_LABEL;
    constructor(public payload: any) { }
}
export class AddLabelSuccessAction implements Action {
    type = ActionTypes.ADD_LABEL_SUCCESS;
    constructor(public payload: any) { }
}
export class AddLabelFailAction implements Action {
    type = ActionTypes.ADD_LABEL_FAIL;
    constructor(public payload: any) { }
}

export class DeleteLabelAction implements Action {
    type = ActionTypes.DELETE_LABEL;
    constructor(public payload: any) { }
}
export class DeleteLabelSuccessAction implements Action {
    type = ActionTypes.DELETE_LABEL_SUCCESS;
    constructor(public payload: any) { }
}
export class DeleteLabelFailAction implements Action {
    type = ActionTypes.DELETE_LABEL_FAIL;
    constructor(public payload: any) { }
}
