import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  constructor(private recipeService:RecipeService){}

  @Input()
  recipe:Recipe = new Recipe();

  onChangeSelectedRecipe(){
    this.recipeService.recipeSelectedEvent.next(this.recipe);
  }
}
