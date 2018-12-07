import * as snackbarActions from './snackbar.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState } from '../../../../state/app.state';

export interface State extends IAppState {
    snackbar: ISnackbarState;
}

export interface ISnackbarState {
    error: string;
    success: string;
}

const initialeState: ISnackbarState = {
    error: null,
    success: null
};

export const getSnackbarFeatureState = createFeatureSelector<ISnackbarState>('snackbar');

export function snackbarReducer(state = initialeState, action: snackbarActions.SnackbarTypes): ISnackbarState {
    switch (action.type) {

        case snackbarActions.SnackbarActionsTypes.PUSH_SNACKBAR_ERROR:
        return{
            ...state,
            error: action.payload
        };

        case snackbarActions.SnackbarActionsTypes.RESET_SNACKBAR_ERROR:
        return {
            ...state,
            error: null
        };

        case snackbarActions.SnackbarActionsTypes.PUSH_SNACKBAR_SUCCESS:
        return {
            ...state,
            success: action.payload
        };

        case snackbarActions.SnackbarActionsTypes.RESET_SNACKBAR_SUCCESS:
        return {
            ...state,
            success: null
        };

        default: {
            return state;
        }
    }
}
