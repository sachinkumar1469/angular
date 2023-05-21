import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

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

  getIngredientById(id:number):Ingredient{
    return this.ingredients[id];
  }

  updateIngredientById(id:number,ing:Ingredient){
    this.ingredients[id] = ing;
    this.ingredientsUpdated.emit(this.ingredients);
  }

  deleteById(id:number):void{
    this.ingredients.splice(id,1);
    this.ingredientsUpdated.emit(this.ingredients);
  }

  ingredientsUpdated = new EventEmitter<Ingredient[]>();

  editIngredient = new Subject<number>();
}
