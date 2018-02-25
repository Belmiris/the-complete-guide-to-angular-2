import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(items: Ingredient[]) {
    if (items && items.length > 0) {
      // for (var item of items) {
      //   this.ingredients.push(item);
      // }
      // Use ES6 spread operator
      this.ingredients.push(...items);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
  }
}
