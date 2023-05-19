import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ShoppingEditComponent } from './shopping-lists/shopping-edit/shopping-edit.component';
import { HighlightDirective } from './customDirectives/HighLightDirectives/highlight.directive';
import { UnlessDirective } from './customDirectives/unless.directive';
import { DropdownDirective } from './customDirectives/dropdown.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListsComponent,
    ShoppingEditComponent,
    HighlightDirective,
    UnlessDirective,
    DropdownDirective,
    PagenotfoundComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
