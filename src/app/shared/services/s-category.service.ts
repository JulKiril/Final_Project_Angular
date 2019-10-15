import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISCategory } from '../interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SCategoryService {
  private url: string;
  constructor(private http: HttpClient) {this.url = 'http://localhost:3000/s-category'; }
  public getCategories(): Observable<Array<ISCategory>> {
    return this.http.get<Array<ISCategory>>(this.url);
  }
}
