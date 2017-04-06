import { Component, OnInit } from '@angular/core';

import {Recipe} from './recipe.model';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipeDetailEle:Recipe;

  recipeItemClicked(data:Recipe){
    this.recipeDetailEle = data;
  }

}
