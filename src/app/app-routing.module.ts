import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { InitialRecipeComponent } from "./recipes/initial-recipe/initial-recipe.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: InitialRecipeComponent, pathMatch: 'full' },
        { path: ':id', component: RecipeDetailComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent }
    // { path: '**', redirectTo: '/recipes' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
