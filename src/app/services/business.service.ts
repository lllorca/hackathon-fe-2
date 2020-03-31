import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';
import { Business } from '../model/business';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  getAllBusiness(): Observable<Business[]> {
      return this.http.get<Business[]>(Constants.API_ENDPOINT + '/business');
  }

  getBusiness(id: string): Observable<Business> {
    return this.http.get<Business>(Constants.API_ENDPOINT + '/business/' + id);
  }

  getMyBusiness(): Observable<Business> {
    return this.http.get<Business>(Constants.API_ENDPOINT + '/business/my-business');
  }
}
