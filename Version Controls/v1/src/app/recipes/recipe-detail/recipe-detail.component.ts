import { Component, OnInit,Input } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() recipeDetails:Recipe;

}
