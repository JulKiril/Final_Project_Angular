import { Component, OnInit } from '@angular/core';
import { MailService} from '../../shared/services/mail.service';
import {IForm, IMail} from '../../shared/interfaces';

@Component({
  selector: 'app-admin-inbox-mail',
  templateUrl: './admin-inbox-mail.component.html',
  styleUrls: ['./admin-inbox-mail.component.css']
})
export class AdminInboxMailComponent implements OnInit {
  mailAdmin: Array<IMail>;
  constructor(private emailService: MailService) {
    this.getMail();
  }

  ngOnInit() {
  }
  public getMail(): void {
    this.emailService.getMail().subscribe(
      data => {
        this.mailAdmin = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  public isDelMessage(item: IMail): void {
    console.log(item);
    const { id } = item;
    this.emailService.delMail(id).subscribe(() => {
      this.getMail();
    });
  }
}
