import { Component, OnInit,ViewChild,Output,EventEmitter,ElementRef } from '@angular/core';

import {Ingrediant} from '../../shared/ingrediant.model';
import {NgModel,NgForm} from '@angular/forms';

import {ShoppingListService} from '../../shared/shopping-list.service';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingrediantName') name:NgModel;
  @ViewChild('ingrediantAmount') amount:NgModel;
  @ViewChild('f') currentForm :  NgForm;

  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();
  constructor( private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }
  addIngrediant(){
      this.shoppingListService.addIngrediants(new Ingrediant(this.name.value,this.amount.value));
      this.currentForm.reset();
      // this.shoppingListService.addIngrediants(new Ingrediant(this.name.nativeElement.value,this.amount.nativeElement.value))
      //this.ingrediantAdded.emit(new Ingrediant(this.name.nativeElement.value,this.amount.nativeElement.value));
  }
  clearForm(){
    this.currentForm.reset();
  }

}
