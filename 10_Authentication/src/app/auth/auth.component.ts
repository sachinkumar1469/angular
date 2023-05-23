import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLogin = false;
  isLoading = false;

  constructor(private authSrv:AuthService,private router:Router){}

  @ViewChild("authForm")
  authFrom!:NgForm;

  switchMode(){
    this.isLogin = !this.isLogin;
  }

  onAuth(authF:NgForm){
    this.isLoading = true;
    if(this.isLogin){
      this.authSrv.signin(authF.value).subscribe((data)=>{
        this.isLoading = false;
        this.router.navigate(["/recipe"]);
      })
    } else {
      this.authSrv.signUp(authF.value).subscribe((data)=>{
        this.isLoading = false;
        this.router.navigate(["/recipe"]);
        console.log(data);
      });
    }
  }
}
