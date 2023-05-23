import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from 'src/app/shopping/shopping.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers:[MessageService]
})
export class RecipeDetailComponent implements OnInit{
  constructor(
    private messageService:MessageService,
    private route:ActivatedRoute,
    private recipeSrv:RecipeService,
    private shoppingSrv:ShoppingService,
    private router:Router){}

  selectedRecipe!:Recipe;

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.selectedRecipe = this.recipeSrv.getRecipeById(param["id"]);
    })
  }

  showSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ingredeints Added' });
    this.shoppingSrv.addIngredients(this.selectedRecipe.ingredients);
  }
  showInfo(){
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    this.router.navigate(["/","recipe",this.selectedRecipe.id,"edit"]);
  }
}
