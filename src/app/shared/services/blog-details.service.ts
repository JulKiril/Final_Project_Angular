import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import {IBlog, IRecipe} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/blog';
  }
  public getBlog(id: number): Observable<IBlog> {
    return this.http.get<IBlog>(`${this.url}/${id}`);
  }
}
