import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {GradeComponent} from './grade/grade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    GradeComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
