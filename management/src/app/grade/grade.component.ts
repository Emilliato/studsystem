import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'protractor';
import Swal from 'sweetalert2';

import { GradeService } from './grade.service';
import { SystemService } from '../shared/system.service';
import { GradeModalComponent } from "./grade-modal/grade-modal.component"

@Component({
  selector: 'app-grade',
  templateUrl: '../shared/grid.component.html',
  providers: [GradeService]
})



export class GradeComponent implements OnInit {

  title = "Grades";

  rowData: any;
  columnDefs: any;
  private gridApi: any;
  private selectedGrade: any;

  constructor(private modalService: NgbModal, private api: GradeService, private systemService: SystemService) {

  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  ngOnInit() {
    this.getGridData();
    this.columnDefs = this.api.getGridSettings()
  }

  onSelectionChanged(params) {
    var selectedRows = this.gridApi.getSelectedRows();
    this.setSelectedGrade(selectedRows);
  }

  setSelectedGrade = (selectedRows) => {
    selectedRows.length === 1 ? this.selectedGrade = selectedRows[0] : this.selectedGrade = null;
  }
  createView = () => {
    this.openModal(null);
  }
  updateView = () => {
    this.selectedGrade ? this.openModal(this.selectedGrade) : this.systemService.showNoRecordSelected();
    this.selectedGrade = null;
    this.gridApi.deselectAll();
  }
  deleteView = () => {
    this.selectedGrade ? this.deleteGrade(this.selectedGrade.grade_id) : this.systemService.showNoRecordSelected();
    this.selectedGrade = null;
    this.gridApi.deselectAll();
  }

  //Modal options 
  openModal = (model) => {
    const modalRef = this.modalService.open(GradeModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        backdrop: 'static'
      });

    if (model) {
      modalRef.componentInstance.fromParent = model;

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

  //Requests to the server
  getGridData = () => {
    this.api.getAllGrades().subscribe(
      data => {
        this.rowData = data.results;
      },
      error => {
        this.systemService.showError(error.name);
      }
    );
  }
  
  deleteGrade = (id) => {
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
        this.api.deleteGrade(id).subscribe(
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
