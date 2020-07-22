import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState as State } from './state.interface';
import * as fromAuth from '../core/auth/reducer/auth.reducer';
import * as fromNames from '../core/names/reducer/names.reducer';

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer,
    names: fromNames.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
    return (state: State, action: any): State => {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];
