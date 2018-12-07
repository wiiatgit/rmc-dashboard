import { createSelector } from '@ngrx/store';
import { getUiFeatureState, IUiState } from './ui.reducers';


export const getSidenavState = createSelector(
    getUiFeatureState,
    (state: IUiState) => state.isSidenavOpened
);

export const getThemeState = createSelector(
    getUiFeatureState,
    (state: IUiState) => state.activeTheme
);

export const getLanguageState = createSelector(
    getUiFeatureState,
    (state: IUiState) => state.currentLanguage
);

export const getSnackbarError = createSelector(
    getUiFeatureState,
    (state: IUiState) => state.snackbarError
);

export const getSnackbarSuccess = createSelector(
    getUiFeatureState,
    (state: IUiState) => state.snackbarSuccess
);
