import { Component, OnInit,Input  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { GradeService } from '../grade.service';
import { ToastrService } from 'ngx-toastr';

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
    public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private gradeService: GradeService, private toastr: ToastrService
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
  

  saveGrade(submitted, status,gradeForm){
    if(submitted && status==="INVALID")
    return false;
    
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
         this.activeModal.close({operation: false});
      },
      error =>{
        //Use model validation later
        let message  = this.createErrorString(error);
        this.showErrorMessage(message);
      }
    );
  }
  createErrorString(error){
    //Todo make this dynamic 
    let message = "";
    if(error.error.grade_year){
      message = message.concat("Grade Year: ").concat(error.error.grade_year[0]);
    }
    if(error.error.name){
      message = message.concat("\n Name: ").concat(error.error.name[0])
    }
    return message;
  }
  updateGrade= (model,id)=>
  {
    this.gradeService.updateGrade(model,id).subscribe(
      data =>{
         this.operation = true;
         this.activeModal.close({operation: true});
      },
      error =>{
        
      }
    );
  }
  closeModal() {
    this.activeModal.close();
  }
  showErrorMessage(message){
    this.toastr.error(message);
  }
   
}

