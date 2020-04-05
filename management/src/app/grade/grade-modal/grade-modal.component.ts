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

  tittle= "Add Grade";
  addView= true;
  updateView=false;

  @Input() fromParent;

  gradeForm;
  
  constructor(
    public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private gradeService: GradeService
  ) { 

    this.gradeForm = this.formBuilder.group({
      name:'',
      grade_year:'',
      active:''
     });
  }
 
  ngOnInit() {

  }
  

  saveGrade(gradeForm){
    
    this.gradeService.saveGrade(gradeForm).subscribe(
      data =>{
         alert("Grade Saved" + data);
         this.activeModal.close(gradeForm);
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
