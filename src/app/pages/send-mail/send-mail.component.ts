import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../../shared/services/services.service';
import { IService} from '../../shared/interfaces';
import { IMail } from '../../shared/interfaces';
import { NewEmail} from '../../shared/classes';
import { MailService} from '../../shared/services/mail.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  routeBtn: boolean;
  closeBtn: boolean;
  titleMessage: string;
  infoMessage: string;
  toShow: boolean = false;
  services: Array<IService>;
  mail: Array<IMail>;
  id: number;
  inputName: string;
  inputEmail: string;
  inputPhoneNumber: string;
  inputService: string;
  inputDate: any;
  inputTime: any;
  time: any;
  constructor(private servicesService: ServicesService, private emailService: MailService) {
    this.getServices();
    this.getMail();
  }

  ngOnInit() {
  }

  private getServices(): void {
    this.servicesService.getServices().subscribe(
      data => {
        this.services = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  private getMail(): void {
    this.emailService.getMail().subscribe(
      data => {
        this.mail = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  public isSendMail(): void {
    if (this.inputName !== undefined &&  this.inputEmail !== undefined && this.inputPhoneNumber !== undefined &&
    this.inputService !== undefined && this.inputDate !== undefined && this.inputTime !== undefined){
    this.getMail();
    const newMail = new NewEmail(this.id, this.inputName, this.inputEmail, this.inputPhoneNumber, this.inputService,
      this.inputDate, this.inputTime, this.time);
    if (this.mail.length === 0) {
      newMail.id = 1;
    } else {newMail.id = this.mail.slice(-1)[0].id + 1; }
    newMail.time = new Date();
      this.inputName = '';
      this.inputEmail = '';
      this.inputPhoneNumber = '';
      this.inputService = '';
      this.inputDate = '';
      this.inputTime = '';
      this.toShow = true;
      this.infoMessage = 'Ваше звернення відправлене.Наш адміністратор зв`яжеться з Вами найближчим часом!';
      this.titleMessage = 'Дякуємо за звернення';
      this.closeBtn = true;
      this.routeBtn = false;
    this.emailService.sendMail(newMail).subscribe(() => {
      this.getMail();
    });
    this.emailService.sendNotification().subscribe(() => {
        console.log('notif. sent');
      });
    } else {this.infoMessage = 'Поля заповнені невірно або не всі поля заповнені.';
      this.titleMessage = 'Щось пішло не так';
      this.closeBtn = false;
      this.routeBtn = true;
    }
  }

  public focusFunction(): void {
    this.inputPhoneNumber = '+38';
    if (this.inputPhoneNumber.length === 3) { this.inputPhoneNumber += '('; }

  }
  public inputFunction(): void {
    if (this.inputPhoneNumber.length === 7) {
      this.inputPhoneNumber += ')-';
    }
    if (this.inputPhoneNumber.length === 12) {
      this.inputPhoneNumber += '-';
    }
    if (this.inputPhoneNumber.length === 15) {
      this.inputPhoneNumber += '-';
    }
  }
  public isShow(): void {
    this.toShow = false;
  }
}
