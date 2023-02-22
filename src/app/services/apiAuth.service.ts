import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../models/response';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';

import { FormGroup, FormControl } from '@angular/forms';

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
  private usuarioSubject!: BehaviorSubject<any>;
  constructor(private _http: HttpClient) {
    this.usuarioSubject = new BehaviorSubject<User>(
        JSON.parse(localStorage.getItem('userJWT') || '{}')
    );
  }

  public get userData(): User{
    return this.usuarioSubject.value;
  }
  login(login: Login): Observable<Response> {
    let nombre:string = '';
    return this._http
      .post<Response>(this.url, { nombre, login }, httpOption)
      .pipe(
        map((result) => {
          console.log(login);
          if (result.exito === 1) {
            const user: User = result.data;
            localStorage.setItem('userJWT', JSON.stringify(user));
            this.usuarioSubject.next(user); // everything that is suscribed to usuarioSubject observable, get the alert something changed
          }
          return result;
        })
      );
  }
  logout() {
    localStorage.removeItem('userJWT');
    this.usuarioSubject.next(null);
  }
}
