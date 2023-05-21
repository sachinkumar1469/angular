
import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({
  providedIn:"root"
})
export class DataStorageService{
  constructor(private http:HttpClient,private recipeSrc:RecipeService){}

  saveRecipes(){
    let recipes = this.recipeSrc.getRecipes();
    this.http.put("http://localhost:8000/save",recipes).subscribe(data=>{
      console.log("response",data);
    })
  }


  getRecipes(){
    this.http.get<any[]>("http://localhost:8000/all")
    .subscribe(recipesList=>{
      this.recipeSrc.setRecipes(recipesList);
    });
  }
}
