import { ActionReducerMap } from '@ngrx/store';
import { IUiState, uiReducer } from './ui/ui.reducers';
import { IUserState, userReducer } from '../features/user/state/user.reducers';
import { ISnackbarState, snackbarReducer } from '../shared/components/snackbar/state/snackbar.reducers';
import { routerReducer } from '@ngrx/router-store';

export interface IAppState {
    router: any;
    ui: IUiState;
    user: IUserState;
    snackbar: ISnackbarState;
}

export const reducers: ActionReducerMap<IAppState> = {
    router: routerReducer,
    ui: uiReducer,
    user: userReducer,
    snackbar: snackbarReducer
};
