import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemService } from '../shared/system.service';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  private baseUrl: string;
  private customStudentsUrl: string;
  private httpHeaders: any;

  constructor(private http: HttpClient, private systemService: SystemService) {
    this.baseUrl = systemService.baseUrl + "students";
    this.customStudentsUrl  = systemService.baseUrl +"studentscollection";
    this.httpHeaders = systemService.httpHeaders
  }

  // Data manipulation
  get(): Observable<any>{
    return this.http.get(this.baseUrl ,
                          {headers: this.httpHeaders})
  }
  getStudentsByGrade(id):  Observable<any>{
    const url = `${this.customStudentsUrl}/${id}/`
    return this.http.get(url,
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
              {headerName: 'Student ID', field: 'student_number', sortable: true, filter: true,checkboxSelection: true},
              {headerName: 'Student Name', field: 'student_name', sortable: true, filter: true},
              {headerName: 'Student Surname', field: 'student_surname', sortable: true, filter: true},
              {headerName: 'Grade', field: 'grade_name', sortable: true, filter: true},
              {headerName: 'Active', field: 'active', sortable: true, filter: true},
              {headerName: 'Date Created', field: 'date_created', sortable: true, filter: true}
            ];
  }
}
