import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { HttpClient } from "@angular/common/http";
import { Subject, tap } from "rxjs";


@Injectable({
  providedIn:'root'
})
export class RecipeService{

  constructor(private http:HttpClient){}

  recipeList:Recipe[] = [
    new Recipe(0,"Banana Shake","Ragi Oats Cookies With Banana Milkshake Recipe Card","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Ragi-Oats-Cookies-With-Banana-Milkshake.JPG",[new Ingredient("Banana",2),new Ingredient("Milk",500),new Ingredient("Vanilla Icecream",1)])
    ,new Recipe(1,"Pizza Rolls","How to make Pizza Roll Ups - This snack resembles swiss roll but is savoury and quite wholesome","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Pizza-Roll-Ups.JPG",[new Ingredient("Bread",10),new Ingredient("Fresh yeast",4),new Ingredient("Sugar",10),new Ingredient('Refined flour',3),new Ingredient("Mozzarella cheese",2)])
    ,new Recipe(2,"Beetroot Browines","These extremely healthy and dark pink brownies are simply irresistible","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Beetroot-Browines.JPG",[new Ingredient("Flax seed",10),new Ingredient("Ripe banana",10),new Ingredient("Cocoa powder",10)])
    // ,new Recipe(3,'Rainbow Idli',"These rainbow idlis made with different coloured vegetables and nuts are served with ruby red ketchup made with beetroots","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Rainbow-Idli-with-Beet-Ketchup.JPG",[new Ingredient("Bread",10),new Ingredient("Fresh yeast",4),new Ingredient("Sugar",10),new Ingredient('Refined flour',3),new Ingredient("Mozzarella cheese",2)])
    // ,new Recipe(4,'Herbed Chicken',"This dish makes an excellent meal – bursting with flavour of fresh oregano","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Herbed-Chicken-and-Rice-Casserole.JPG",[new Ingredient("Bread",10),new Ingredient("Fresh yeast",4),new Ingredient("Sugar",10),new Ingredient('Refined flour',3),new Ingredient("Mozzarella cheese",2)])
    // ,new Recipe(5,'Corn Sprouts Bhel',"There is no kurmura in this bhel. It is made with corn kernels and mixed sprouts making it super healthy","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Corn-Sprouts-Bhel.JPG",[new Ingredient("Bread",10),new Ingredient("Fresh yeast",4),new Ingredient("Sugar",10),new Ingredient('Refined flour',3),new Ingredient("Mozzarella cheese",2)])
  ];

  recipeListChanged = new Subject<Recipe[]>();

  setRecipeList(list:Recipe[]){
    this.recipeList = list;
    this.recipeListChanged.next(this.recipeList);
  }

  getRecipeList(){
    return this.recipeList;
  }

  getRecipeById(id:number){
    let idx = this.recipeList.findIndex(r=>r.id==id);
    return this.recipeList[idx];
  }

  addNewRecipe(recipe:Recipe){
    recipe.id = this.recipeList.length;
    this.recipeList.push(recipe);
    this.recipeListChanged.next(this.recipeList.slice());
  }
  updateRecipe(recipe:Recipe){
    let idx = this.recipeList.findIndex(rec=>rec.id == recipe.id);
    this.recipeList[idx] = recipe;
    this.recipeListChanged.next(this.recipeList.slice());
  }

  fetchRecipes(){
    this.http.get<any[]>("http://localhost:8000/all").pipe(tap(data=>{
      console.log("In tap operator");
      console.log("Data Recived ",data)
    })).subscribe(data=>{
      this.setRecipeList(data);
    },err=>{
      console.log("Error in fetching recipes",err);
    },()=>{
      console.log("Observer completed");
    })
  }

}
