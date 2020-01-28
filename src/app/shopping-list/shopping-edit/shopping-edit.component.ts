import { Component, OnInit,EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static : false}) slform : NgForm;
  subscription:Subscription;
  editMode = false;
  editItemIndex:number;
  editedItem:Ingredient;

  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index:number)=>{
      this.editItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slform.setValue({name : this.editedItem.name,amount:this.editedItem.amount})
    });
  }

  onSubmit(form:NgForm){
    const value = form.value;
    const newIngredient =new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient)
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slform.reset();
    this.editMode = false;
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editItemIndex)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
