import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient, private router2: Router) { }

  logar(user) {
    return this.http.post <any>(this.loginUrl, user);
  }
  deslogar() {
    localStorage.removeItem('token');
    this.router2.navigate(['/events']);
  }

  registrar(user) {
    return this.http.post<any>(this.registerUrl, user);
  }


  getToken() {
    return localStorage.getItem('token');
  }

  logado() {
    return !!localStorage.getItem('token');
  }

}
