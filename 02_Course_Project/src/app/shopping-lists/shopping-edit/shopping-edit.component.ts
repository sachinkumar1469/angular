import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  constructor(private shoppingSrv:ShoppingService){}

  @ViewChild("ingredientName")
  ingredientNameEl!: ElementRef;

  @ViewChild("ingredientAmount")
  ingredientAmountEl!: ElementRef;



  onAddIngredient(e:Event){
    e.preventDefault();
    let name = this.ingredientNameEl.nativeElement.value;
    let amount = this.ingredientAmountEl.nativeElement.value;

    this.shoppingSrv.addNewIngredient(new Ingredient(name,amount));

    this.ingredientNameEl.nativeElement.value = "";
    this.ingredientAmountEl.nativeElement.value = 0;

  }

}
