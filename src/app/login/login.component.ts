import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../shared/services/myservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  userName: string;
  pass: string;
  constructor(private service : MyserviceService , private routes: Router) { }

  ngOnInit() {
  }
  public check(userName, pass){
    const output = this.service.checkUNamePass(userName, pass);
    if(output === true)
      {
        this.routes.navigate(['/admin']);
      } else {
        this.message = 'Invalid username or password';
      }
  }

  // check(uname: string, p: string) {
  //   console.log(uname);
  //   const output = this.service.checkUnamePass(uname, p);
  //   if(output === true)
  //   {
  //     this.routes.navigate(['/admin']);
  //   } else {
  //     this.message = 'Invalid username or password';
  //   }
  // }

}
