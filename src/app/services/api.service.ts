import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { PotentialDuplicates } from '../potential-duplicates';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _HttpClient:HttpClient) { }


  data:PotentialDuplicates[]=[]


  getInfo(){ 
     return this._HttpClient.get("http://localhost:3000/api/leads");
  }


  getdup(lead_id:any){
    return this._HttpClient.get("http://localhost:3000/api/leads/"+lead_id+"/potential-duplicates ");

  }

  updatelead(lead_id:any,body:any){
    return this._HttpClient.put("http://localhost:3000/api/leads/:"+lead_id ,body)
  }
}
