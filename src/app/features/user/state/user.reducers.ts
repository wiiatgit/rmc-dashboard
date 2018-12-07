import { IUserProfil } from '../user.model';
import { createFeatureSelector } from '@ngrx/store';
import * as fromActions from './user.actions';
import { IAppState } from '../../../state/app.state';

export interface State extends IAppState {
    user: IUserState;
}

export interface IUserState {
    userProfil: IUserProfil;
    promotions: any;
    loading: boolean;
    loaded: boolean;
    error: string;
}

const initialeState: IUserState = {
    userProfil: null,
    promotions: null,
    loading: false,
    loaded: false,
    error: null
};

export const getUserFeatureState = createFeatureSelector<IUserState>('user');

export function userReducer(state = initialeState, action: fromActions.UserTypes): IUserState {
    switch (action.type) {

        case fromActions.UserActionTypes.LOAD_USER_PROFIL:
        return{
            ...state,
        };

        case fromActions.UserActionTypes.LOAD_USER_PROFIL_SUCCESS:
        return {
            ...state,
            userProfil: action.payload
        };

        case fromActions.UserActionTypes.LOAD_USER_PROFIL_FAIL:
        return {
            ...state,
            userProfil: null,
            error: action.payload,
        };

        case fromActions.UserActionTypes.LOAD_USER_PROMOTIONS:
        return {
            ...state
        };

        case fromActions.UserActionTypes.LOAD_USER_PROMOTIONS_SUCCESS:
        return {
            ...state,
            promotions: action.payload
        };

        case fromActions.UserActionTypes.LOAD_USER_PROMOTIONS_FAIL:
        return {
            ...state,
            error: action.payload
        };

        default: {
            return state;
        }
    }
}
