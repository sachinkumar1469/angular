import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input()
  recipes:Recipe[] = [];

  constructor(private router:Router){}

  newRecipe(){
    this.router.navigate(["/recipe","new"]);
  }
}

