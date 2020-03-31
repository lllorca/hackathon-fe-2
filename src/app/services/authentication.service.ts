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
    });
  }

  register(name: string, lastName: string, document: number, email: string, password: string) {
    return this.httpClient.post(Constants.API_ENDPOINT + '/register', {name, lastName, document, email, password}).subscribe(res => {
      this.login(email, password);
    });
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
}
