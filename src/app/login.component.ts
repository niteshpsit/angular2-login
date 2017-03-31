import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'Login-page',
  template: `
   <h1>Login Here</h1>
   <form (ngSubmit)="formSubmit()">
    <div>
      <label>Username:</label>
      <input type="text" id="uname" name="username" [(ngModel)]="data.username"/>
    </div>
    <div>
      <label>Username:</label>
      <input type="text" id="pwd" name="password" [(ngModel)]="data.password"/>
    </div>
    <div>{{error}}</div>
    <button type="submit">Login</button>
   </form>
  `,
  providers: [LoginService]
})

export class LoginComponent  implements OnInit  {
  data = {
    username:"",
    password:""
  }
  error: string;
  constructor( private router: Router, private LoginService: LoginService){}
  ngOnInit(): void {
    var userdata = localStorage.getItem('LMSUSER');
    if(userdata)
      this.router.navigate(['/home'])
  }
  formSubmit(){
    this.LoginService.doLogin(this.data)
    .then((data)=>{
      localStorage.setItem('LMSUSER', JSON.stringify(data));
      this.router.navigate(['/home'])
    })
    .catch(err=>{
      this.error = err.error;
    })
    
  }
}