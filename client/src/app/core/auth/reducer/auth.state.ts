/*
 * galvintec
 * version 3.0
 * http://www.galvintec.com
 *
 * Copyright (c) 2019 galvintec ltd
 * Author galvintec ltd <support@galvintec.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
    token: string;
    tokenLoading: boolean;
    tokenLoaded: boolean;
    tokenFail: boolean;
}

export const authrecord = Record({
    token: '',
    tokenLoading: false,
    tokenLoaded: false,
    tokenFail: false
});
