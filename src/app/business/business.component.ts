import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
