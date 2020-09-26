import { createSelector } from 'reselect';

import * as fromLabel from './label.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.label;

export const getAllLabels = createSelector(getState, fromLabel.getAllLabels);
export const getAllLabelsLoading = createSelector(getState, fromLabel.getAllLabelsLoading);
export const getAllLabelsLoaded = createSelector(getState, fromLabel.getAllLabelsLoaded);
export const getAllLabelsFail = createSelector(getState, fromLabel.getAllLabelsFail);

export const getLabelById = createSelector(getState, fromLabel.getLabelById);
export const getLabelByIdLoading = createSelector(getState, fromLabel.getLabelByIdLoading);
export const getLabelByIdLoaded = createSelector(getState, fromLabel.getLabelByIdLoaded);
export const getLabelByIdFail = createSelector(getState, fromLabel.getLabelByIdFail);

export const addLabel = createSelector(getState, fromLabel.addLabel);
export const addLabelLoading = createSelector(getState, fromLabel.addLabelLoading);
export const addLabelLoaded = createSelector(getState, fromLabel.addLabelLoaded);
export const addLabelFail = createSelector(getState, fromLabel.addLabelFail);

export const deleteLabel = createSelector(getState, fromLabel.deleteLabel);
export const deleteLabelLoading = createSelector(getState, fromLabel.deleteLabelLoading);
export const deleteLabelLoaded = createSelector(getState, fromLabel.deleteLabelLoaded);
export const deleteLabelFail = createSelector(getState, fromLabel.deleteLabelFail);
