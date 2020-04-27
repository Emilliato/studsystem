import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemService } from '../shared/system.service';
@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private baseUrl: string;
  private httpHeaders: any;

  constructor(private http: HttpClient, private systemService: SystemService) { 
    this.baseUrl = systemService.baseUrl +"grades";
    this.httpHeaders = systemService.httpHeaders
  }
 
  // Data manipulation
  getAllGrades(): Observable<any>{
    return this.http.get(this.baseUrl ,
                          {headers: this.httpHeaders})
  }
  saveGrade(model): Observable<any>{
    return this.http.post(this.baseUrl,model)
  }
  updateGrade(model,id): Observable<any>{
    const url = `${this.baseUrl}/${id}/`;
    return this.http.put(url,model,{headers: this.httpHeaders})
  }
  deleteGrade(id: number): Observable<{}> {
    const url = `${this.baseUrl}/${id}/`; 
    return this.http.delete(url, {headers: this.httpHeaders});
  }
  getGridSettings = ()=>{
    return  [
              {headerName: 'Name', field: 'name', sortable: true, filter: true,checkboxSelection: true},
              {headerName: 'Year', field: 'grade_year', sortable: true, filter: true},
              {headerName: 'Number Of Students', field: 'number_of_students', sortable: true, filter: true},
              {headerName: 'Class Average', field: 'average', sortable: true, filter: true},
              {headerName: 'Active', field: 'active', sortable: true, filter: true},
              {headerName: 'Date Created', field: 'date_created', sortable: true, filter: true}
            ];
  }
}
