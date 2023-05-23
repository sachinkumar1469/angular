import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private router:Router,private recipeSrv:RecipeService){}
  public recipes:Recipe[] = [];

  ngOnInit(): void {
    this.recipes = this.recipeSrv.getRecipeList();
    this.recipeSrv.recipeListChanged.subscribe((data:Recipe[])=>{
      this.recipes = data;
      console.log("Recipe changed using subscribe");
    })
  }

  onItemSelect(event: any) {
    this.router.navigate(["/recipe",event.value.id])
  }

  onListItemClick(item: any) {
    console.log('Clicked item:', item);
  }
}
