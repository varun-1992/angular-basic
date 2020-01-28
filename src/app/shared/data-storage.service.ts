import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,tap} from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({providedIn:"root"})
export class DataStorageService{

  constructor(private http:HttpClient,private recipeService:RecipeService){}

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://angularfreedb.firebaseio.com/recipes.json',recipes).subscribe((response)=>{
      console.log(response);
    });
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>('https://angularfreedb.firebaseio.com/recipes.json')
    .pipe(map(recipes=>{
      //we are applying map here as what if a recipe is created without ingredient, that way when we
      //fetch it from firebase, it won't have a ingredient property, due to which our code might fail,
      //to avoid it we will check if every response has ingredient or not, if not we will add it explicitly
      //to empty array. The outer map is from rxjs/operators whereas inner map is JS array method
      //Tap is used to avoid reloading issue, when you expand or edit recipe and reload the page, it was
      //throwing error, this was solved with help of tap and a Resolver
      return recipes.map(recipe=> {
        return {...recipe,ingredients : recipe.ingredients ? recipe.ingredients : []}
      })
    }),tap(recipes=>{
      this.recipeService.setRecipes(recipes);
    })
    )
  }
}
