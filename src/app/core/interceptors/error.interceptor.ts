import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { LoginService } from '../../pages/login/login.service';
import { IAppState } from '../../state/app.state';
import * as fromUiActions from '../../state/ui/ui.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private loginServices: LoginService,
        private store: Store<IAppState>
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            console.log(err);

            const error = err.error.message || err.statusText;

            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.loginServices.logout();
                location.reload(true);
            }

            this.store.dispatch(new fromUiActions.PushSnackbarErrorAction(error));
            return throwError(error);
        }));
    }
}
