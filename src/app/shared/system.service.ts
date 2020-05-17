import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SystemService {

  public baseUrl: string;
  public httpHeaders: any;
  public httpHeadersNoAuth: any;
  private token: string;

  constructor(private toastr: ToastrService,private http: HttpClient) {
    this.baseUrl = "https://studmanage.herokuapp.com/api/";
    //this.baseUrl = "http://localhost:8000/api/";
    this.token = localStorage.getItem('temporary');
    this.httpHeaders = new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': this.token});
    this.httpHeadersNoAuth = new HttpHeaders({ 'Content-type': 'application/json' });
  }

  public showSuccess(message) {
    this.toastr.success(message);
  }
  public showError(message) {
    this.toastr.error(message);
  }
  showNoRecordSelected() {
    this.toastr.warning("No Row Selected!");
  }
  getUserDetail(): Observable<any>{
    return this.http.get(this.baseUrl + "account/getuser/"+this.token+ "/",  
                          {headers: this.httpHeaders})
  }


}
