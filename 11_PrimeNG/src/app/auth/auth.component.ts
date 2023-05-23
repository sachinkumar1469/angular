import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private authSrv:AuthService,private router:Router){}

  isSignin = true;
  authForm = new FormGroup({
    email: new FormControl("sachinyadav1469@gmail.com",[Validators.required,Validators.email]),
    password: new FormControl("123456",[Validators.required,Validators.minLength(5)])
  });
  switchMode(){
    this.isSignin = !this.isSignin;
  }
  onSubmit(){
    console.log(this.authForm.value);
    if(!this.authForm.valid){
      return;
    }
    let authObser: Observable<User>;
    if(this.isSignin){
     authObser = this.authSrv.onSignIn({email:this.authForm.value['email'],password:this.authForm.value['password']});
    }else {
     authObser = this.authSrv.onSignUp({email:this.authForm.value['email'],password:this.authForm.value['password']});
    }
    authObser.subscribe(user=>{
      if(user){
        this.router.navigate(["/","recipe"]);
      }
    })
  }
}
