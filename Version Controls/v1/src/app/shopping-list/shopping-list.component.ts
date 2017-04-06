import { Component, OnInit } from '@angular/core';

import {Ingrediant} from '../shared/ingrediant.model';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants : Ingrediant[] = [new Ingrediant('chicken',10), new Ingrediant('onion',100) ];

  constructor() { }

  ngOnInit() {
  }

  ingrediantAdded(newIngrediant : Ingrediant){
    this.ingrediants.push(newIngrediant);
  }

}
