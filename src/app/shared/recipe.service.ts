import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject'

import {Recipe} from '../recipes/recipe.model';

import {Ingrediant} from './ingrediant.model';

export class RecipeService{
    // selectedRecipe =  new EventEmitter<Recipe>();
    recipeDatahasChanged = new Subject<Recipe[]>();

   // getRecipeDetails =  new Subject<Recipe>();

    private recipeData:Recipe[] = [
        new Recipe('Chicken Tikka','A delicious indian cuisine','https://i.ytimg.com/vi/NeQxq3UGhLc/maxresdefault.jpg'
                   , [new Ingrediant('chcicken',10),new Ingrediant('bal',1) ]),
        new Recipe('Chicken Shahi Kabab','A delicious indian Chicken Murder','https://epblog.s3.amazonaws.com/blog/wp-content/uploads/2015/08/Shami-Kebab.jpg', 
                    [new Ingrediant('torkari',12),new Ingrediant('bal',1) ])
        ];

    getRecipe(){
        return this.recipeData; //returns a copy of the array as array is reference type in JS and returning it 
                                        //directly would give away a chance to manipulate the original values
    }

    addNewRecipe( recipenew : Recipe ){
        this.recipeData.push(recipenew);
        this.recipeDatahasChanged.next( this.recipeData );
    }

    updateRecipe( index, currentValue:Recipe ){
        this.recipeData[index] = currentValue;
        this.recipeDatahasChanged.next( this.recipeData );
        console.log(this.recipeData.slice())
    }

    getRecipeById(id){
        return this.recipeData[id];
    }

}