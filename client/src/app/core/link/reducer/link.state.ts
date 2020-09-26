import { Map, Record } from 'immutable';

export interface LinkState extends Map<string, any> {
    addLink: any;
    addLinkLoading: boolean;
    addLinkLoaded: boolean;
    addLinkFail: boolean;

    getLinkById: any;
    getLinkByIdLoading: boolean;
    getLinkByIdLoaded: boolean;
    getLinkByIdFail: boolean;
}

export const authrecord = Record({
    addLink: [],
    addLinkLoading: false,
    addLinkLoaded: false,
    addLinkFail: false,

    getLinkById: [],
    getLinkByIdLoading: false,
    getLinkByIdLoaded: false,
    getLinkByIdFail: false
});
