import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes:Recipe[] = [];

  constructor(private router:Router){}
  
  ngOnInit(): void {

  }

}

