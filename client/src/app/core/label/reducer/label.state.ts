import { Map, Record } from 'immutable';
import { LabelModel } from '../models/label.model';

export interface LabelState extends Map<string, any> {
    allLabels: Array<LabelModel>;
    allLabelsLoading: boolean;
    allLabelsLoaded: boolean;
    allLabelsFail: boolean;
}

export const authrecord = Record({
    allLabels: [],
    allLabelsLoading: false,
    allLabelsLoaded: false,
    allLabelsFail: false,
});
