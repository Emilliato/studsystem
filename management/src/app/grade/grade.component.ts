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
    private gridApi: any;
    private selectedGrade: any;

    constructor(private modalService:NgbModal, private api:GradeService)
    {

    }

    onGridReady(params) 
    {
      this.gridApi = params.api;
    }

    ngOnInit() 
    {
      this.getGridData();
      this.columnDefs= this.api.getGridSettings()
    }
    
    
    onSelectionChanged(params) 
    {
      var selectedRows = this.gridApi.getSelectedRows();
      this.setSelectedGrade(selectedRows);
    }
    
    setSelectedGrade = (selectedRows)=>
    {
      selectedRows.length === 1 ? this.selectedGrade= selectedRows[0] : this.selectedGrade= null;
    }
    createGrade =()=>
    {
      this.openModal(null);
    }
    updateGrade= ()=>{
      this.selectedGrade ? this.openModal(this.selectedGrade): alert("No Grade Selected")
      this.selectedGrade= null;
    }
    deleteView =()=>
    {
      this.selectedGrade ? this.deleteGrade(this.selectedGrade.grade_id): alert("No Grade Selected");
      this.selectedGrade= null;
    }
    
  //Modal options 
  openModal = (model)=> 
  {
    const modalRef = this.modalService.open(GradeModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        backdrop: 'static'
      });
    
    if(model)
    {
      modalRef.componentInstance.fromParent = model;

    }
    
    modalRef.result.then((result) => {
     if(result){
      this.getGridData();
     }
    }, (reason) => {
    });
  }

  //Requests to the server
  getGridData =()=>
  {
    this.api.getAllGrades().subscribe(
      data =>{
        this.rowData = data.results;
      },
      error =>{
        console.log(error);
      }
    );
  }
  deleteGrade=(id)=>
  {
    
    this.api.deleteGrade(id).subscribe(
      data =>{
        alert("Delete Successfull");
        this.getGridData();
      },
      error =>{
        console.log(error);
      }
    );
  }
}
