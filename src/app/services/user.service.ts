import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Constants } from './constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id: string) {
    return this.http.get<User>(Constants.API_ENDPOINT + '/user/' + id);
  }
}
