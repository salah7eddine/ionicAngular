import { Injectable } from '@angular/core';
import { Recipe } from './../../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2015_0723_Wiener_Schnitzel_vom_Schwein_Gaislachalm_S%C3%B6lden.jpg/787px-2015_0723_Wiener_Schnitzel_vom_Schwein_Gaislachalm_S%C3%B6lden.jpg',
      ingredients: ['French Fries', 'Pork Meart', 'Salad']
    },
    {
      id: 'r2',
      title: 'spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Spaghetti_al_Pomodoro.JPG/1920px-Spaghetti_al_Pomodoro.JPG',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeID: string) {
    return { ...this.recipes.find(recipe => recipe.id === recipeID) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
