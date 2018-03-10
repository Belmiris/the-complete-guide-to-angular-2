import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[] = [
    new Recipe('Tasty Schnitzel', 
               'A super-tasty Schnitzel - just awesome!', 
               'https://www.myjewishlearning.com/wp-content/uploads/2007/01/schnitzel.jpg',
               [
                 new Ingredient('Meat', 1),
                 new Ingredient('French Fries', 20)
               ]),
    new Recipe('Big Fat Burger', 
               'What else you need to say?', 
               'https://media.timeout.com/images/101449235/image.jpg',
               [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
              ])
  ];

  constructor(private shoppingListService:ShoppingListService) { 
    
  }

  getRecipe(id:number): Recipe {
    return this.recipes.slice()[+id];
  }

  // return a COPY of our recipe array
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addToShoppingList(recipe:Recipe) {
    if (recipe && recipe.ingredients && recipe.ingredients.length > 0) {
      this.shoppingListService.addIngredients(recipe.ingredients);
    }
  }
}
