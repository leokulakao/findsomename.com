import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Action } from '@ngrx/store';

export const ActionTypes = {
    ADD_LINK: '[add link] add link',
    ADD_LINK_SUCCESS: '[add link] add link success',
    ADD_LINK_FAIL: '[add link] add link fail',

    GET_LINK_BY_ID: '[link] get link by id',
    GET_LINK_BY_ID_SUCCESS: '[link] get link by id success',
    GET_LINK_BY_ID_FAIL: '[link] get link by id fail'
};

// add link
export class AddLinkAction implements Action {
    type = ActionTypes.ADD_LINK;
    constructor(public payload: any) { }
}
export class AddLinkSuccessAction implements Action {
    type = ActionTypes.ADD_LINK_SUCCESS;
    constructor(public payload: any) { }
}
export class AddLinkFailAction implements Action {
    type = ActionTypes.ADD_LINK_FAIL;
    constructor(public payload: any) { }
}

export class GetLinkByIdAction implements Action {
    type = ActionTypes.GET_LINK_BY_ID;
    constructor(public payload: any) { }
}
export class GetLinkByIdSuccessAcion implements Action {
    type = ActionTypes.GET_LINK_BY_ID_SUCCESS;
    constructor(public payload: any) { }
}

export class GetLinkByIdFailAction implements Action {
    type = ActionTypes.GET_LINK_BY_ID_FAIL;
    constructor(public payload: any) { }
}
