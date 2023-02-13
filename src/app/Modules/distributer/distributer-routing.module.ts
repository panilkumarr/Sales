import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorHomePageComponent } from './distributor-home-page/distributor-home-page.component';
import { DistributorProductsComponent } from './distributor-products/distributor-products.component';
import { DistributorStockComponent } from './distributor-stock/distributor-stock.component';
 
import { TShirtComponent } from './t-shirt/t-shirt.component';

const routes: Routes = [{path:'',component:DistributorHomePageComponent},
 
 
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributerRoutingModule { }
