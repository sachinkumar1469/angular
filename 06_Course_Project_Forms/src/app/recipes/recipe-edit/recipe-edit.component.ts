import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  constructor(private route:ActivatedRoute, private recipeSrv:RecipeService){};

  recipeId!:number;
  isEdit:boolean = false;

  recipeForm!:FormGroup;

  private initForm(){
    let recipeName = "";
    let imageURL = "";
    let description = "";
    let ingredients = new FormArray<FormGroup>([]);
    if(this.isEdit){
      let recipe = this.recipeSrv.getRecipeById(this.recipeId)
      recipeName = recipe['name'];
      imageURL = recipe['imagePath'];
      description = recipe['description'];
      let recipeIngredients:Ingredient[] = recipe['ingredients'];
      recipeIngredients.forEach(ing=>{
        ingredients.push(new FormGroup({
          name:new FormControl(ing.name,[Validators.required]),
          amount: new FormControl(ing.amount,[Validators.required])
        }))
      })
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,[Validators.required]),
      'imageURL': new FormControl(imageURL,[Validators.required]),
      'description': new FormControl(description,[Validators.required]),
      'ingredients': ingredients
    });
  }

  getIngredientsControlArray(){
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  addIngredientControl(){
    (this.recipeForm.get("ingredients") as FormArray).push(new FormGroup({
      name: new FormControl("",[Validators.required]),
      amount:new FormControl("",[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.recipeId = param['id'];
      this.isEdit = param['id'] != undefined;
      this.initForm();
    })
  }

  onSubmit(){
    // console.log(this.recipeForm);
    let recipe = new Recipe();
    let values = this.recipeForm.value;
    recipe.name = values.name;
    recipe.imagePath = values.imageURL;
    recipe.description = values.description;
    recipe.ingredients = values.ingredients;
    if(this.isEdit){
      recipe.id = this.recipeId;
      console.log(this.recipeId);
      this.recipeSrv.updateRecipe(this.recipeId,recipe);
    } else {
      this.recipeSrv.addRecipe(recipe);
    }
    this.recipeForm.reset();
  }


}
