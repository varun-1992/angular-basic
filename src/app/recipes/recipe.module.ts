import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations : [RecipeStartComponent, RecipeEditComponent],
  exports : [],
  imports : [FormsModule,ReactiveFormsModule,CommonModule],
  providers : [],
  bootstrap : []
})
export class recipeModule{

}
