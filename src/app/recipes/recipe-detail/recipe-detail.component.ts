import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';

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
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onEditRecipe() {
    // this.router.navigate(['/recipes', this.id, 'edit']);          // BEST IMO
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route }); // YUCK!
    this.router.navigate(['edit'], { relativeTo: this.route });     // MAX'S WAY
  }

  onAddToShoppingList() {
    if (this.recipe && this.recipe.ingredients && this.recipe.ingredients.length > 0) {
      this.recipeService.addToShoppingList(this.recipe);
    }
  }
}
