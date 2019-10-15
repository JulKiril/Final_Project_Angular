import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRCategory } from '../interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RCategoryService {
  private url: string;
  constructor(private http: HttpClient) {this.url = 'http://localhost:3000/r-category'; }
  public getCategories(): Observable<Array<IRCategory>> {
    return this.http.get<Array<IRCategory>>(this.url);
  }
}
