import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes:Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('Another Test Recipe', 'This is another test recipe', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    // return a COPY of our recipe array
    return this.recipes.slice();
  }
}
