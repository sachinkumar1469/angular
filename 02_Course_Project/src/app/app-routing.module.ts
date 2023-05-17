import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';

const routes: Routes = [
  // {path:"",component:RecipesComponent},
  // {path:"shopping",component:ShoppingListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
