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

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getAllBusiness().subscribe(response => {
        console.table(response);
        this.businesses = response;
    });
  }

}
