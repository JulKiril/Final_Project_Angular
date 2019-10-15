import {Component, OnInit, Inject, HostListener} from '@angular/core';
import * as AOS from 'aos';
import {NgForm} from '@angular/forms';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  windowScrolled: boolean;
  servBtnVisibil: boolean = true;
  resultMessage: string;
  editForm: NgForm;
  visibility: boolean = true;
  message: string;
  unit: string;
  inputWeight: number;
  inputHeight: number;
  inputAge: number;
  inputWrist: number;
  coef: number;
  result: number;
  constructor(@Inject(DOCUMENT) private document: Document) {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  ngOnInit() {
    AOS.init();
  }
  public calcWeight() {
    console.log(this.editForm);
    if (this.inputAge !== undefined && this.inputHeight !== undefined && this.inputWeight !== undefined && this.inputWrist !== undefined) {
    if (this.inputWrist < 15) {this.coef = 0.9; }
    if (this.inputWrist >= 15 && this.inputWrist <= 17) {this.coef = 1}
    if (this.inputWrist > 17) {this.coef = 1.1; }
    this.result = Math.floor((this.inputHeight - 100 + (this.inputAge / 10)) * 0.9 * this.coef);
    this.message = 'Ваші ідеальна вага ';
    this.unit = 'кг';
    this.visibility = true;
    this.servBtnVisibil = false;
    if (this.inputWeight > (this.result + 1) ) {
      this.resultMessage = 'Ви маєте надлишкову вагу. Щоб позбутися проблем з надлишковою вагою та визначити ' +
        'її причини, запишіться до нас на консультацію'; }
    if (this.inputWeight < (this.result - 1) ) {
        this.resultMessage = 'Ймовірно Ви маєте проблеми з дефіцитом ваги, ' +
          'у нас Ви зможете провести кваліфіковану діагностику'; }
    if (this.inputWeight === this.result || this.inputWeight === (this.result + 1) || this.inputWeight === (this.result - 1)) {
      this.resultMessage = 'Вітаємо, Ви не маєте проблем з вагою. Ви можете урізноманітнити свій раціон, відвідавши наші тренінги';
    }

  } else {this.message = 'Будь ласка для отримання результату заповніть всі поля';
    this.visibility = false;
    this.resultMessage = 'Будь ласка, перегляньте чи всі поля заповнені вірно'
  }
  }
  public clearForm(){
    this.inputAge = null;
    this.inputHeight = null;
    this.inputWeight = null;
    this.inputWrist  = null;
  }

}

