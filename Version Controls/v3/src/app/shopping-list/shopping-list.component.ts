import { Component, OnInit } from '@angular/core';

import {Ingrediant} from '../shared/ingrediant.model';

import {ShoppingListService} from '../shared/shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor( private shoppingListServiceRef :  ShoppingListService) { }

  ingrediants : Ingrediant[];


  ngOnInit() {
    this.ingrediants = this.shoppingListServiceRef.getIngrediants();

    this.shoppingListServiceRef.IngrediantAdded.subscribe(
      (dataIngrediant: Ingrediant[]) =>{
        this.ingrediants =  dataIngrediant;
      }
    )

  }



  // ingrediantAdded(newIngrediant : Ingrediant){
  //   this.ingrediants.push(newIngrediant);
  // }

}
