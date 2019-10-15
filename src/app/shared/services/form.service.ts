import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IForm} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private url:string;
  private url2: string;
  public form: Array<IForm>;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/form';
    this.url2 = 'http://3.120.138.169/testSend.php?parametr1=new_message&parametr2=http://localhost:4200/admin';
  }
  public getForm(): Observable<Array<IForm>> {
    return this.http.get<Array<IForm>>(this.url);
  }
  public addForm(form: IForm): Observable<Array<IForm>>{
    return this.http.post<Array<IForm>>(this.url, form)
  }
  public sendNotification(){
    return this.http.get(this.url2);
  }

  public delForm(id: number): Observable<Array<IForm>>{
    return this.http.delete<Array<IForm>>(`${this.url}/${id}`)
  }
}
