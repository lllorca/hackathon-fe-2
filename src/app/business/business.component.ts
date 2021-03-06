import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../services/business.service';
import { Business } from '../model/business';
import { Product } from '../model/product';
import { CategoryTranslatorService } from '../services/category-translator.service';
import {PurchaseService} from '../services/purchase.service';

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
  amount: number;

  constructor(private route: ActivatedRoute, private businessService: BusinessService,
              private categoryTranslator: CategoryTranslatorService, private purchaseService: PurchaseService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.businessService.getBusiness(this.id).subscribe(response => {
      this.business = response;
      this.business.category = this.categoryTranslator.translate(this.business.category);
    });
  }

  chooseProduct(product: Product) {
    this.chosenProduct = product;
    this.total = product.price;
  }

  updateTotal(amount: number) {
    this.amount = amount;
    this.total = this.chosenProduct.price * amount;
  }


  buyProduct() {
    this.purchaseService.buyProduct(this.amount, this.chosenProduct.id);
  }

}
