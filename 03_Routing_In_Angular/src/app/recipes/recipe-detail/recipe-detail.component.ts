import { Component, OnInit,OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit,OnDestroy{

  recipeToDisplay:Recipe = new Recipe();

  recipeSelectedSubscribeId!:Subscription;

  constructor(private recipeService:RecipeService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.recipeToDisplay = this.recipeService.getRecipeById(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.params);
    this.route.params.subscribe((params:Params)=>{
      this.recipeToDisplay = this.recipeService.getRecipeById(params['id']);
    })
  }

  ngOnDestroy(): void {
    // this.recipeSelectedSubscribeId.unsubscribe();
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeToDisplay.ingredients)
  }
}
