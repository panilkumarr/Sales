import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributerRoutingModule } from './distributer-routing.module';
import { DistributorHomePageComponent } from './distributor-home-page/distributor-home-page.component';
import { DistributorMyProfileComponent } from './distributor-my-profile/distributor-my-profile.component';
import { DistributorProductsComponent } from './distributor-products/distributor-products.component';
import { DistributorPurchaseOrderComponent } from './distributor-purchase-order/distributor-purchase-order.component';
import { DistributorStockComponent } from './distributor-stock/distributor-stock.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
 
 
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
 
import {MatPaginatorModule} from '@angular/material/paginator';
 
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { SharedServiceService } from 'src/app/shared-service.service';
import { EditProfileComponent } from './distributor-my-profile/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    DistributorHomePageComponent,
    DistributorMyProfileComponent,
    DistributorProductsComponent,
    DistributorPurchaseOrderComponent,
    DistributorStockComponent,
    
    TShirtComponent,
         EditProfileComponent
  ],
  imports: [
    CommonModule,
    DistributerRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
  ],
  providers: [SharedServiceService]
})
export class DistributerModule { }
