import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IRecipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPage implements OnInit {
  recipes: IRecipe[] = [];
  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
