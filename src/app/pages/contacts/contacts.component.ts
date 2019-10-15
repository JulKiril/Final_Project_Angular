import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {IForm} from '../../shared/interfaces';
import { NewForm } from '../../shared/classes/new-form.class';
import { FormService } from '../../shared/services/form.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  windowScrolled: boolean;
  routeBtn: boolean;
  closeBtn: boolean;
  titleMessage: string;
  infoMessage: string;
  toShow: boolean = false;
  lat: number = 49.8312354;
  lng: number = 24.03316945;
  zoom: number = 8;
  formId: number;
  formName: string;
  formEmail: string;
  formPhoneNumber: string;
  formMessage: string;
  formDate: any;
  form: Array<IForm>;
    constructor(private formService: FormService,
                @Inject(DOCUMENT) private document: Document) {
    this.getForm();
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
  }
  private getForm(): void {
    this.formService.getForm().subscribe(
      data => {
        this.form = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  public isAddForm(): void {
    if (this.formName !== undefined && this.formEmail !== undefined && this.formPhoneNumber !== undefined && this.formMessage !== undefined)
    {
      this.getForm();
      const newForm = new NewForm(this.formId, this.formName, this.formEmail,  this.formPhoneNumber, this.formMessage, this.formDate);
      if (this.form.length === 0) {
        newForm.id = 1;
      } else {newForm.id = this.form.slice(-1)[0].id + 1; }
      newForm.time = new Date();
      this.formService.addForm(newForm).subscribe(() => {
      this.getForm();
    });
      this.formService.sendNotification().subscribe(() => {
        console.log('notif. sent');
      });
      this.formName = '';
      this.formEmail = '';
      this.formPhoneNumber = '';
      this.formMessage = '';
      this.toShow = true;
      this.infoMessage = 'Ваше звернення відправлене.Наш адміністратор зв`яжеться з Вами найближчим часом!';
      this.titleMessage = 'Дякуємо за звернення';
      this.closeBtn = true;
      this.routeBtn = false;
    } else {this.infoMessage = 'Поля заповнені невірно або не всі поля заповнені';
      this.titleMessage = 'Щось пішло не так';
      this.closeBtn = false;
      this.routeBtn = true;
    }
  }
  public focusFunction(): void {
      this.formPhoneNumber = '+38';
      if (this.formPhoneNumber.length === 3) { this.formPhoneNumber += '('; }

  }
  public inputFunction(): void {
    if (this.formPhoneNumber.length === 7) {
      this.formPhoneNumber += ')-';
    }
    if (this.formPhoneNumber.length === 12) {
      this.formPhoneNumber += '-';
    }
    if (this.formPhoneNumber.length === 15) {
      this.formPhoneNumber += '-';
    }
  }
  public isShow(): void {
    this.toShow = false;
  }
}
