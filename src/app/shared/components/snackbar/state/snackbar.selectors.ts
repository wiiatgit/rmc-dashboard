import { createSelector } from '@ngrx/store';
import { getSnackbarFeatureState, ISnackbarState } from './snackbar.reducers';

export const getError = createSelector(
    getSnackbarFeatureState,
    (state: ISnackbarState) => state.error
);

export const getSuccess = createSelector(
    getSnackbarFeatureState,
    (state: ISnackbarState) => state.success
);
