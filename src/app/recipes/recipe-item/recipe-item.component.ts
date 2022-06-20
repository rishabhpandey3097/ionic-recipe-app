import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IRecipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeItemComponent implements OnInit, OnChanges {
  @Input() recipeItem: IRecipe;
  constructor(private cdref: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if ('recipeItem' in changes) {
      this.cdref.detectChanges();
    }
  }

  ngOnInit() {}
}
