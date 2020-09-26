import * as actions from '../action/link.action';
import { LinkState, authrecord } from './link.state';
import { LinkModel } from '../models/link.model';

export const initialState: LinkState = (new authrecord() as unknown) as LinkState;

export function reducer(
    state = initialState,
    { type, payload }: any
): LinkState {
    if (!type) {
        return state;
    }
    switch (type) {
        case actions.ActionTypes.ADD_LINK: {
            return Object.assign({}, state, {
                addLinkLoading: true,
                addLinkLoaded: false,
                addLinkFail: false
            });
        }
        case actions.ActionTypes.ADD_LINK_SUCCESS: {
            return Object.assign({}, state, {
                addLink: payload,
                addLinkLoading: false,
                addLinkLoaded: true,
                addLinkFail: false
            });
        }
        case actions.ActionTypes.ADD_LINK_FAIL: {
            return Object.assign({}, state, {
                addLinkLoading: false,
                addLinkLoaded: true,
                addLinkFail: true
            });
        }

        case actions.ActionTypes.GET_LINK_BY_ID: {
            return Object.assign({}, state, {
                getLinkByIdLoading: true,
                getLinkByIdLoaded: false,
                getLinkByIdFail: false
            });
        }
        case actions.ActionTypes.GET_LINK_BY_ID_SUCCESS: {
            const result = payload.data ? payload.data.map(link => new LinkModel(link)) : [];
            return Object.assign({}, state, {
                getLinkById: result,
                getLinkByIdLoading: false,
                getLinkByIdLoaded: true,
                getLinkByIdFail: false
            });
        }
        case actions.ActionTypes.GET_LINK_BY_ID_FAIL: {
            return Object.assign({}, state, {
                getLinkByIdLoading: false,
                getLinkByIdLoaded: true,
                getLinkByIdFail: true
            });
        }

        default: {
            return state;
        }
    }
}

export const addLink = (state: LinkState) => state.addLink;
export const addLinkLoading = (state: LinkState) => state.addLinkLoading;
export const addLinkLoaded = (state: LinkState) => state.addLinkLoaded;
export const addLinkFail = (state: LinkState) => state.addLinkFail;

export const getLinkById = (state: LinkState) => state.getLinkById;
export const getLinkByIdLoading = (state: LinkState) => state.getLinkByIdLoading;
export const getLinkByIdLoaded = (state: LinkState) => state.getLinkByIdLoaded;
export const getLinkByIdFail = (state: LinkState) => state.getLinkByIdFail;
