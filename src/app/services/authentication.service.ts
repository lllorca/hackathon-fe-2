import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    this.http.post(Constants.API_ENDPOINT + '/authenticate', { email: email, password: password }).subscribe(response => {
      console.log(response);
    });
  }
}
