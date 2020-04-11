import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  public baseUrl: string;
  public httpHeaders: any;

  constructor( ) {
    this.baseUrl = "http://localhost:8000/api/";
    this.httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
   }
}
