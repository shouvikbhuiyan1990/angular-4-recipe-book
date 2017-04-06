import {EventEmitter} from '@angular/core';

import {Recipe} from '../recipes/recipe.model';

import {Ingrediant} from './ingrediant.model';

export class RecipeService{
    selectedRecipe =  new EventEmitter<Recipe>();

    private recipeData:Recipe[] = [
        new Recipe('Chicken Tikka','A delicious indian cuisine','https://i.ytimg.com/vi/NeQxq3UGhLc/maxresdefault.jpg'
                   , [new Ingrediant('chcicken',10),new Ingrediant('bal',1) ]),
        new Recipe('Chicken Shahi Kabab','A delicious indian Chicken Murder','https://epblog.s3.amazonaws.com/blog/wp-content/uploads/2015/08/Shami-Kebab.jpg', 
                    [new Ingrediant('torkari',12),new Ingrediant('bal',1) ])
        ];

    getRecipe(){
        return this.recipeData.slice(); //returns a copy of the array as array is reference type in JS and returning it 
                                        //directly would give away a chance to manipulate the original values
    }

}