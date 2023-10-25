import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-duplicates',
  templateUrl: './duplicates.component.html',
  styleUrls: ['./duplicates.component.css']
})
export class DuplicatesComponent implements OnInit {
constructor(private router:ActivatedRoute , private api:ApiService){

}
leadsId:any
show:boolean=false;
  ngOnInit(): void {
    console.log("id",this.router.snapshot.params['id']);
    let leadid=this.router.snapshot.params['id']
    this.api.getdup(leadid).subscribe((result:any)=>{
    this.leadsId=result
      
     if(result == ''){
      this.show=true
     }
      
    })

  }
}
