import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {    
  }
  // Add Functionality to get user details and dispaly on the top header
  signOut = ()=>{
    localStorage.removeItem('temporary');
    this.router.navigate(['/signin']);
  }
}
