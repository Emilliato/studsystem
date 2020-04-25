import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class SystemService {

  public baseUrl: string;
  public httpHeaders: any;
  public httpHeadersNoAuth: any;

  constructor(private toastr: ToastrService) {
    this.baseUrl = "http://localhost:8000/api/";
    this.httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
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


}
