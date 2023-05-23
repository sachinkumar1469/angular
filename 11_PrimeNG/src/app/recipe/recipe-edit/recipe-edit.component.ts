import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  isEdit = false;
  recipe!:Recipe;
  recipeForm!:FormGroup;

  constructor(private router:Router,private route:ActivatedRoute,private recipeSrv:RecipeService){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params["id"];
      let name = "";
      let description = "";
      let imagePath = "";
      let ingredients:Ingredient[] = [];
      if(id){
        this.isEdit = true;
        let recipeDetail = this.recipeSrv.getRecipeById(id);
        this.recipe = recipeDetail;
        name = recipeDetail.name;
        description = recipeDetail.description;
        imagePath = recipeDetail.imagePath;
        ingredients = recipeDetail.ingredients;
        id = recipeDetail.id;
      }else {
        this.isEdit = false;
        id = 0;
      }
      this.initializeFormGroup(name,imagePath,description,ingredients,id);
    })
  }

  initializeFormGroup(name:string,imagePath:string,description:string,ingredients:Ingredient[],id:string|number){
    this.recipeForm = new FormGroup({
      name:new FormControl(name,[Validators.required]),
      imagePath:new FormControl(imagePath,[Validators.required]),
      description:new FormControl(description,[Validators.required]),
      ingredients: new FormArray([...ingredients.map(ing=>new FormGroup({
        name: new FormControl(ing.name),
        amount: new FormControl(ing.amount)
      }))]),
      id: new FormControl(id)
    });
  };

  getIngredientArrayControls(){
    return (this.recipeForm.get("ingredients") as FormArray).controls;
  }
  onAddIngredient(){
    (this.recipeForm.get("ingredients") as FormArray).push(new FormGroup({
      name:new FormControl("",[Validators.required]),
      amount:new FormControl("",[Validators.required])
    }))
  }

  onEdit(){
    const {name,description,imagePath,ingredients,id} = this.recipeForm.value;
    const newRecipe = new Recipe(id,name,description,imagePath,ingredients);
    if(this.isEdit){
      this.recipeSrv.updateRecipe(newRecipe);
    } else {
      // let newRecipe = new Recipe()
      this.recipeSrv.addNewRecipe(newRecipe);
    }
    // console.log(name,description,imagePath,ingredients,id);
    this.router.navigate(["/","recipe"]);
  }

}
