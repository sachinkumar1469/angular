import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  private ingredients:Ingredient[] = [
    // new Ingredient("Ingredient1",5),
    // new Ingredient("Ingredint2",10)
  ];

  addNewIngredient(e:Ingredient){
    this.ingredients.push(e);
    this.ingredientsUpdated.emit(this.ingredients);
  }

  getIngredientsList(){
    return this.ingredients.slice(0);
  }

  ingredientsUpdated = new EventEmitter<Ingredient[]>();
}
