import { Component, OnInit } from '@angular/core';

import {Recipe} from './recipe.model';

import {RecipeService} from '../shared/recipe.service'

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers :  [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor( private recipeService : RecipeService ) { }

  ngOnInit() {
  }

  // recipeDetailEle:Recipe;

  // recipeItemClicked(data:Recipe){
  //   this.recipeDetailEle = data;
  // }

}
