import { createFeatureSelector } from '@ngrx/store';
import * as fromActions from './ui.actions';
import { IAppState } from '../app.state';

export interface State extends IAppState {
    ui: IUiState;
}

export interface IUiState {
    isSidenavOpened: boolean;
    activeTheme: string;
    currentLanguage: string;
    snackbarError: string;
    snackbarSuccess: string;
}

const initialeState: IUiState = {
    isSidenavOpened: true,
    activeTheme: 'default',
    currentLanguage: null,
    snackbarError: null,
    snackbarSuccess: null
};

export const getUiFeatureState = createFeatureSelector<IAppState, IUiState>('ui');

export function uiReducer(state = initialeState, action: fromActions.UiActions): IUiState {
    switch (action.type) {

        case fromActions.UiActionsTypes.TOGGLE_SIDENAV:
        return {
            ...state,
            isSidenavOpened: action.payload
        };

        case fromActions.UiActionsTypes.LOAD_THEME:
        return {
            ...state,
            activeTheme: localStorage.getItem('theme') || 'default'
        };

        case fromActions.UiActionsTypes.CHANGE_THEME:
        return {
            ...state,
            activeTheme: action.payload
        };

        case fromActions.UiActionsTypes.CHANGE_LANGUAGE:
        return {
            ...state,
            currentLanguage: action.payload
        };

        case fromActions.UiActionsTypes.PUSH_SNACKBAR_ERROR:
        return{
            ...state,
            snackbarError: action.payload
        };

        case fromActions.UiActionsTypes.RESET_SNACKBAR_ERROR:
        return {
            ...state,
            snackbarError: null
        };

        case fromActions.UiActionsTypes.PUSH_SNACKBAR_SUCCESS:
        return {
            ...state,
            snackbarSuccess: action.payload
        };

        case fromActions.UiActionsTypes.RESET_SNACKBAR_SUCCESS:
        return {
            ...state,
            snackbarSuccess: null
        };

        default: {
            return state;
        }
    }
}
