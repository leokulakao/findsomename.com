import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Action } from '@ngrx/store';

export const ActionTypes = {
    ADD_LINK: '[add link] add link',
    ADD_LINK_SUCCESS: '[add link] add link success',
    ADD_LINK_FAIL: '[add link] add link fail'
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
