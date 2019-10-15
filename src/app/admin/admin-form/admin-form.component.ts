import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/services/form.service';
import {IForm } from '../../shared/interfaces';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  formAdmin: Array<IForm>;
  constructor(private formService: FormService) {
    this.getForm();
  }

  ngOnInit() {
  }
  public getForm(): void {
    this.formService.getForm().subscribe(
      data => {
        this.formAdmin = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  public isDelMessage(item: IForm): void {
    console.log(item);
    const { id } = item;
    this.formService.delForm(id).subscribe(() => {
      this.getForm();
    })
  }
}
