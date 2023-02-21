import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Response } from '../models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = "https://localhost:7127/api/Cliente";
  constructor(private _http: HttpClient) { }

  getClientes(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  addClient(cliente: Cliente): Observable<Response>{
    return this._http.post<Response>(this.url, cliente, httpOption);
  }

  updateClient(cliente: Cliente): Observable<Response>{
    return this._http.put<Response>(this.url, cliente, httpOption);
  }

  deleteClient(id: Number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`);
  }
}
