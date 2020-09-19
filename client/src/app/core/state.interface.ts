import { AuthState } from './auth/reducer/auth.state';
import { NamesState } from './names/reducer/names.state';
import { LabelState } from './label/reducer/label.state';
import { LinkState } from './link/reducer/link.state';

export interface AppState {
    auth: AuthState;
    names: NamesState;
    label: LabelState;
    link: LinkState;
}

