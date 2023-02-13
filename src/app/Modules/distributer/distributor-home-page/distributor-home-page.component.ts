import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributor-home-page',
  templateUrl: './distributor-home-page.component.html',
  styleUrls: ['./distributor-home-page.component.css']
})
export class DistributorHomePageComponent {
  constructor(private route:Router){}
  products(){
    this.route.navigate(['pro'])
  }
  prof(){
    this.route.navigate(['prof'])
  }
  stock(){
    this.route.navigate(['stock'])
  }

}
