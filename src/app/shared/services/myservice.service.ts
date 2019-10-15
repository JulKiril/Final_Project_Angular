import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
   public checkUNamePass(uName: string, pas: string)
  {
    if(uName === 'MY_USERNAME' && pas === 'my_password'){
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
