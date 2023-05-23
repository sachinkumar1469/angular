import { OnInit, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';
// import { DataService } from '../recipe/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  overlayVisible: boolean = false;
  public isAuthenticated = false;
  constructor(private authSrv:AuthService,private router:Router,private recipeSrv:RecipeService){}

  ngOnInit(): void {
    this.authSrv.user.subscribe(user=>{
      if(user==null){
        this.isAuthenticated = false;
      } else {
        this.isAuthenticated = true;
      }
    })
  }

  toggle() {
      this.overlayVisible = !this.overlayVisible;
  }
  onSave(){
    this.overlayVisible = false;
  }
  onFetch(){
    this.overlayVisible = false;
    console.log("Fetch Button Just Clicked");
    this.recipeSrv.fetchRecipes();
    // this.dataSrv.getRecipes();
  }
  onNew(){
    this.overlayVisible = false;
  }
  onLogout(){
    this.authSrv.onLogout();
    this.router.navigate(["/","auth"])
  }
  visible: boolean = false;
  showDialog(){
    // this.onLogout();
    if(this.isAuthenticated){
      this.visible = true;
    }
  }
  onModalAction(value:boolean){
    if(value){
      this.onLogout();
    }else {
      this.visible = false;
    }
  }
}
