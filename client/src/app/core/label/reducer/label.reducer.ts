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

        case actions.ActionTypes.GET_LABEL_BY_ID: {
            return Object.assign({}, state, {
                labelLoading: true,
                labelLoaded: false,
                labelFail: false
            });
        }
        case actions.ActionTypes.GET_LABEL_BY_ID_SUCCESS: {
            const result = payload.data ? payload.data.map(label => new LabelModel(label)) : [];
            return Object.assign({}, state, {
                label: result,
                labelLoading: false,
                labelLoaded: true,
                labelFail: false
            });
        }
        case actions.ActionTypes.GET_LABEL_BY_ID_FAIL: {
            return Object.assign({}, state, {
                labelLoading: false,
                labelLoaded: false,
                labelFail: true
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

        case actions.ActionTypes.DELETE_LABEL: {
            return Object.assign({}, state, {
                deleteLabelLoading: true,
                deleteLabelLoaded: false,
                deleteLabelFail: false
            });
        }
        case actions.ActionTypes.DELETE_LABEL_SUCCESS: {
            return Object.assign({}, state, {
                deleteLabel: payload,
                deleteLabelLoading: false,
                deleteLabelLoaded: true,
                deleteLabelFail: false
            });
        }
        case actions.ActionTypes.DELETE_LABEL_FAIL: {
            return Object.assign({}, state, {
                deleteLabelLoading: false,
                deleteLabelLoaded: true,
                deleteLabelFail: true
            });
        }

        case actions.ActionTypes.EDIT_LABEL: {
            return Object.assign({}, state, {
                editLabelLoading: true,
                editLabelLoaded: false,
                editLabelFail: false
            });
        }
        case actions.ActionTypes.EDIT_LABEL_SUCCESS: {
            return Object.assign({}, state, {
                editLabel: payload,
                editLabelLoading: false,
                editLabelLoaded: true,
                editLabelFail: false
            });
        }
        case actions.ActionTypes.EDIT_LABEL: {
            return Object.assign({}, state, {
                editLabelLoading: false,
                editLabelLoaded: true,
                editLabelFail: true
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

export const getLabelById = (state: LabelState) => state.label;
export const getLabelByIdLoading = (state: LabelState) => state.labelLoading;
export const getLabelByIdLoaded = (state: LabelState) => state.labelLoaded;
export const getLabelByIdFail = (state: LabelState) => state.labelFail;

export const addLabel = (state: LabelState) => state.addedLabel;
export const addLabelLoading = (state: LabelState) => state.addedLabelLoading;
export const addLabelLoaded = (state: LabelState) => state.addedLabelLoaded;
export const addLabelFail = (state: LabelState) => state.addedLabelFail;

export const deleteLabel = (state: LabelState) => state.deleteLabel;
export const deleteLabelLoading = (state: LabelState) => state.deleteLabelLoading;
export const deleteLabelLoaded = (state: LabelState) => state.deleteLabelLoaded;
export const deleteLabelFail = (state: LabelState) => state.deleteLabelFail;

export const editLabel = (state: LabelState) => state.editLabel;
export const editLabelLoading = (state: LabelState) => state.editLabelLoading;
export const editLabelLoaded = (state: LabelState) => state.editLabelLoaded;
export const editLabelFail = (state: LabelState) => state. editLabelFail;
