import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormsModule,FormGroup,FormControl,Validators } from '@angular/forms';

import { Recipe } from '../recipe.model';

import {ActivatedRoute,Params} from '@angular/router';
import { RecipeService } from '../../shared/recipe.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit,OnDestroy {

  id:number;
  isEditable:boolean = false;
  currentRecipe : Recipe;
  EditRecipeForm : FormGroup;
  EditRecipeFormSbs: Subscription;

  constructor( private route : ActivatedRoute, private recipeService : RecipeService  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data :  Params)=>{
        this.id = data['id'];
        this.isEditable = this.id != null;
      }
    );
    // this.EditRecipeForm = new FormGroup({
    //   name : new FormControl(null,[Validators.required ]),
    //   description :  new FormControl(null),
    //   imagepath : new FormControl(null)
    // });

    /***** Alternate Approach */
    // this.currentRecipe = this.recipeService.getRecipeById(this.id);
    // this.EditRecipeForm = new FormGroup({
    //   name : new FormControl(this.currentRecipe.name),
    //   description :  new FormControl(this.currentRecipe.description),
    //   imagepath : new FormControl(this.currentRecipe.imagePath)
    // });

    /******End of Alternate */

    // this.EditRecipeFormSbs = this.recipeService.getRecipeDetails.subscribe(
    //   (data:Recipe)=>{
    //     debugger
    //     this.EditRecipeForm.setValue({
    //       name : data.name,
    //       description :  data.description,
    //       imagepath : data.imagePath
    //     })
    //   }
    // )

    this.EditRecipeForm = new FormGroup({
      name : new FormControl(null),
      description :  new FormControl(null),
      imagepath : new FormControl(null)
    });
    
    this.currentRecipe = this.recipeService.getRecipeById(this.id);
    this.EditRecipeForm.setValue({
          name : this.currentRecipe.name,
          description :  this.currentRecipe.description,
          imagepath : this.currentRecipe.imagePath
    })
  }

  ngOnDestroy(){
   // this.EditRecipeFormSbs.unsubscribe();
  }

  createNewForm(){
    
    
  }

}
