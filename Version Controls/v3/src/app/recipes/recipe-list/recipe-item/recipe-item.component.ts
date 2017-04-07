import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {Recipe} from '../../recipe.model';

import {RecipeService} from '../../../shared/recipe.service'

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // providers: [RecipeService]
})
export class RecipeItemComponent implements OnInit {


  constructor( private recipeService : RecipeService,private route : Router, private currentRoute : ActivatedRoute ) { }

  ngOnInit() {
  }

  // @Input() recipeData:Recipe;


  recipeDatas:Recipe[] = this.recipeService.getRecipe();

  getCurrentRecipe(recipe,index){
    //this.recipeService.selectedRecipe.emit(recipe);
    this.route.navigate(['list',index], { relativeTo : this.currentRoute });
  }

}
