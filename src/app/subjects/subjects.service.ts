import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemService } from '../shared/system.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private baseUrl: string;
  private httpHeaders: any;

  constructor(private http: HttpClient, private systemService: SystemService) {
    this.baseUrl = systemService.baseUrl + "subjects";
    this.httpHeaders = systemService.httpHeaders
  }

  // Data manipulation
  get(): Observable<any>{
    return this.http.get(this.baseUrl ,
                          {headers: this.httpHeaders})
  }
  post(model): Observable<any>{
    return this.http.post(this.baseUrl,model)
  }
  put(model,id): Observable<any>{
    const url = `${this.baseUrl}/${id}/`;
    return this.http.put(url,model,{headers: this.httpHeaders})
  }
  delete(id: number): Observable<{}> {
    const url = `${this.baseUrl}/${id}/`; 
    return this.http.delete(url, {headers: this.httpHeaders});
  }

  //Settings
  getGridSettings = ()=>{
    return  [
              {headerName: 'Subject Name', field: 'subject_name', sortable: true, filter: true,checkboxSelection: true},
              {headerName: 'Grade', field: 'subject_name', sortable: true, filter: true},
              {headerName: 'Active', field: 'active', sortable: true, filter: true},
              {headerName: 'Date Created', field: 'date_created', sortable: true, filter: true}
            ];
  }
}
