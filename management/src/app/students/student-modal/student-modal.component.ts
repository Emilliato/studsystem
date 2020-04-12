import { Component, OnInit,Input, ViewChild, AfterViewInit  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import {StudentsService} from '../students.service';

import { error } from 'protractor';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  providers:[StudentsService]
})
export class StudentModalComponent implements OnInit,AfterViewInit {

  public tittle= "Add Student";
  student: any;
  grades: any[];
  public operation: boolean;
  @Input() fromParent;
  @Input() parentGrades;
  @ViewChild('gradeCombobox') myComboBox: jqxComboBoxComponent; 
  
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private studentService: StudentsService) 
  {
    this.student ={
      student_id: 0,
      student_name: '',
      student_surname: '',
      grade_id:'',
      prev_grade_id:'',
      active: false,
      date_created: ''
    }
   }
  ngAfterViewInit(): void {
    this.myComboBox.selectItem({value: this.student.grade_id});
  }

  ngOnInit(): void {
    this.grades = this.parentGrades;
    if(this.fromParent){
      this.tittle = "Update Student";
      this.operation = false;
      this.student= {
        student_id: this.fromParent.student_id,
        student_name: this.fromParent.student_name,
        student_surname: this.fromParent.student_surname,
        grade_id: this.fromParent.grade_id,
        prev_grade_id: this.fromParent.grade_id,
        active: this.fromParent.active,
        date_created: this.fromParent.date_created
      }
    }else{
      this.operation = true;
    }

  }
  saveStudent(studentForm){
    
    if(this.operation){
      this.addStudent(studentForm);
    }else{
      this.updateStudent(studentForm,this.fromParent.student_id);
    }
  }
  addStudent= (model)=>
  {
    model.prev_grade_id = model.grade_id;
    this.studentService.post(model).subscribe(
      data =>{
         alert("Grade Saved" + data);
         this.activeModal.close(model);
      },
      error =>{
        console.log(error);
      }
    );
  }

  updateStudent= (model,id)=>
  {
    this.studentService.put(model,id).subscribe(
      data =>{
         alert("Grade Updated" + data);
         this.operation = true;
         this.activeModal.close(model);
      },
      error =>{
        console.log(error);
      }
    );
  }

  closeModal= ()=>{
    this.activeModal.close(null);
  }

}
