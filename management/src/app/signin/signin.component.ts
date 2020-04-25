import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import { SystemService } from '../shared/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

  signin: any;
  submitted = false;
  signinError: any;

  constructor(private signinService: SigninService, private systemService: SystemService, private router :Router) {
    this.signin = {
      username: null,
      password: null
    }
   }

  ngOnInit(): void {
  }
  signIn = (model)=>{
    this.submitted = true;
    this.signinService.signin(model).subscribe(
      data => {
          localStorage.setItem("temporary",data.token);
        this.router.navigate(['']);
      },
      error=>{

        this.signinError = "Invalid Credentials. Please Try Again!";
      }
    );
  }
}
