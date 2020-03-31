import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './constants';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  buyProduct(quantity: number, productId: number) {
    return this.http.post<{Product}>(Constants.API_ENDPOINT + '/purchase', {quantity, productId}).subscribe();
  }
}
