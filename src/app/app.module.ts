import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdowndirDirective } from './shared/dropdowndir.directive';

import {ShoppingListService} from './shared/shopping-list.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoRecipeSelectedComponent } from './recipes/recipe-detail/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes :  Routes = [
  { 
    path : '' , 
    redirectTo : 'recipe',
    pathMatch : 'full' 
  },
  { 
    path : 'recipe' , 
    component : RecipesComponent,
    children : [
      {
        path : 'new',
        component : RecipeEditComponent
      },
      {
        path : 'list/:id/edit',
        component : RecipeEditComponent
      },
      {
        path : '',
        pathMatch : 'full',
        component : NoRecipeSelectedComponent
      },
      {
        path : 'list/:id',
        component : RecipeDetailComponent
      }
    ] 
  },
  { 
    path : 'shopping' , 
    component : ShoppingListComponent
  },
  { 
    path : 'not-found', 
    component : NotFoundComponent },
  { 
    path : '**', 
    redirectTo: 'not-found' 
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdowndirDirective,
    NotFoundComponent,
    NoRecipeSelectedComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
