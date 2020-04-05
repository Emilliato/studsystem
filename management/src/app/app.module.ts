// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import 'ag-grid-enterprise';
import { ModuleRegistry, AllModules } from '@ag-grid-enterprise/all-modules';

ModuleRegistry.registerModules(AllModules);

import { from } from 'rxjs';

//Componets
import { AppComponent } from './app.component';
import {GradeComponent} from './grade/grade.component';
import { StudentsComponent } from './students/students.component';
import { GradeModalComponent } from './grade/grade-modal/grade-modal.component';

//Routes
const appRoutes: Routes = [
  { path: 'grades', component: GradeComponent },
  { path: 'students', component: StudentsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    GradeComponent,
    StudentsComponent,
    GradeModalComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AgGridModule.withComponents([]),

    //Routes registration
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  entryComponents:[
    GradeModalComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
