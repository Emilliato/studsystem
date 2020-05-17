// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import 'ag-grid-enterprise';
import { ModuleRegistry, AllModules } from '@ag-grid-enterprise/all-modules';

ModuleRegistry.registerModules(AllModules);

import { from } from 'rxjs';

//Componets
import { AppComponent } from './app.component';
import {GradeComponent} from './grade/grade.component';
import { StudentsComponent } from './students/students.component';
import { GradeModalComponent } from './grade/grade-modal/grade-modal.component';
import { StudentModalComponent } from './students/student-modal/student-modal.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth/auth.guard';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectModalComponent } from './subjects/subject-modal/subject-modal.component';

//Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard],
     children: [
                  { path: 'grades', component: GradeComponent },
                  { path: 'students', component: StudentsComponent },
                  { path: 'subjects', component: SubjectsComponent }
                ]
  },
  {path: 'signin', component:SigninComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    GradeComponent,
    StudentsComponent,
    GradeModalComponent,
    StudentModalComponent,
    HomeComponent,
    SigninComponent,
    SubjectsComponent,
    SubjectModalComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    jqxComboBoxModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {progressBar: true,
       progressAnimation: 'decreasing'
      }
    ),
    AgGridModule.withComponents([]),

    //Routes registration
    RouterModule.forRoot(
      appRoutes
    )
  ],
  entryComponents:[
    GradeModalComponent
  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
