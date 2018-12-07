import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromUserActions from './user.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { IUserProfil } from '../user.model';

@Injectable({
    providedIn: 'root'
})
export class UserEffects {

    constructor(
        private action$: Actions,
        private userService: UserService
    ) { }

    @Effect()
    loadUser$: Observable<Action> = this.action$.pipe(
        ofType(fromUserActions.UserActionTypes.LOAD_USER_PROFIL),
        mergeMap((action: fromUserActions.LoadUserProfilAction) => this.userService.getUserProfile().pipe(
            map((userProfil: IUserProfil) => {
                localStorage.setItem('currentUser', JSON.stringify(userProfil));
                return (new fromUserActions.LoadUserProfilSuccessAction(userProfil));
            })
        ))
    );

    @Effect()
    loadPromotions$: Observable<Action> = this.action$.pipe(
        ofType(fromUserActions.UserActionTypes.LOAD_USER_PROMOTIONS),
        mergeMap((action: fromUserActions.LoadUserPromotionsAction) => this.userService.getPromotions().pipe(
            map((promotions: any) => new fromUserActions.LoadUserPromotionSuccessAction(promotions))
        ))
    );
}
