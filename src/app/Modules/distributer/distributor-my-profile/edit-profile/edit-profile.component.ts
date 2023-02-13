import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SafeValue } from '@angular/platform-browser';
import { Serializer } from '@angular/compiler';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  add:any;
constructor(private ds:SharedServiceService,@Inject(MAT_DIALOG_DATA) public data:any,private route:Router,private dialogRef:MatDialogRef<EditProfileComponent>){}
ngOnInit(){
  console.log(this.data)
}
}
