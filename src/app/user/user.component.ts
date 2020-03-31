import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Business } from '../model/business';
import { BusinessService } from '../services/business.service';
import { Purchase } from '../model/purchase';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  user: User;
  business: Business;
  myPurchases: Purchase[];
  mySales: Purchase[];

  constructor(private router: Router, private userService: UserService, private businessService: BusinessService, 
              private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('user_id');
    if(!this.id) { 
      this.router.navigateByUrl('/login');
    }

    this.userService.getUserById(this.id).subscribe(response => this.user = response);
    this.businessService.getMyBusiness().subscribe(response => this.business = response);
    this.purchaseService.getMyPurchases().subscribe(response => this.myPurchases = response);
    this.purchaseService.getMySales().subscribe(response => this.mySales = response);
  }

}
