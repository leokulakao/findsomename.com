import { Map, Record } from 'immutable';

export interface LinkState extends Map<string, any> {
    addLink: any;
    addLinkLoading: boolean;
    addLinkLoaded: boolean;
    addLinkFail: boolean;
}

export const authrecord = Record({
    addLink: [],
    addLinkLoading: false,
    addLinkLoaded: false,
    addLinkFail: false,
});
