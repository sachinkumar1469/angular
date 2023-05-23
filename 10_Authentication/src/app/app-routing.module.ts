import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth-guard.guard';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:"",redirectTo:"/recipe",pathMatch:"full"},
  {path:"recipe",component:RecipesComponent,canActivateChild:[AuthGuard],children:[
    {path:"new",component:RecipeEditComponent},
    {path:":id",component:RecipeDetailComponent, pathMatch:"full"},
    {path:":id/edit",component:RecipeEditComponent}
  ]},
  {path:"shopping",component:ShoppingListsComponent},
  {path:"auth",component:AuthComponent},
  {path:"**",redirectTo:"/404",data:{message:"Route Not Found"}},
  {path:"404",component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
