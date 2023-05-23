import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm, } from "@angular/forms"
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  constructor(private shoppingSrv:ShoppingService){}

  @ViewChild("ingredientForm") ingredientForm!:NgForm;

  editSubscriptionId!:Subscription;

  isEdit:boolean = false;
  editId!:number;

  ngOnInit(): void {
    this.editSubscriptionId = this.shoppingSrv.editIngredient.subscribe((id)=>{
      let ing = this.shoppingSrv.getIngredientById(id);
      this.ingredientForm.setValue({
        name:ing.name,
        amount:ing.amount
      });
      this.isEdit = true;
      this.editId = id;
    })
  }

  ngOnDestroy(): void {
    this.editSubscriptionId.unsubscribe();
  }

  onAddIngredient(){

    if(this.ingredientForm.valid){
      let value = this.ingredientForm.value;
      if(!this.isEdit){
        this.shoppingSrv.addNewIngredient(new Ingredient(value.name,value.amount));
      }else{
        this.shoppingSrv.updateIngredientById(this.editId,new Ingredient(value.name,value.amount));
      }
      this.ingredientForm.resetForm();
      this.editId = -1;
      this.isEdit = false;
    }
  }

  onDelete(){
    if(this.isEdit){
      this.shoppingSrv.deleteById(this.editId);

    }
    this.ingredientForm.resetForm();
    this.isEdit = false;
  }

}
