import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { IUserProfil } from 'src/app/features/user/user.model';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
        const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

       // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/connection/AuthConnected') && request.method === 'POST') {
                // find if any user matches login credentials
                // const filteredUsers = users.filter(user => {
                //     return user.username === request.body.username && user.password === request.body.password;
                // });

                if (request.body.email === 'test@test.com' && request.body.password === 'test') {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const body = {
                        token: 'fake-jwt-token',
                        user: {
                            username: 'user_pseudo',
                            firstname: 'user_fiestname',
                            lastname: 'user_lastname',
                            userId: 12345
                        }
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            if (request.url.match('/profile/me') && request.method === 'GET') {
                // check for fake auth token in header and return user if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const user: IUserProfil = {
                        userId: 123456,
                        pseudo: 'Romain_Mercier',
                        firstName: 'Romain',
                        lastName: 'Mercier',
                        addresses: null,
                        birthdayDate: null,
                        coverPicture: 'cover-default.png',
                        profilePicture: 'default-avatar.png',
                        email: 'romain.mercier@frogular.com',
                        phoneNumbers: '06010203405'
                    };

                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ error: { message: 'Unauthorised' } });
                }
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))

        // call materialize and dematerialize to ensure delay
        // even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
