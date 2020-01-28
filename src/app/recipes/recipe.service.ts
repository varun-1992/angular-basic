import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{

  constructor(private shoppingListService:ShoppingListService){}

  private recipes:Recipe[] = [];

  //commented as we are getting data from firebase's DB
  // [
//   new Recipe('Biriyani','Just Awesome','https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mutton_Biryani.jpg/800px-Mutton_Biryani.jpg',[new Ingredient('Rice',2),new Ingredient('Chicken',4)]),
  //   new Recipe('Burger','A supet tasty American Burger','https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg',[new Ingredient('Steak',2),new Ingredient('Onions',3)]),
  //   new Recipe('Dosa','What else do you need ?','https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dosa_and_ghee.jpg/800px-Dosa_and_ghee.jpg',[new Ingredient('Potato',3),new Ingredient('Flour',2)])
  // ]


  recipesChanged = new Subject<Recipe[]>()

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id:number){
    return this.recipes[id]
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.recipesChanged.next(this.recipes.slice())

  }

  addIngredientsToShoppingList(ingredient:Ingredient[]){
    this.shoppingListService.addIngredients(ingredient)
  }

}
