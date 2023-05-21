import { Component,OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes:Recipe[] = []

  currentSelectedRecipe : Recipe = new Recipe();

  onChangeSelectedRecipe(e:Recipe){
    this.currentSelectedRecipe = e;
  }

  constructor(private recipeService:RecipeService, private dataStorage:DataStorageService){}
  ngOnInit(): void {
    this.dataStorage.getRecipes();
    this.recipeService.recipesListChanged.subscribe(recipesList=>{
      this.recipes = recipesList;
    })
  }
}
