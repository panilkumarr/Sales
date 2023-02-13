import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SharedServiceService } from 'src/app/shared-service.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-distributor-my-profile',
  templateUrl: './distributor-my-profile.component.html',
  styleUrls: ['./distributor-my-profile.component.css']
})
export class DistributorMyProfileComponent {
  data:any;
  datasource!:MatTableDataSource<any>;
  constructor(private ds:SharedServiceService,private dialog:MatDialog,private _liveAnnouncer: LiveAnnouncer){
   
  }
  openDialog(value:any){
    this.dialog.open(EditProfileComponent,{
      height:"80%",
      width:"45%"
      
    });
  }

  ngOnInit(){
    this.ds.getData().subscribe((x)=>{
      this.data=x;
      console.log(this.data)
      this.datasource=new MatTableDataSource(x)
        
    })
     
  
  }

}
