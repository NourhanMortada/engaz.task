import { Component , ElementRef, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PotentialDuplicates } from '../../potential-duplicates';
import { ApiService } from '../../services/api.service';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
leadId:any
data:any;

  constructor(  private _api:ApiService 
   ){}

   leadDetails= new FormGroup({
    first_name:new FormControl(""),
    last_name: new FormControl(""),
    email: new FormControl(""),
    cell_phone: new FormControl(""),
    home_phone:new FormControl(""),
    source:new FormControl(""),
    duplicate_of:new FormControl(""),
    lead_id:new FormControl(""),
    potential_duplicates:new FormControl("")
  
  })
  

  show(){

    this._api.getInfo().subscribe({
      next:(response)=>{
        this.data=response;
        this.data.map((result:any)=>{
         if(this.data.duplicate_of != null){
     
         }
            
        }

        )
      }
    })
  }

  getData(data:any){
    console.log("data",data);
    this.leadDetails.get('first_name')?.setValue(data.first_name)
    this.leadDetails.get('last_name')?.setValue(data.last_name)
    this.leadDetails.get('email')?.setValue(data.email)
    this.leadDetails.get('source')?.setValue(data.source)
    this.leadDetails.get('cell_phone')?.setValue(data.cell_phone)
    this.leadDetails.get('duplicate_of')?.setValue(data.duplicate_of)
    this.leadDetails.get('potential_duplicates')?.setValue(data.potential_duplicates)
    this.leadDetails.get('home_phone')?.setValue(data.home_phone)
    this.leadDetails.get('lead_id')?.setValue(data.lead_id)
  }
  
    update(lead_id:any){
       let data=this.leadDetails.value
    this._api.updatelead(lead_id,data).subscribe({
      next:(response)=>{

      }
    })
    
  }

  close(){
    this.show();
  }
  
  ngOnInit(): void {
    this.show()
  }

}
