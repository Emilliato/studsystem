import { Component, OnInit } from '@angular/core';
import { GradeService } from './grade.service';
import { FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  providers: [GradeService]
})



export class GradeComponent implements OnInit{
    
    gradeForm;
    
    constructor(private api:GradeService, private formBuilder: FormBuilder){
     this.gradeForm = this.formBuilder.group({
      name: '',
      grade_year: '',
      term: ''
     });
    }
  
    ngOnInit() {
      this.getGrades();
    }

    grades = []
    
    gradeSelected = (grade)=>{
      console.log(grade.grade_id)
    }

    getGrades= ()=>{
      this.api.getAllGrades().subscribe(
        data =>{
          this.grades = data.results;
        },
        error =>{
          console.log(error);
        }
      );
    }

    saveGrade = (gradeData)=>{
      this.api.saveGrade(gradeData).subscribe(
        data =>{
           this.getGrades();
        },
        error =>{
          console.log(error);
        }
      );
     
    }

}
