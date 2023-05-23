import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  constructor(private shoppingSrv:ShoppingService, private cDR:ChangeDetectorRef){}
  ingredients:Ingredient[] = [];


  @ViewChild("ingredientForm")
  iForm!:NgForm;

  ngOnInit(): void {
    this.ingredients = this.shoppingSrv.getIngredientList();
    this.shoppingSrv.shoppingListChanged.subscribe(list=>{
      console.log("Subscribe called")
      this.ingredients = list;
    })
  }

  onAdd(){
    let name = this.iForm.value["name"];
    let amount = this.iForm.value["amount"];
    this.shoppingSrv.addIngredient(new Ingredient(name,amount));
  }
}
