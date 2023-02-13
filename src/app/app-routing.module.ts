import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
 import { DistributorProductsComponent } from './Modules/distributer/distributor-products/distributor-products.component';
 import { DistributorStockComponent } from './Modules/distributer/distributor-stock/distributor-stock.component';
 import { DistributorMyProfileComponent } from './Modules/distributer/distributor-my-profile/distributor-my-profile.component';
 import { TShirtComponent } from './Modules/distributer/t-shirt/t-shirt.component';
import { WarehouseComponent } from './Modules/warehouse/warehouse/warehouse.component';
 

const routes: Routes = [{path:'',component:LoginComponent},
{path:'ware',component:WarehouseComponent},
{path:'DHome',loadChildren:()=>import('./Modules/distributer/distributer.module').then(m=>m.DistributerModule)},
{path:'pro',component:DistributorProductsComponent},
{path:'stock',component:DistributorStockComponent},
{path:'prof',component:DistributorMyProfileComponent},
{path:'ts',component:TShirtComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
