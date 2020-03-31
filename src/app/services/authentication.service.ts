import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<{token: string}>(Constants.API_ENDPOINT + '/authenticate', {email, password}).subscribe(res => {
      localStorage.setItem('access_token', res.token);
      localStorage.setItem('user_id', this.parseJwt(res.token).userid);
    });
  }

  register(name: string, lastName: string, document: number, email: string, password: string) {
    return this.httpClient.post(Constants.API_ENDPOINT + '/register', {name, lastName, document, email, password}).subscribe(res => {
      this.login(email, password);
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
  }

  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

    return JSON.parse(jsonPayload);
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
}
