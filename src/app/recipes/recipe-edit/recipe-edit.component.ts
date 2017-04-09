import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormsModule,FormGroup,FormControl,Validators,FormArray } from '@angular/forms';

import { Recipe } from '../recipe.model';

import {ActivatedRoute,Params,Router} from '@angular/router';
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

  constructor( private route : ActivatedRoute, private recipeService : RecipeService,private router : Router  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data :  Params)=>{
        this.id = data['id'];
        this.isEditable = this.id != null;
      }
    );
    this.currentRecipe = this.recipeService.getRecipeById(this.id);
    let recipeingrediant = new FormArray([]);

    if( this.currentRecipe.ingrediants.length>0 ){
      for( let ingrediant of this.currentRecipe.ingrediants ){
        recipeingrediant.push(
          new FormGroup({
            'name' : new FormControl(ingrediant.name),
            'amount' : new FormControl(ingrediant.amount)
          }
          )
        )
      }
    }

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
      imagepath : new FormControl(null),
      ingrediants : recipeingrediant
    });
    
    if( this.isEditable ){
      this.EditRecipeForm.patchValue({
          name : this.currentRecipe.name,
          description :  this.currentRecipe.description,
          imagepath : this.currentRecipe.imagePath
      })
    }
  }

  AddModifyRecipe(){
    const newRecipe : Recipe = new Recipe( this.EditRecipeForm.get('name').value, 
                                           this.EditRecipeForm.get('description').value, 
                                           this.EditRecipeForm.get('imagepath').value,
                                           this.EditRecipeForm.get('ingrediants').value );
    //debugger
    if( !this.isEditable ){
      this.recipeService.addNewRecipe(newRecipe);
    }else{
      this.recipeService.updateRecipe(this.id, newRecipe);
      this.router.navigate(['../'],{ relativeTo : this.route })
    }
  }

  addMoreIngrediants(){
    (<FormArray>this.EditRecipeForm.get('ingrediants')).
    push(new FormGroup({ 'name' : new FormControl(null), 'amount' : new FormControl(null) }));
  }

  deleteIngrediant(index){
   (this.EditRecipeForm.get('ingrediants')['controls']).splice(index,1);
   (this.EditRecipeForm.get('ingrediants')['value']).splice(index,1);
  }

  ngOnDestroy(){
   // this.EditRecipeFormSbs.unsubscribe();
  }

}
