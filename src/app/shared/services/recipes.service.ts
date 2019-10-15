import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRecipe} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private url:string;
  public recipes: Array<IRecipe>;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/recipes';
  }
  public getJsonRecipes(): Observable<Array<IRecipe>> {
    return this.http.get<Array<IRecipe>>(this.url);
  }
  public addRecipes(recipe: IRecipe): Observable<Array<IRecipe>>{
    return this.http.post<Array<IRecipe>>(this.url, recipe)
  }

  public delRecipes(id: number): Observable<Array<IRecipe>>{
    return this.http.delete<Array<IRecipe>>(`${this.url}/${id}`)
  }
  public updateRecipes(recipe: IRecipe): Observable<Array<IRecipe>>{
    return this.http.put<Array<IRecipe>>(`${this.url}/${recipe.id}`, recipe)
  }
}
