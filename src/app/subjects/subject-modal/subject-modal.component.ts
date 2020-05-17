import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox/public_api';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SubjectsService } from '../subjects.service';
import { StudentsService } from 'src/app/students/students.service';
import { element } from 'protractor';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html'
})
export class SubjectModalComponent implements OnInit {

  public tittle= "Add Subject";
  subject: any;
  grades: any[];
  studentList: any[];
  studentIDs: string[];
  public operation: boolean;
  @Input() fromParent;
  @Input() parentGrades;
  @Input() parentStudents;
  @ViewChild('gradeCombobox') myComboBox: jqxComboBoxComponent; 
  @ViewChild('studentsCombobox') studentsCombobox: jqxComboBoxComponent; 
  constructor(public activeModal: NgbActiveModal, 
              private formBuilder: FormBuilder, 
              private subjectService: SubjectsService,
              private studentService: StudentsService,
              private toastr: ToastrService) 
  {
    this.subject ={
      subject_id: 0,
      subject_name: '',
      prev_grade_id: 0,
      grade:'',
      students: [],
      active: true,
      date_created: ''
    }
   }
  ngAfterViewInit(): void {
    this.myComboBox.selectItem({value: this.subject.grade});
    
  }

  ngOnInit(): void {
    this.grades = this.parentGrades;
    if(this.fromParent){
      this.tittle = "Update Subject";
      this.operation = false;
      
      this.subject= {
        subject_id: this.fromParent.subject_id,
        subject_name: this.fromParent.subject_name,
        grade: this.fromParent.grade,
        prev_grade_id: this.fromParent.prev_grade_id,
        students: this.fromParent.students,
        active: this.fromParent.active,
        date_created: this.fromParent.date_created
      }
      this.getStudentsByGade(this.fromParent.grade);
    }else{
      this.operation = true;
    }

  }
  onStudentCheck(): void{
    let data = this.studentsCombobox.getCheckedItems();
    let studentIds = [];
    data.forEach(element =>{
      studentIds.push(element.originalItem.value);
    });
    this.subject.students = studentIds;
    this.studentIDs = studentIds;
  }
  saveSubject(submitted, status,subjectForm){

    subjectForm.students = this.studentIDs.join();
    if(submitted && status==="INVALID")
      return false;

    if(this.operation){
      this.addSubject(subjectForm);
    }else{
      this.updateSubject(subjectForm,this.fromParent.subject_id);
    }
  }
  addSubject= (model)=>
  {
    model.prev_grade_id = model.grade_id;
    this.subjectService.post(model).subscribe(
      data =>{
         this.activeModal.close({operation:false});
      },
      error =>{
        this.showErrorMessage(error.message);
      }
    );
  }

  updateSubject= (model,id)=>
  {
    this.subjectService.put(model,id).subscribe(
      data =>{
         this.operation = true;
         this.activeModal.close({operation: true});
      },
      error =>{
        this.showErrorMessage(error.message);
      }
    );
  }

  closeModal= ()=>{
    this.activeModal.close(null);
  }
  showErrorMessage(message){
    this.toastr.error(message);
  }
 onGradeChange = ()=>{
   let value: string;
  if(!this.subject.grade)
     value = this.myComboBox.getSelectedItem().value;
  
  if(value){
    this.subject.grade = value;
    this.getStudentsByGade(this.subject.grade);
  }
 }
  getStudentsByGade(id): void{
    this.studentService.getStudentsByGrade(id).subscribe(
      data =>{
        this.studentList = this.createStudentsComboboxData(data.results);
      },
      error=>{
        console.log(error)
      }
    );
  }
  createStudentsComboboxData =(rawData)=>{
    let studentObjects = [];
    rawData.forEach(element => {
      studentObjects.push({value: element.student_id, label: element.student_number})
      });
    return studentObjects;
  }

}
