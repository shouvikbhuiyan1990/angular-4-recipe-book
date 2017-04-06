import { Component, OnInit,Input } from '@angular/core';

import {Recipe} from '../../recipe.model';

import {RecipeService} from '../../../shared/recipe.service'

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // providers: [RecipeService]
})
export class RecipeItemComponent implements OnInit {


  constructor( private recipeService : RecipeService ) { }

  ngOnInit() {
  }

  // @Input() recipeData:Recipe;


  recipeDatas:Recipe[] = this.recipeService.getRecipe();

  getCurrentRecipe(recipe){
    this.recipeService.selectedRecipe.emit(recipe);
  }

}
