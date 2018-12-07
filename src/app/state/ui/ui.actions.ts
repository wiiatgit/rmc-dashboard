import { Action } from '@ngrx/store';

export enum UiActionsTypes {
    TOGGLE_SIDENAV = '[Ui] Toggle Sidenav',
    LOAD_THEME = '[Ui] Load Theme',
    CHANGE_THEME = '[Ui] Change Theme',
    LOAD_LANGUAGE = '[Ui] Load Language',
    CHANGE_LANGUAGE = '[Ui] Change Language',
    PUSH_SNACKBAR_ERROR = '[Snackbar] Push Snackbar Error',
    RESET_SNACKBAR_ERROR = '[Snackbar] Reset Snackbar Error',
    PUSH_SNACKBAR_SUCCESS = '[Snackbar] Push Snackbar Success',
    RESET_SNACKBAR_SUCCESS = '[Snackbar] Reset Snackbar Success'
}

export class ToggleSidenavAction implements Action {
    readonly type = UiActionsTypes.TOGGLE_SIDENAV;
    constructor(public payload: boolean) { }
}

//#region Theme
export class LoadThemeAction implements Action {
    readonly type = UiActionsTypes.LOAD_THEME;
}

export class ChangeThemeAction implements Action {
    readonly type = UiActionsTypes.CHANGE_THEME;
    constructor(public payload: string) { }
}
//#endregion

//#region Language
export class ChangeLanguageAction implements Action {
    readonly type = UiActionsTypes.CHANGE_LANGUAGE;
    constructor(public payload: string) { }
}
//#endregion

//#region Snackbar
export class PushSnackbarErrorAction implements Action {
    readonly type = UiActionsTypes.PUSH_SNACKBAR_ERROR;
    constructor(public payload: string) { }
}

export class ResetSnackbarErrorAction implements Action {
    readonly type = UiActionsTypes.RESET_SNACKBAR_ERROR;
}

export class PushSnackbarSuccessAction implements Action {
    readonly type = UiActionsTypes.PUSH_SNACKBAR_SUCCESS;
    constructor(public payload: string) { }
}

export class ResetScnackbarSuccessAction implements Action {
    readonly type = UiActionsTypes.RESET_SNACKBAR_SUCCESS;
}
//#endregion

export type UiActions = ToggleSidenavAction
    | LoadThemeAction
    | ChangeThemeAction
    | ChangeLanguageAction
    | PushSnackbarErrorAction
    | ResetSnackbarErrorAction
    | PushSnackbarSuccessAction
    | ResetScnackbarSuccessAction;
