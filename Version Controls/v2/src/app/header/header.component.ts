import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() headerClicked = new EventEmitter<string>();

  ngOnInit() {
  }

  navigateToRecipe(){
    this.headerClicked.emit('recipe');
  }
  navigateToShoppingList(){
    this.headerClicked.emit('shopping');
  }
}
