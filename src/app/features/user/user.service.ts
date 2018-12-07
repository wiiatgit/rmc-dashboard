import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/config/app.config';
import { IUserProfil } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUserProfile(): Observable<any> {
    return this.http.get(`${AppConfig.settings.SERVER_API.END_POINT}/v2/profile/me`);
  }

  getProfileById(id: number): Observable<IUserProfil> {
    return this.http.get<IUserProfil>(`${AppConfig.settings.SERVER_API.END_POINT}/v2/profile/${id}`);
  }

  getPromotions(): Observable<any> {
    return this.http.get<any>(`${AppConfig.settings.SERVER_API.END_POINT}/courses/promotions`);
  }
}
