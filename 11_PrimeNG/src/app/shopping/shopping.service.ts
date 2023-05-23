import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";


@Injectable({
  providedIn:"root"
})
export class ShoppingService{

  ingredientsList:Ingredient[] = [
    new Ingredient("Lorem",12),
    new Ingredient("Ipsum",5),
    // new Ingredient("compled",8),
    // new Ingredient("yourcws",34),
    // new Ingredient("demoasd",65),
    // new Ingredient("tomato",12),
  ];

  shoppingListChanged = new Subject<Ingredient[]>();

  getIngredientList(){
    return this.ingredientsList;
  }

  addIngredient(ing:Ingredient){
    console.log('Added',this.ingredientsList.length);
    this.ingredientsList.push(ing);
    this.shoppingListChanged.next(this.ingredientsList);
  }

  addIngredients(int:Ingredient[]){
    this.ingredientsList.push(...int);
    this.shoppingListChanged.next(this.ingredientsList);
  }

}
