import { Component, OnInit } from '@angular/core';
import {IRCategory, IRecipe} from '../../shared/interfaces';
import {RecipesService} from '../../shared/services/recipes.service';
import {RCategoryService} from '../../shared/services/r-category.service';
import { NewRecipe } from '../../shared/classes/new-recipe.class';

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent implements OnInit {
  recipesAdmin: Array<IRecipe>;
  recipeTitle: string;
  recipeImg: string;
  recipeDescription: string;
  recipeIngrid: string;
  editCategoryName: string;
  editRecipeTitle: string;
  editRecipeIngrid: string;
  editRecipeDescription: string;
  editRecipeImg: string;
  editId: number;
  categoryName: string;
  categories: Array<IRCategory>;
  constructor(private recipeService: RecipesService, private rCategoryService: RCategoryService) {
    this.getRecipes();
    this.getCategories();
  }

  ngOnInit() {
  }

  private getCategories(): void {
    this.rCategoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  private getRecipes(): void {
    this.recipeService.getJsonRecipes().subscribe(
      data => {
        this.recipesAdmin = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  public isAddRecipe(): void {
    const newRecipe = new NewRecipe(0, this.recipeTitle, this.categoryName,  this.recipeIngrid, this.recipeDescription,
      this.recipeImg);
    newRecipe.id = this.recipesAdmin.slice(-1)[0].id + 1;
    this.recipeTitle = '';
    this.recipeIngrid = '';
    this.recipeDescription = '';
    this.recipeImg = '';
    this.recipeService.addRecipes(newRecipe).subscribe(() => {
      this.getRecipes();
    })
  }
  public isDelRecipe(recipe: IRecipe): void {
    const { id } = recipe;
    this.recipeService.delRecipes(id).subscribe(() => {
      this.getRecipes();
    })
  }

  public isEditRecipe(recipe: IRecipe): void {
    this.editRecipeTitle = recipe.title;
    this.editRecipeIngrid = recipe.ingrid;
    this.editRecipeDescription = recipe.description;
    this.editRecipeImg = recipe.img;
    this.editId = recipe.id;
    this.editCategoryName = recipe.name;
  }

  public isSaveChangesRecipes(): void{
    const newRecipe = new NewRecipe(
      this.editId,
      this.editRecipeTitle,
      this.editCategoryName,
      this.editRecipeIngrid,
      this.editRecipeDescription,
      this.editRecipeImg);
    this.recipeService.updateRecipes(newRecipe).subscribe(()=> {
      this.getRecipes();
    })
  }
}
