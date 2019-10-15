import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IRecipe } from 'src/app/shared/interfaces';
import { ActivatedRoute } from '@angular/router';
import { RecipesDetailsService } from 'src/app/shared/services/recipes-details.service';
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  view: IRecipe;
  ingrid: Array<string>;
  description: Array<string>;
  recipeId: number;
  constructor( private recipeDetailsService: RecipesDetailsService, private route: ActivatedRoute,
               private location: Location) {
    this.getRecipe();
  }

  ngOnInit() {
  }
  public getRecipe(): void {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeDetailsService.getRecipes(this.recipeId).subscribe(
      data => {
        this.view = data;
        this.ingrid = this.view.ingrid.split(',');
        this.description = this.view.description.split(',');
      }
    );
  }

  goBack(): void{
    this.location.back();
    window.scroll(0,0);
  }

}
