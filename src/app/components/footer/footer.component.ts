import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // inputWeight: number;
  // inputHeight: number;
  // inputAge: number;
  // inputWrist: number;
  // coef: number;
  // result: number;
  constructor() { }

  ngOnInit() {
    AOS.init();
  }
  // public calcWeight(){
  //   if (this.inputWrist < 15) {this.coef = 0.9; }
  //   if (this.inputWrist >= 15 && this.inputWrist <= 17) {this.coef = 1}
  //   if (this.inputWrist > 17) {this.coef = 1.1; }
  //   console.log(this.coef);
  //   console.log(this.inputAge);
  //   console.log(this.inputHeight);
  //   this.result = Math.floor((this.inputHeight - 100 + (this.inputAge / 10)) * 0.9 * this.coef)
  //   console.log(this.result);
  // }
}
