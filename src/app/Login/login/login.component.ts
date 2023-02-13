import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Email:string="";
  password:string="";
  login(){
    if(this.Email==="d" && this.password==="d"){
      this.route.navigate(['DHome'])
    }
    else if(this.Email==="w" && this.password==="w"){
      this.route.navigate(['ware'])
    }
    
  }
  constructor(private route:Router){}

}
