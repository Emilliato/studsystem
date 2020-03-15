import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  baseUrl = "http://localhost:8000/api/grades";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllGrades(): Observable<any>{
    return this.http.get(this.baseUrl ,
                          {headers: this.httpHeaders})
  }
  saveGrade(model): Observable<any>{
    return this.http.post(this.baseUrl,model)
  }
}
