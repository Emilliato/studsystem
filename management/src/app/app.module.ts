import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {GradeComponent} from './grade/grade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { jqxGridModule }    from 'jqwidgets-ng/jqxgrid';
import { from } from 'rxjs';
import { StudentsComponent } from './students/students.component';

const appRoutes: Routes = [
  { path: 'grades', component: GradeComponent },
  { path: 'students', component: StudentsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    GradeComponent,
    StudentsComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    jqxGridModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
