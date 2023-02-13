import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributor-products',
  templateUrl: './distributor-products.component.html',
  styleUrls: ['./distributor-products.component.css']
})
export class DistributorProductsComponent {
  constructor(private route:Router){}
  ts(){
    this.route.navigate(['ts'])
  }
  s(){
    this.route.navigate(['s'])
  }

}
