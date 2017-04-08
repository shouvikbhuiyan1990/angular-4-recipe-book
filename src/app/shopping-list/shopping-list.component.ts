import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import {Ingrediant} from '../shared/ingrediant.model';

import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  IngrediantAddedSubs :  Subscription;
  constructor( private shoppingListServiceRef :  ShoppingListService, private router : Router,private currentRoute : ActivatedRoute ) { }

  ingrediants : Ingrediant[];


  ngOnInit() {
    this.ingrediants = this.shoppingListServiceRef.getIngrediants();

    this.IngrediantAddedSubs = this.shoppingListServiceRef.IngrediantAdded.subscribe(
      (dataIngrediant: Ingrediant[]) =>{
        this.ingrediants =  dataIngrediant;
      }
    )

  }

  ngOnDestroy(){
    this.IngrediantAddedSubs.unsubscribe();
  }


  selectIngrediant(index:Number){ 
    this.shoppingListServiceRef.EditIngrediant.next(index);

  }
  // ingrediantAdded(newIngrediant : Ingrediant){
  //   this.ingrediants.push(newIngrediant);
  // }

}
