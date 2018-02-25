import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('selected-recipe') recipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    if (this.recipe && this.recipe.ingredients && this.recipe.ingredients.length > 0) {
      this.recipeService.addToShoppingList(this.recipe);
    }
  }
}
