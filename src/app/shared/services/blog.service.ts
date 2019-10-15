import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBlog} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url:string;
  public blog: Array<IBlog>;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/blog';
  }
  public getBlog(): Observable<Array<IBlog>> {
    return this.http.get<Array<IBlog>>(this.url);
  }
  public addBlog(blog: IBlog): Observable<Array<IBlog>>{
    return this.http.post<Array<IBlog>>(this.url, blog)
  }

  public delBlog(id: number): Observable<Array<IBlog>>{
    return this.http.delete<Array<IBlog>>(`${this.url}/${id}`)
  }
  public updateBlog(blog: IBlog): Observable<Array<IBlog>>{
    return this.http.put<Array<IBlog>>(`${this.url}/${blog.id}`, blog)
  }
}
