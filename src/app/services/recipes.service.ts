import { Injectable } from '@angular/core';
import { IRecipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: IRecipe[] = [
    {
      id: 'r1',
      name: 'Schnitzel',
      imageUrl:
        'https://veganonboard.com/wp-content/uploads/2020/09/vegan_schnitzel-8.jpeg',
      ingredients: ['Chicken', 'Lemon', 'Egg'],
    },
    {
      id: 'r2',
      name: 'Spaghetti',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://static01.nyt.com/images/2021/03/22/dining/spaghetti-with-fried-eggs/merlin_185308254_8b5d0884-dfc9-4544-ba2f-8c493c1888c3-articleLarge.jpg',
      ingredients: ['Spaghetti', 'Meat Balls'],
    },
  ];
  constructor() {}

  getAllRecipes(): IRecipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): IRecipe {
    return { ...this.recipes.find((recipe) => recipeId === recipe.id) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
