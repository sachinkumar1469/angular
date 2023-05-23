import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, tap } from "rxjs";
import { User } from "./user.model";




@Injectable({
  providedIn:"root"
})
export class AuthService{

  user = new BehaviorSubject<User|null>(null);

  constructor(private http:HttpClient,private router:Router){}

  onSignIn(detail:{email:any,password:any}){
    return this.http.post<User>("http://localhost:8000/signin",detail)
    .pipe(tap((user)=>{
      if(user){
        this.user.next(user);
        localStorage.setItem("user",JSON.stringify(user));
      }
    }));
  }
  onSignUp(detail:{email:any,password:any}){
    return this.http.post<User>("http://localhost:8000/signup",detail)
    .pipe(tap(user=>{
      if(user){
        this.user.next(user);
        localStorage.setItem("user",JSON.stringify(user));
      }
    }))
  }
  onLogout(){
    this.user.next(null);
  }

}
