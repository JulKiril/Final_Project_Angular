import { Injectable } from '@angular/core';
import {IMail} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private url: string;
  private url2: string;
  public mail: Array<IMail>;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/mail';
    this.url2 = 'http://3.120.138.169/testSend.php?parametr1=new_order&parametr2=http://localhost:4200/admin';
}
  public getMail(): Observable<Array<IMail>> {
    return this.http.get<Array<IMail>>(this.url);
  }
  public sendMail(mail: IMail): Observable<Array<IMail>>{
    return this.http.post<Array<IMail>>(this.url, mail);
  }
  public sendNotification(){
    return this.http.get(this.url2);
  }

  public delMail(id: number): Observable<Array<IMail>>{
    return this.http.delete<Array<IMail>>(`${this.url}/${id}`)
  }
}
