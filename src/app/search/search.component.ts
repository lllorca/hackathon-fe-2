import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../services/business.service';
import { Business } from '../model/business';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  businesses: Business[];
  categories: Set<string> = new Set<string>();
  businessesBackup: Business[];

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getAllBusiness().subscribe(response => {
        this.businesses = response;
        this.businessesBackup = response;

        this.businesses.forEach(business => this.categories.add(business.category));
    });
  }

  update(category: string) {
    this.businesses = this.businessesBackup.filter(business => business.category === category);
  }

  reset() {
    this.businesses = this.businessesBackup;
  }

}
