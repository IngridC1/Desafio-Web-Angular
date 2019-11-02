import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';
import { when } from 'q';




@Injectable({
  providedIn: 'root'
})


export class CadastroService {

  registerUrl = 'https://reqres.in/api/register';

  constructor(private http: HttpClient) { }

  registrar() {
    return this.http.post<any[]>(`${this.registerUrl}`, userInfo);
    // return this.http.get<any[]>(`${this.loginUrl}`);
  }
}
