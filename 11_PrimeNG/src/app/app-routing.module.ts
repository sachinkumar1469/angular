import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:"",redirectTo:"/recipe",pathMatch:"full"},
  {path:"recipe",component:RecipeComponent,canActivateChild:[],children:[
    {path:"new",component:RecipeEditComponent},
    {path:":id",component:RecipeDetailComponent, pathMatch:"full"},
    {path:":id/edit",component:RecipeEditComponent}
  ]},
  {path:"shopping",component:ShoppingComponent},
  {path:"auth",component:AuthComponent},
  // {path:"**",redirectTo:"/404",data:{message:"Route Not Found"}},
  // {path:"404",component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
