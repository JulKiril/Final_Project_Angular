import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { IRecipe } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class RecipesDetailsService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/recipes';
  }
  public getRecipes(id: number): Observable<IRecipe> {
    return this.http.get<IRecipe>(`${this.url}/${id}`);
  }
}

