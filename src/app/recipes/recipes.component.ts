import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  //selectedRecipe:Recipe = new Recipe('Recipe Name X', 'Description', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg');
  selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

  // onRecipeSelected(selectedRecipe:Recipe) {
  //   this.selectedRecipe = selectedRecipe;
  // }
}
