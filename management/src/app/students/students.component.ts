import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'protractor';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: '../shared/grid.component.html',
})

export class StudentsComponent implements OnInit {
  title = 'Students'
  rowData: any;
  columnDefs: any;
  private gridApi: any;
  private selectedStudent: any;

  constructor(private modalService: NgbModal, private api: StudentsService) 
  { 

  }

  onGridReady(params) {
    this.gridApi = params.api;
  }
  ngOnInit(): void {
    this.getGridData();
    this.columnDefs = this.api.getGridSettings()
  }
  getGridData() {
    this.api.get().subscribe(
      data=>{
         this.rowData = data.results;
      },
      error=>{
        console.log(error)
      }
    );
  }

  createView= ()=>{

  }

  updateView= ()=>{
    
  }

  deleteView= ()=>{
    
  }
  onSelectionChanged(params) {
    var selectedRows = this.gridApi.getSelectedRows();
    this.setSelectedStudent(selectedRows);
  }
  setSelectedStudent = (selectedRows) => {
    selectedRows.length === 1 ? this.selectedStudent = selectedRows[0] : this.selectedStudent = null;
  }

}
