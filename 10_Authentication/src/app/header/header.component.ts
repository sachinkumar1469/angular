import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router,private rStorageSrv:DataStorageService,private authSrv:AuthService){}
  isAuthenticated = false;
  authSubscription!:Subscription;

  ngOnInit(): void {
    this.authSubscription = this.authSrv.user.subscribe(user=>{
      if(user==null){
        this.isAuthenticated = false;
      } else {
        this.isAuthenticated = true;
      }
    })
  }

  navigateProg(path:string){
    this.router.navigate([path]);
  }
  newRecipe(){
    this.router.navigate(["/recipe","new"]);
  }
  onSaveRecipe(){
    this.rStorageSrv.saveRecipes();
  }
  onLogout(){
    this.authSrv.onLogout();
  }
}
