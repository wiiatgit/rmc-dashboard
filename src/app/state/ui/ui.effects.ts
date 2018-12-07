import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromUiActions from './ui.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LibraryEffects {

    constructor(
        private action$: Actions,
    ) { }

    // @Effect()
    // loadLibrary$: Observable<Action> = this.action$.pipe(
    //     ofType(fromUiActions.UiActionsTypes.LOAD_THEME),
    //     mergeMap((action: fromUiActions.LoadThemeAction) => this.libraryService.getLibraryList().pipe(
    //         map((theme: string) => new fromUiActions.LoadThemeSuccessAction(theme))
    //     ))
    // );
}
