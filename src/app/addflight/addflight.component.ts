import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  origin=""
  destination=""
  capacity=""

  readValue=()=>{
    let data={
      "name":this.name,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }
    console.log(data)
    this.myapi.addData(data).subscribe(
    
      (response)=>{
        console.log("test")
      }

    )
    alert("successfully added")
    this.name=""
    this.origin=""
    this.destination=""
    this.capacity=""
  }
  ngOnInit(): void {
  }
}
