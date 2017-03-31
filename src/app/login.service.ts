import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

@Injectable()

export class LoginService {
  
  constructor(private http: Http) {}
  doLogin(loginData : Object): Promise<Object> {
    return new Promise((resolve, reject)=>{
      //this.http.post('/api/login',loginData)
      //              .then((response)=>{

      //              })
      //              .catch((error)=>{
        
      //})
      if(loginData.username === "admin" && loginData.password === "admin"){
        resolve({name:"nitesh",password:"admin"})
      }else{
        reject({error:"username and password not match"})
      }
      
    })

  }
}