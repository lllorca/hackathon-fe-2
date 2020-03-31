import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './constants';
import { Observable } from 'rxjs';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  buyProduct(quantity: number, productId: number) {
    return this.http.post<{Product}>(Constants.API_ENDPOINT + '/purchase', {quantity, productId}).subscribe();
  }

  getMyPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(Constants.API_ENDPOINT + '/purchase/my-purchases');
  }

  getMySales(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(Constants.API_ENDPOINT + '/purchase/my-sales');
  }

}
