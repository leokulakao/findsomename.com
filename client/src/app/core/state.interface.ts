import { AuthState } from './auth/reducer/auth.state';
import { NamesState } from './names/reducer/names.state';

export interface AppState {
    auth: AuthState;
    names: NamesState;
}

