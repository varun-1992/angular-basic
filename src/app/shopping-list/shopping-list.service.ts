import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private  ingredients:Ingredient[] = [
    new Ingredient('Apples',20),
    new Ingredient('Banana',50),
    new Ingredient('Lemon',40),
    new Ingredient('Figs',60),
    new Ingredient('Rice',30)
  ]

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index:number){
return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

}
