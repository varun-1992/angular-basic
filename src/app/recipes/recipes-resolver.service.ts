import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{

  constructor(private dataStorageService:DataStorageService,private recipeService:RecipeService){}

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){


    //this is done as by adding resolver, whenever we were routing to the page it was fetching the recipes
    //from server and overwritting it with our edited content. to avoid it what we have done is checked
    //if we have recipes or not , if not only then we are fethcing it again from the server.
    const recipes = this.recipeService.getRecipes();
    if(recipes.length === 0){
      return this.dataStorageService.fetchRecipes()
    }else{
      return recipes
    }
  }
}

