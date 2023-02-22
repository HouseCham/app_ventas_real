import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { User } from '../models/user';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiAuthService {
  url: string = 'https://localhost:7127/api/User/login';

  constructor(private _http: HttpClient) {}

  login(user: User): Observable<Response> {
    return this._http.post<Response>(this.url, user, httpOption);
  }
}
