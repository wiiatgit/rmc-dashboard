import { Action } from '@ngrx/store';

export enum SnackbarActionsTypes {
    PUSH_SNACKBAR_ERROR = '[Snackbar] Push Snackbar Error',
    RESET_SNACKBAR_ERROR = '[Snackbar] Reset Snackbar Error',
    PUSH_SNACKBAR_SUCCESS = '[Snackbar] Push Snackbar Success',
    RESET_SNACKBAR_SUCCESS = '[Snackbar] Reset Snackbar Success'
}

export class PushSnackbarErrorAction implements Action {
    readonly type = SnackbarActionsTypes.PUSH_SNACKBAR_ERROR;
    constructor(public payload: string) { }
}

export class ResetSnackbarErrorAction implements Action {
    readonly type = SnackbarActionsTypes.RESET_SNACKBAR_ERROR;
}

export class PushSnackbarSuccessAction implements Action {
    readonly type = SnackbarActionsTypes.PUSH_SNACKBAR_SUCCESS;
    constructor(public payload: string) { }
}

export class ResetScnackbarSuccessAction implements Action {
    readonly type = SnackbarActionsTypes.RESET_SNACKBAR_SUCCESS;
}

export type SnackbarTypes = PushSnackbarErrorAction
    | ResetSnackbarErrorAction
    | PushSnackbarSuccessAction
    | ResetScnackbarSuccessAction;
