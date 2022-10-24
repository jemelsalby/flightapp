import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewData=()=>{
    return this.http.get("http://localhost:8080/viewflight")
  }
  addData=(data:any)=>{
    return this.http.post("http://localhost:8080/flightAdd",data)
  }
}
