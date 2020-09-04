import { Map, Record } from 'immutable';
import { LabelModel } from '../models/label.model';

export interface LabelState extends Map<string, any> {
    allLabels: Array<LabelModel>;
    allLabelsLoading: boolean;
    allLabelsLoaded: boolean;
    allLabelsFail: boolean;

    addedLabel: any;
    addedLabelLoading: boolean;
    addedLabelLoaded: boolean;
    addedLabelFail: boolean;
}

export const authrecord = Record({
    allLabels: [],
    allLabelsLoading: false,
    allLabelsLoaded: false,
    allLabelsFail: false,

    addedLabel: [],
    addedLabelLoading: false,
    addedLabelLoaded: false,
    addedLabelFail: false
});
