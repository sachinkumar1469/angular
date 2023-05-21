import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  isAuth:boolean = true;

  // Check token in local storage etc.
  isAuthenticated():boolean {
    return this.isAuth;
  }

  login(){
    this.isAuth = true;
  }

  logout(){
    this.isAuth = false;
  }
}
