import { Component, OnInit } from '@angular/core';
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
    title= "Grades";
    rowData:any ;
    columnDefs: any;
    constructor(private modalService:NgbModal, private api:GradeService){
    }

    ngOnInit() {
      this.getGridData();
      this.columnDefs= this.api.getGridSettings()
    }

    getGridData =()=>{
      this.api.getAllGrades().subscribe(
        data =>{
          this.rowData = data.results;
        },
        error =>{
          console.log(error);
        }
      );
    }
    
    gradeSelected = (grade)=>{
      console.log(grade.grade_id)
    }
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
      //this.saveGrade(result);
    }, (reason) => {
    });
  }
}
