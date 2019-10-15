import {Component, HostListener, Inject, OnInit} from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import {animate, style, transition, trigger} from '@angular/animations';
import * as AOS from 'aos';
import {IRCategory, IRecipe, ISCategory} from '../../shared/interfaces';
import {RCategoryService} from '../../shared/services/r-category.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000)
      ])
    ])
  ]
})
export class RecipesComponent implements OnInit {
  windowScrolled: boolean;
  recipes: Array<IRecipe>;
  searchText: string = '';
  categories: Array<IRCategory>;
  public activeItem: string;
  categoryName: string;
  config: any;
  p:number = 1;
  constructor(private recipesService: RecipesService, private rCategoryService: RCategoryService,
              @Inject(DOCUMENT) private document: Document) {
    this.getRecipes();
    this.getCategory();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
  ngOnInit() {
    AOS.init();
  }
  pageChanged(event){
    this.p = event;
    window.scroll(0,0);
  }
  public onSelectItem(item: string): void {
    this.activeItem = item;
  }
  private getCategory(): void{
    this.rCategoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  private getRecipes(): void{
    this.recipesService.getJsonRecipes().subscribe(
      data => {
        this.recipes = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  filterName(category: IRCategory): void {
    this.categoryName = category.name;
  }

}
