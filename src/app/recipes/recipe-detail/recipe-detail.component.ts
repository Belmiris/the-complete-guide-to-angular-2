import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;

  constructor(private recipeService:RecipeService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    if (this.recipe && this.recipe.ingredients && this.recipe.ingredients.length > 0) {
      this.recipeService.addToShoppingList(this.recipe);
    }
  }
}
