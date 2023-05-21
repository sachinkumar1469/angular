
import {Injectable,EventEmitter, OnInit} from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-lists/shopping.service";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class RecipeService implements OnInit{
  constructor(private shoppingSrv:ShoppingService){}

  ngOnInit(): void {
    
  }

  recipesListChanged = new Subject<Recipe[]>();

  private recipes:Recipe[] = [
    // new Recipe(0,"Banana Shake","Ragi Oats Cookies With Banana Milkshake Recipe Card","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Ragi-Oats-Cookies-With-Banana-Milkshake.JPG",[new Ingredient("Banana",2),new Ingredient("Milk",500),new Ingredient("Vanilla Icecream",1)])
    // ,new Recipe(1,"Pizza Rolls","How to make Pizza Roll Ups - This snack resembles swiss roll but is savoury and quite wholesome","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Pizza-Roll-Ups.JPG",[new Ingredient("Bread",10),new Ingredient("Fresh yeast",4),new Ingredient("Sugar",10),new Ingredient('Refined flour',3),new Ingredient("Mozzarella cheese",2)])
    // ,new Recipe(2,"Beetroot Browines","These extremely healthy and dark pink brownies are simply irresistible","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Beetroot-Browines.JPG",[new Ingredient("Flax seed",10),new Ingredient("Ripe banana",10),new Ingredient("Cocoa powder",10)])
    // ,new Recipe(3,'Rainbow Idli',"These rainbow idlis made with different coloured vegetables and nuts are served with ruby red ketchup made with beetroots","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Rainbow-Idli-with-Beet-Ketchup.JPG",[new Ingredient("Bread",10),new Ingredient("Fresh yeast",4),new Ingredient("Sugar",10),new Ingredient('Refined flour',3),new Ingredient("Mozzarella cheese",2)])
    // ,new Recipe(4,'Herbed Chicken',"This dish makes an excellent meal – bursting with flavour of fresh oregano","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Herbed-Chicken-and-Rice-Casserole.JPG",[new Ingredient("Bread",10),new Ingredient("Fresh yeast",4),new Ingredient("Sugar",10),new Ingredient('Refined flour',3),new Ingredient("Mozzarella cheese",2)])
    // ,new Recipe(5,'Corn Sprouts Bhel',"There is no kurmura in this bhel. It is made with corn kernels and mixed sprouts making it super healthy","https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Corn-Sprouts-Bhel.JPG",[new Ingredient("Bread",10),new Ingredient("Fresh yeast",4),new Ingredient("Sugar",10),new Ingredient('Refined flour',3),new Ingredient("Mozzarella cheese",2)])

  ];


  public recipeSelectedEvent:Subject<Recipe> = new Subject<Recipe>();

  public getRecipes(){
    return this.recipes.slice(0);
  }

  public setRecipes(recipesList:Recipe[]){
    this.recipes = recipesList;
    this.recipesListChanged.next(this.recipes);
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    for(let ingredient of ingredients){
      this.shoppingSrv.addNewIngredient(ingredient);
    }
  }

  getRecipeById(id:number):Recipe{
    let indx = this.recipes.findIndex(r=>r.id == id);
    return this.recipes[indx];
  }

  addRecipe(recipe:Recipe){
    recipe.id = this.recipes.length;
    this.recipes.push(recipe);
    this.recipesListChanged.next(this.recipes);
  }

  deleteRecipe(index:number){
    let ind = this.recipes.findIndex(r=>r.id == index);
    this.recipes.splice(ind,1);
    this.recipesListChanged.next(this.recipes);
  }

  updateRecipe(id:number,recipe:Recipe){
    let indx = this.recipes.findIndex(r=>r.id == id);
    console.log('idx of update recipe is: '+indx+" Actual id is ",recipe.id);
    this.recipes[indx] = recipe;
    this.recipesListChanged.next(this.recipes);
  }

}
