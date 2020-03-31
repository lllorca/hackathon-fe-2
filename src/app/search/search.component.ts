import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../services/business.service';
import { Business } from '../model/business';
import { CategoryTranslatorService } from '../services/category-translator.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  businesses: Business[];
  categories: Set<string> = new Set<string>();
  businessesBackup: Business[];
  
  constructor(private businessService: BusinessService, private categoryTranslator: CategoryTranslatorService, 
              private route: Router) { }
    
    ngOnInit(): void {
      this.businessService.getAllBusiness().subscribe(response => {
        this.businesses = response;
        this.businesses.map(business => business.category = this.categoryTranslator.translate(business.category));
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
    
    goToBusiness(id: number) {
      this.route.navigateByUrl('/business/' + id);
    }
    
  }
  