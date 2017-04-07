import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id;
  isEditable = false;

  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data :  Params)=>{
        this.id = data['id'];
        this.isEditable = this.id != null;
        console.log(this.isEditable)
      }
    )
  }

}
