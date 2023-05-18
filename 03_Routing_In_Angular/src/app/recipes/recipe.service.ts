
import {Injectable,EventEmitter} from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-lists/shopping.service";
import { Subject } from "rxjs"

@Injectable({providedIn:'root'})
export class RecipeService{
  constructor(private shoppingSrv:ShoppingService){}

  private recipes:Recipe[] = [
    new Recipe(0,"Burger","A sandwich consisting of one or more cooked patties, placed inside a sliced bread roll or bun roll","https://img.freepik.com/free-photo/fresh-hamburger-with-salad-onion_144627-9522.jpg?size=626&ext=jpg&ga=GA1.2.98251874.1684238197&semt=sph",[new Ingredient("Ingredient1",10),new Ingredient("Ingredient2",10),new Ingredient("Ingredient3",10)])
    ,new Recipe(1,"Recipe2","lorem ipsum njyjtyt rewdf jtyrt tert ljoiuen dreg","https://img.freepik.com/free-photo/fresh-hamburger-with-salad-onion_144627-9522.jpg?size=626&ext=jpg&ga=GA1.2.98251874.1684238197&semt=sph",[new Ingredient("afsdf",10),new Ingredient("rewrer",10),new Ingredient("cxvvs",10)])
    ,new Recipe(2,"Recipe3","lorem ipsum iuyt mnbhjk restgh reongt ljoiuen dreg","https://img.freepik.com/free-photo/fresh-hamburger-with-salad-onion_144627-9522.jpg?size=626&ext=jpg&ga=GA1.2.98251874.1684238197&semt=sph",[new Ingredient("cderfv",10),new Ingredient("yhnbgt",10),new Ingredient("ytyrt",10)])
  ];

  public recipeSelectedEvent:Subject<Recipe> = new Subject<Recipe>();

  public getRecipes(){
    return this.recipes.slice(0);
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    for(let ingredient of ingredients){
      this.shoppingSrv.addNewIngredient(ingredient);
    }
  }

  getRecipeById(id:number):Recipe{
    return this.recipes[id];
  }
}
