import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {

  ingredients:Ingredient[] = []

  constructor(private shoppingService:ShoppingService){
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredientsList();
    this.shoppingService.ingredientsUpdated.subscribe((event)=>{
      this.ingredients = event;
    })
  }

  onEditItem(id:number){
    this.shoppingService.editIngredient.next(id);
  
  }



}
