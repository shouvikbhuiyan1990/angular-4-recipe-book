import { Component, OnInit,Input } from '@angular/core';

import {Ingrediant} from '../../shared/ingrediant.model';
import {Recipe} from '../recipe.model';

import {RecipeService} from '../../shared/recipe.service';

import {ShoppingListService} from '../../shared/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  // providers : [RecipeService]
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails: Recipe;

  constructor( private recipeService :  RecipeService,  private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (data:Recipe) => {
        this.recipeDetails = data
      }
    );
  }

  exportToShoppingList( ingrediants :Ingrediant[] ){
    this.shoppingListService.addBulkIngrediants(ingrediants);
  }

  // @Input() recipeDetails:Recipe;
  //recipeDetails: Recipe = this.recipeService.getSelectedRecipe();

  
  
}
