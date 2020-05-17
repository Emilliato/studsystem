import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubjectsService } from './subjects.service';
import { GradeService } from '../grade/grade.service';
import { SystemService } from '../shared/system.service';
import { StudentsService } from '../students/students.service';
import { SubjectModalComponent } from './subject-modal/subject-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subjects',
  templateUrl: '../shared/grid.component.html',
})
export class SubjectsComponent implements OnInit {

  title = 'Subjects'
  rowData: any;
  columnDefs: any;
  private gridApi: any;
  private selectedSubject: any;
  private allSubjects: any[];
  allGrades: any[];

  constructor(private modalService: NgbModal, 
              private api: SubjectsService,
              private gradeService: GradeService, 
              private studentService: StudentsService, 
              private systemService: SystemService) 
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
  createView= ()=>{
    this.openModal(null,this.allGrades);
  }

  updateView= ()=>{
    this.selectedSubject ? this.openModal(this.selectedSubject, this.allGrades) : this.systemService.showNoRecordSelected();
    this.selectedSubject = null;
    this.gridApi.deselectAll();
  }
  deleteView(){
    this.selectedSubject ? this.deleteSubject(this.selectedSubject.subject_id) : this.systemService.showNoRecordSelected();
    this.selectedSubject = null;
    this.gridApi.deselectAll();
  }

  onSelectionChanged(params) {
    var selectedRows = this.gridApi.getSelectedRows();
    this.setSelectedSubject(selectedRows);
  }

  setSelectedSubject(selectedRows: any) {
    selectedRows.length === 1 ? this.selectedSubject = selectedRows[0] : this.selectedSubject = null;
  }
  
  getGrades(): void{
    this.gradeService.getAllGrades().subscribe(
      data =>{
        this.allGrades = this.createGradesComboboxData(data.results);
      },
      error=>{
        console.log(error)
      }
    );
  }
  createGradesComboboxData =(rawData)=>{
    let gradeObjects = [];
    rawData.forEach(element => {
        gradeObjects.push({value: element.grade_id, label: element.name + '-'+ element.grade_year})
      });
    return gradeObjects;
  }

   //Modal options 
   openModal = (model,grades) => {
    const modalRef = this.modalService.open(SubjectModalComponent,
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

  deleteSubject = (id) => {
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
