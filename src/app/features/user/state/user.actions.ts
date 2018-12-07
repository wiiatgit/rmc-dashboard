import { IUserProfil } from '../user.model';

export enum UserActionTypes {
    LOAD_USER_PROFIL = '[User] Load User Profil',
    LOAD_USER_PROFIL_SUCCESS = '[User] Load User Profil Success',
    LOAD_USER_PROFIL_FAIL = '[User] Load User Profil Fail',
    LOAD_USER_PROMOTIONS = '[User] Load User Promotions',
    LOAD_USER_PROMOTIONS_SUCCESS = '[User] Load User Promotions Success',
    LOAD_USER_PROMOTIONS_FAIL = '[User] Load User Promotions Fail',
}

export class LoadUserProfilAction {
    readonly type = UserActionTypes.LOAD_USER_PROFIL;
}

export class LoadUserProfilSuccessAction {
    readonly type = UserActionTypes.LOAD_USER_PROFIL_SUCCESS;
    constructor(public payload: IUserProfil) { }
}

export class LoadUserProfilFailAction {
    readonly type = UserActionTypes.LOAD_USER_PROFIL_FAIL;
    constructor(public payload: string) { }
}

export class LoadUserPromotionsAction {
    readonly type = UserActionTypes.LOAD_USER_PROMOTIONS;
}

export class LoadUserPromotionSuccessAction {
    readonly type = UserActionTypes.LOAD_USER_PROMOTIONS_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadUserPromotionFailAction {
    readonly type = UserActionTypes.LOAD_USER_PROMOTIONS_FAIL;
    constructor(public payload: string) { }
}

export type UserTypes = LoadUserProfilAction
    | LoadUserProfilSuccessAction
    | LoadUserProfilFailAction
    | LoadUserPromotionsAction
    | LoadUserPromotionSuccessAction
    | LoadUserPromotionFailAction;
