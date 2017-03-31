import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  template: `
   <h1>Welcome User</h1>
   <button (click)="logout()">Logout</button>
  `
})

export class HomeComponent implements OnInit{
  constructor( private router: Router){}
  ngOnInit(): void {
    var userdata = localStorage.getItem('LMSUSER');
    if(!userdata)
      this.router.navigate(['/login'])
  }
  logout(){
    localStorage.removeItem("LMSUSER");
    this.router.navigate(['/login'])
  }  
}