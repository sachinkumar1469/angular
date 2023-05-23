import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, tap } from "rxjs";
import { User } from "./user.model";
import { Route, Router } from "@angular/router";

@Injectable({
  providedIn:"root"
})
export class AuthService{

  constructor(private http:HttpClient,private router:Router){}

  // We can subscribe to behaviour subject even after it emitted the value.
  // When we access it gives the previous value
  user = new BehaviorSubject<User|null>(null);
  // token = new BehaviorSubject<string|null>(null);

  signUp(user:{email:string,password:string}){
    return this.http.post("http://localhost:8000/signup",user).pipe(tap((resData:any)=>{
      if(!resData.token){
        this.user.next(null);
        return;
      }
      const userObj = new User(resData.user.email,resData.user._id,resData.token);
      this.user.next(userObj);
      localStorage.setItem("user",JSON.stringify(userObj));
    }));
  }
  signin(user:{email:string,password:string}){
    return this.http.post("http://localhost:8000/signin",user).pipe(tap((resData:any)=>{
      if(!resData.token){
        this.user.next(null);
        return;
      }
      const userObj = new User(resData.user.email,resData.user._id,resData.token);
      this.user.next(userObj);
      localStorage.setItem("user",JSON.stringify(userObj));
    }));
  }
  autoLogin(){
    let storage:string|null = localStorage.getItem("user");
    let user:User|null = null;
    
    if(storage){
      user = JSON.parse(storage);
    }

    if(user){
      this.user.next(user);
      this.router.navigate(["/recipe"])
    }
  }
  onLogout(){
    this.user.next(null);
    localStorage.removeItem("user");
    this.router.navigate(["/auth"]);
  }
}
