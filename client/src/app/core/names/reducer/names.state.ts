import { Map, Record } from 'immutable';
import { NameModel } from '../models/name.model';

export interface NamesState extends Map<string, any> {
    allName: Array<NameModel>;
    allNamesLoading: boolean;
    allNamesLoaded: boolean;
    allNamesFail: boolean;
}

export const authrecord = Record({
    allName: [],
    allNamesLoading: false,
    allNamesLoaded: false,
    allNamesFail: false,
});
