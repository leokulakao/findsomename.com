import * as actions from '../action/link.action';
import { LinkState, authrecord } from './link.state';

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

        default: {
            return state;
        }
    }
}

export const addLink = (state: LinkState) => state.addLink;
export const addLinkLoading = (state: LinkState) => state.addLinkLoading;
export const addLinkLoaded = (state: LinkState) => state.addLinkLoaded;
export const addLinkFail = (state: LinkState) => state.addLinkFail;
