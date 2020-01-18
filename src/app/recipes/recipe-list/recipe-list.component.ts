import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }
  recipes:Recipe[] = [
    new Recipe('Biriyani','Exquisite Biriyani','https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mutton_Biryani.jpg/800px-Mutton_Biryani.jpg'),
    new Recipe('Burger','American Burger','https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg'),
    new Recipe('Dosa','Indian Masala Dosa','https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dosa_and_ghee.jpg/800px-Dosa_and_ghee.jpg')
  ]
  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    console.log('got the recipee',recipe);
    this.recipeWasSelected.emit(recipe)
  }

}
