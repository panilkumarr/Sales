import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    }), 
  };

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any>('https://localhost:44305/all');
     
  }
  update(data:any){
    return this.http.put('https://localhost:44305/update/',data,this.httpOptions).subscribe();
  }
}
