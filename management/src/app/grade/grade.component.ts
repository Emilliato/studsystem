import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'protractor';

import { GradeService } from './grade.service';
import { GradeModalComponent } from "./grade-modal/grade-modal.component"

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  providers: [GradeService]
})



export class GradeComponent implements OnInit{
    
    gradeForm;
    

    constructor(private modalService:NgbModal, private api:GradeService, private formBuilder: FormBuilder){
     this.gradeForm = this.formBuilder.group({
      name: '',
      grade_year: '',
      term: ''
     });
    }
    ngOnInit() {
      this.getGrades();
    }
    
    gradeSelected = (grade)=>{
      console.log(grade.grade_id)
    }
    grades=[]

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
 
    data = this.grades;

    source: any =
    {
        datatype: 'json',
        datafields: 
        [
            { name: 'name', type: 'string', map: '0' },
            { name: 'grade_year', type: 'string', map: '1' },
            { name: 'Number Of Students', type: 'string', map: '2' },
            { name: 'Active', type: 'boolean', map: '3' },
            { name: 'Date Created', type: 'string', map: '4' },
        ],
        id: "grade_id",
        url: "http://localhost:8000/api/grades",
        type: "GET"
    };
 
    dataAdapter: any = new jqx.dataAdapter(this.source);
 
    columns: any[] =
    [
        { text: 'Name', datafield: 'name', width: '20%' },
        { text: 'Year', datafield: 'grade_year', width: '20%' },
        { text: 'Number Of Students', datafield: 'Title', width: '20%' },
        { text: 'Active', datafield: 'active', width: '20%' },
        { text: 'Date Created', datafield: 'date_created', width: '20%' }
        
    ];
    columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  //Modal options 
  openModal() {
    const modalRef = this.modalService.open(GradeModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        backdrop: 'static'
      });
 
    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }
 
    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      //console.log(result);
      this.saveGrade(result);
    }, (reason) => {
    });
  }
}
