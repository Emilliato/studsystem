import { Component, OnInit,Input  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-grade-modal',
  templateUrl: './grade-modal.component.html',
  providers:[GradeService]
})
export class GradeModalComponent implements OnInit {

  public tittle= "Add Grade";
  @Input() fromParent;
  grade: any;
  public operation: boolean;
  
  constructor(
    public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private gradeService: GradeService
  ){ 
    this.grade ={
      grade_id: 0,
      name: '',
      grade_year: '',
      number_of_students:'',
      active: false,
      date_created: ''
    }
  }
 
  ngOnInit() {
    if(this.fromParent){
      this.tittle = "Update Grade";
      this.grade = {
        grade_id: this.fromParent.grade_id,
        name: this.fromParent.name,
        grade_year: this.fromParent.grade_year,
        number_of_students: this.fromParent.number_of_students,
        average: this.fromParent.average,
        date_created: this.fromParent.date_created,
        active: this.fromParent.active
      };
      this.operation = false;
    }else{
      this.operation = true;
    }
  }
  

  saveGrade(gradeForm){
    
    if(this.operation){
      this.addGrade(gradeForm);
    }else{
      this.updateGrade(gradeForm,this.fromParent.grade_id);
    }
  }

  addGrade= (model)=>
  {
    this.gradeService.saveGrade(model).subscribe(
      data =>{
         alert("Grade Saved" + data);
         this.activeModal.close(model);
      },
      error =>{
        console.log(error);
      }
    );
  }

  updateGrade= (model,id)=>
  {
    this.gradeService.updateGrade(model,id).subscribe(
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
  closeModal() {
    this.activeModal.close();
  }
   
}

