import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {Recipe} from '../../recipe.model';

import {RecipeService} from '../../../shared/recipe.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // providers: [RecipeService]
})
export class RecipeItemComponent implements OnInit,OnDestroy {

  recipeDatas:Recipe[] =  this.recipeService.getRecipe();

  recipeSubscription : Subscription;

  constructor( private recipeService : RecipeService,private route : Router, private currentRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipeDatahasChanged.subscribe(
      (data)=>{
        this.recipeDatas = data;
      }
    )
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }
  // @Input() recipeData:Recipe;


  

  getCurrentRecipe(recipe,index){
    //this.recipeService.selectedRecipe.emit(recipe);
    this.route.navigate(['list',index], { relativeTo : this.currentRoute });
  }

}
