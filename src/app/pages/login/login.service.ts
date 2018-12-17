import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppConfig } from 'src/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  protected appSettings = AppConfig.settings;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${this.appSettings.SERVER_API.END_POINT}/connection/AuthConnected`, { email: username, password: password })
      .pipe(map((res: any) => {
        console.log(res);
        // login successful if there's a jwt token in the response
        if (res && res.token && res.user) {
          console.log(res);
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify({ token: res.token, user: res.user }));
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
