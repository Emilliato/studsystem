import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'protractor';
import Swal from 'sweetalert2'

import { StudentsService } from './students.service';
import { SystemService } from '../shared/system.service';
import { StudentModalComponent} from './student-modal/student-modal.component';
import { GradeService } from '../grade/grade.service';
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
  private allGrades: any[];

  constructor(private modalService: NgbModal, private api: StudentsService,private gradeService: GradeService, private systemService: SystemService) 
  { 

  }

  onGridReady(params) {
    this.gridApi = params.api;
  }
  ngOnInit(): void {
    this.getGridData();
    this.getGrades();
    this.columnDefs = this.api.getGridSettings();
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
 //Crud Functions
  createView= ()=>{
    this.openModal(null,this.allGrades);
  }

  updateView= ()=>{
    this.selectedStudent ? this.openModal(this.selectedStudent, this.allGrades) : this.systemService.showNoRecordSelected();
    this.selectedStudent = null;
    this.gridApi.deselectAll();
  }

  deleteView= ()=>{
    this.selectedStudent ? this.deleteStudent(this.selectedStudent.student_id) : this.systemService.showNoRecordSelected();
    this.selectedStudent = null;
    this.gridApi.deselectAll();
  }
  onSelectionChanged(params) {
    var selectedRows = this.gridApi.getSelectedRows();
    this.setSelectedStudent(selectedRows);
  }
  setSelectedStudent = (selectedRows) => {
    selectedRows.length === 1 ? this.selectedStudent = selectedRows[0] : this.selectedStudent = null;
  }
  getGrades(): void{
    this.gradeService.getAllGrades().subscribe(
      data =>{
        this.allGrades = this.createComboboxData(data.results);
      },
      error=>{
        console.log(error)
      }
    );
  }
  createComboboxData =(rawData)=>{
    let gradeObjects = [];
    rawData.forEach(element => {
        gradeObjects.push({value: element.grade_id, label: element.name + '-'+ element.grade_year})
      });
    return gradeObjects;
  }
  //Modal options 
  openModal = (model,grades) => {
    const modalRef = this.modalService.open(StudentModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        backdrop: 'static'
      });

    if (model) {
      modalRef.componentInstance.fromParent = model;
    }
    if(grades){
      modalRef.componentInstance.parentGrades = grades;
    }

    modalRef.result.then((result) => {
      if (result) {
        this.getGridData();
        if(result.operation === true){
          this.systemService.showSuccess('Update Successfull');
        }else{
          this.systemService.showSuccess('Add Successfull');
        }
      }
    }, (reason) => {
      
    });
  }
  deleteStudent = (id) => {
    //Refactor to be reusable
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#70973f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.api.delete(id).subscribe(
          data => {
            this.systemService.showSuccess('Record Deleted');
            this.getGridData();
          },
          error => {
            this.systemService.showError(error.name);
          }
        );
      }
    })
    
  }


}
