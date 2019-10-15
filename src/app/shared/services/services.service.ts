import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IRecipe, ISCategory, IService} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/services';
  }
  public getServices(): Observable<Array<IService>> {
    return this.http.get<Array<IService>>(this.url);
  }
  public addServices(service: IService): Observable<Array<IService>>{
    return this.http.post<Array<IService>>(this.url, service)
  }

  public delServices(id: number): Observable<Array<IService>>{
    return this.http.delete<Array<IService>>(`${this.url}/${id}`)
  }
  public updateServices(service: IService): Observable<Array<IService>>{
    return this.http.put<Array<IService>>(`${this.url}/${service.id}`, service)
  }
}
