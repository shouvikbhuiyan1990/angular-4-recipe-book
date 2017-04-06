import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes : Recipe[] = [new Recipe('Chicken Tikka','A delicious indian cuisine','http://placehold.it/350x150')];

  constructor() { }

  ngOnInit() {
  }

  // @Output() recipeItemClicked = new EventEmitter<Recipe>();

  // recipeItemClick(data){
  //   this.recipeItemClicked.emit(data);
  // }

}
