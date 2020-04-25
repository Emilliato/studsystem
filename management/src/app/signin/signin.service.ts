import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemService } from '../shared/system.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private baseUrl: string;
  private httpHeaders: any;

  constructor(private http: HttpClient, private systemService: SystemService) {
    this.baseUrl = systemService.baseUrl + "account/login";
    this.httpHeaders = systemService.httpHeadersNoAuth
  }

  signin(model): Observable<any>{
    return this.http.post(this.baseUrl,model,this.httpHeaders);
  }
}
