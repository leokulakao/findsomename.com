import * as actions from '../action/label.action';
import { LabelState, authrecord } from './label.state';

export const initialState: LabelState = (new authrecord() as unknown) as LabelState;

export function reducer(
    state = initialState,
    { type, payload }: any
): LabelState {
    if (!type) {
        return state;
    }
    switch (type) {
        case actions.ActionTypes.GET_ALL_LABELS: {
            return Object.assign({}, state, {
                allLabelsLoading: true,
                allLabelsLoaded: false,
                allLabelsFail: false
            });
        }
        case actions.ActionTypes.GET_ALL_LABELS_SUCCESS: {
            return Object.assign({}, state, {
                allLabels: payload,
                allLabelsLoading: false,
                allLabelsLoaded: true,
                allLabelsFail: false
            });
        }
        case actions.ActionTypes.GET_ALL_LABELS_FAIL: {
            return Object.assign({}, state, {
                allLabelsLoading: false,
                allLabelsLoaded: true,
                allLabelsFail: true
            });
        }
        default: {
            return state;
        }
    }
}

export const getAllLabels = (state: LabelState) => state.allLabels;
export const getAllLabelsLoading = (state: LabelState) => state.allLabelsLoading;
export const getAllLabelsLoaded = (state: LabelState) => state.allLabelsLoaded;
export const getAllLabelsFail = (state: LabelState) => state.allLabelsFail;
