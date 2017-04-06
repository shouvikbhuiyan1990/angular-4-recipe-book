import { Component, OnInit,ViewChild,Output,EventEmitter,ElementRef } from '@angular/core';

import {Ingrediant} from '../../shared/ingrediant.model';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingrediantName') name:ElementRef;
  @ViewChild('ingrediantAmount') amount:ElementRef;

  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();
  constructor() { }

  ngOnInit() {
  }
  addIngrediant(){
      this.ingrediantAdded.emit(new Ingrediant(this.name.nativeElement.value,this.amount.nativeElement.value));
  }

}
