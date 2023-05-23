
import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { exhaustMap, take } from "rxjs";

@Injectable({
  providedIn:"root"
})
export class DataStorageService{
  constructor(private http:HttpClient,private recipeSrc:RecipeService,private authSrv:AuthService){}



  saveRecipes(){
    let recipes = this.recipeSrc.getRecipes();
    this.authSrv.user.pipe(take(1),exhaustMap(user=>{
      return this.http.put("http://localhost:8000/save",recipes,{
        headers:{
          "Authorization":"Bearer "+user?.token
        }
      });
    }))
    .subscribe(data=>{
      console.log("response",data);
    },(err)=>{
      console.log("Error >>>>",err);
    })
  }


  getRecipes(){
    return this.authSrv.user.pipe(take(1),exhaustMap(user=>{
      return this.http.get<any[]>("http://localhost:8000/all",{
        headers:{
          "Authorization":"Bearer "+user?.token
        }
      });
    }))
    .subscribe(recipesList=>{
      console.log(recipesList,"List")
      this.recipeSrc.setRecipes(recipesList);
    });
  }
}
