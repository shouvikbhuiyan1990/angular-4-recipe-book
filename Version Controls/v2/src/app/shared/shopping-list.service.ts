import {EventEmitter} from '@angular/core';

import {Ingrediant} from './ingrediant.model';

export class ShoppingListService{
   
   IngrediantAdded = new EventEmitter<Ingrediant[]>();


    private ingrediants : Ingrediant[] = [
        new Ingrediant('chicken',10), new Ingrediant('onion',100)
    ]

    getIngrediants(){
        return this.ingrediants.slice();
    }
    addIngrediants(newingrediant : Ingrediant){
        this.ingrediants.push(newingrediant);
        this.IngrediantAdded.emit(this.ingrediants); //needed coz getIngrediants() retunrs a copy of the original, 
                                                    //hence view won't be updated as the copy is the old one always
                                                    // subscribe() in shopping-list.component.ts
                                                    
    }
    addBulkIngrediants( ingrediants : Ingrediant[] ){
        ingrediants.map( (data : Ingrediant)=> {
            this.ingrediants.push(data);
        } );

        this.IngrediantAdded.emit(this.ingrediants);
    }
}