import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../services/business.service';
import { Business } from '../model/business';
import { Product } from '../model/product';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  id: string;
  business: Business;

  chosenProduct: Product;
  total: number;

  constructor(private route: ActivatedRoute, private businessService: BusinessService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.businessService.getBusiness(this.id).subscribe(response => this.business = response);
  }

  chooseProduct(product: Product) {
    console.log("product is ", product);
    this.chosenProduct = product;
    this.total = product.price;
  }

  updateTotal(amount: number) {
    this.total = this.chosenProduct.price * amount;
  }

}
