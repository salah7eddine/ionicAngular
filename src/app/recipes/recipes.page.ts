import { Component, OnInit } from '@angular/core';
import { Recipe } from './../../model/recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.recipes);
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidiLeave');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
  }
}
