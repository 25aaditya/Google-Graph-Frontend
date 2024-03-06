import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private readonly http:HttpClient) { }
  getalldata()
  {
    return this.http.get<any>("http://localhost:60676/GetAllData");
   // console.log('from getdata',name);
    
  }
  getallname()
  {
    return this.http.get<any>("http://localhost:60676/UniqueName");
  }
}
