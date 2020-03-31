import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../services/business.service';
import { Business } from '../model/business';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  id: string;
  business: Business;

  constructor(private route: ActivatedRoute, private businessService: BusinessService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.businessService.getBusiness(this.id).subscribe(response => this.business = response);
  }

}
