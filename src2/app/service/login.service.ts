import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  logar() {
    return this.http.get<any[]>(`${this.loginUrl}`);
  }

  /* registrar() {
    return this.http.post<any>(`${this.registerUrl}`);
  } */

}
