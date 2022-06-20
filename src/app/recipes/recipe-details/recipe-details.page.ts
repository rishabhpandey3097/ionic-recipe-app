import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IRecipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadedRecipe: IRecipe;
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCntrl: AlertController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (!params.has('recipeId')) {
        //redirect
        return;
      }

      const recipeId: string = params.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  deleteRecipe() {
    this.alertCntrl
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe?.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertController) => alertController.present());
  }
}
