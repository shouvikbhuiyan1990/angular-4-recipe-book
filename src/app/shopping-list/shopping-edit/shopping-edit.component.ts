import { Component, OnInit,ViewChild,Output,EventEmitter,ElementRef,OnDestroy } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import {Ingrediant} from '../../shared/ingrediant.model';
import {NgModel,NgForm} from '@angular/forms';

import {ShoppingListService} from '../../shared/shopping-list.service';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  currentIngrediantId :  Number;
  isEditableMode : Boolean = false;
  EditableContent : Ingrediant;
  EditIngrediantSubs :  Subscription;

  @ViewChild('ingrediantName') name:NgModel;
  @ViewChild('ingrediantAmount') amount:NgModel;
  @ViewChild('f') currentForm :  NgForm;

  // @Output() ingrediantAdded = new EventEmitter<Ingrediant>();
  constructor( private shoppingListService : ShoppingListService, private route :ActivatedRoute ) { }

  ngOnInit() {
    this.EditIngrediantSubs =  this.shoppingListService.EditIngrediant.subscribe(
      ( index : number )=>{
        this.isEditableMode = true;
        this.currentIngrediantId = index;
        this.EditableContent = this.shoppingListService.getEditableingrediant(index);
        this.currentForm.setValue({
          ingrediantName : this.EditableContent.name,
          ingrediantAmount :  this.EditableContent.amount
        })
      }
    );
  }

  ngOnDestroy(){
    this.EditIngrediantSubs.unsubscribe();
  }

  addUpdateIngrediant(){
      let currentItem : Ingrediant = new Ingrediant( this.name.value, this.amount.value );
      if( !this.isEditableMode ){
        this.shoppingListService.addIngrediants(new Ingrediant(this.name.value,this.amount.value));
      }else{
        this.shoppingListService.updateIngrediants( this.currentIngrediantId, currentItem );
      }
      this.clearForm();
      this.isEditableMode = false;
      // this.shoppingListService.addIngrediants(new Ingrediant(this.name.nativeElement.value,this.amount.nativeElement.value))
      //this.ingrediantAdded.emit(new Ingrediant(this.name.nativeElement.value,this.amount.nativeElement.value));
  }

  deleteItem(){
    this.shoppingListService.deleteIngrediant(this.currentIngrediantId);
    this.isEditableMode = false;
    this.clearForm();
  }

  clearForm(){
    this.currentForm.reset();
  }

}
