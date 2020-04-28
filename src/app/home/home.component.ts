import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../shared/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  username: string;
  surname: string;

  constructor(private router :Router, private systemService: SystemService) { }

  ngOnInit(): void { 
    this.getUserDetails();   
  }
  
  signOut = ()=>{
    localStorage.removeItem('temporary');
    this.router.navigate(['/signin']);
  }

  getUserDetails = ()=>{
  this.systemService.getUserDetail().subscribe(
    data=>{
    this.username = data.username;
    this.surname = data.last_name
    },
    error=>{
      this.systemService.showError(error.message);
    }
  );
  }
}
