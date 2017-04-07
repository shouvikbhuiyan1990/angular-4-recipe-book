import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

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

  constructor( private recipeService :  RecipeService,  
               private shoppingListService : ShoppingListService, 
               private crouter : ActivatedRoute,
               private route :  Router ) { }

  ngOnInit() {
    // this.recipeService.selectedRecipe.subscribe(
    //   (data:Recipe) => {
    //     this.recipeDetails = data
    //   }
    // );

    this.crouter.params.subscribe(
      (data : Params)=>{
        this.recipeDetails = this.recipeService.getRecipeById(data['id']);
      }
    )
  }

  NavigatetoEdit(){
    this.route.navigate(['edit'], {relativeTo : this.crouter});
  }

  exportToShoppingList( ingrediants :Ingrediant[] ){
    this.shoppingListService.addBulkIngrediants(ingrediants);
  }

  // @Input() recipeDetails:Recipe;
  //recipeDetails: Recipe = this.recipeService.getSelectedRecipe();

  
  
}
