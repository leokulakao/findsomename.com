import * as actions from '../action/label.action';
import { LabelState, authrecord } from './label.state';

import { LabelModel } from '../models/label.model';

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
            const result = payload.data ? payload.data.map(label => new LabelModel(label)) : [];
            return Object.assign({}, state, {
                allLabels: result,
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

        case actions.ActionTypes.ADD_LABEL: {
            return Object.assign({}, state, {
                addedLabelLoading: true,
                addedLabelLoaded: false,
                addedLabelFail: false
            });
        }
        case actions.ActionTypes.ADD_LABEL_SUCCESS: {
            return Object.assign({}, state, {
                addedLabel: payload,
                addedLabelLoading: false,
                addedLabelLoaded: true,
                addedLabelFail: false
            });
        }
        case actions.ActionTypes.ADD_LABEL_FAIL: {
            return Object.assign({}, state, {
                addedLabelLoading: false,
                addedLabelLoaded: true,
                addedLabelFail: true
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

export const addLabel = (state: LabelState) => state.addedLabel;
export const addLabelLoading = (state: LabelState) => state.addedLabelLoading;
export const addLabelLoaded = (state: LabelState) => state.addedLabelLoaded;
export const addLabelFail = (state: LabelState) => state.addedLabelFail;
