import { Component, OnInit } from '@angular/core';
import {IRecipe, ISCategory, IService} from '../../shared/interfaces';
import {ServicesService} from '../../shared/services/services.service';
import {SCategoryService} from '../../shared/services/s-category.service';
import {NewRecipe, NewService} from '../../shared/classes';


@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {
  categories: Array<ISCategory>;
  categoryName: string;
  serviceTitle: string;
  serviceImg: string;
  servicePrice: number;
  serviceDescription: string;
  servicesAdmin: Array<IService>;
  editId: number;
  editServiceTitle: string;
  editServiceImg: string;
  editServicePrice: number;
  editServiceDescription: string;
  editCategoryName: string;

  constructor(private servicesService: ServicesService, private sCategoryService: SCategoryService) {
    this.getCategories();
    this.getServices();
  }

  ngOnInit() {
  }

  private getCategories(): void {
    this.sCategoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  private getServices(): void {
    this.servicesService.getServices().subscribe(
      data => {
        this.servicesAdmin = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  public isAddService(): void {
    const newService = new NewService(0, this.serviceTitle, this.categoryName,  this.servicePrice, this.serviceDescription,
      this.serviceImg);
    if (this.servicesAdmin.length === 0) {
      newService.id = 1;
    } else {newService.id = this.servicesAdmin.slice(-1)[0].id + 1; }
    this.serviceTitle = '';
    this.servicePrice = null;
    this.serviceDescription = '';
    this.serviceImg = '';
    this.servicesService.addServices(newService).subscribe(() => {
      this.getServices();
    })
  }
  public isDelService(service: IService): void {
    const { id } = service;
    this.servicesService.delServices(id).subscribe(() => {
      this.getServices();
    })
  }

  public isEditService(service: IService): void {
    this.editServiceTitle = service.title;
    this.editServicePrice = service.price;
    this.editServiceDescription = service.description;
    this.editServiceImg = service.img;
    this.editId = service.id;
    this.editCategoryName = service.name;
  }

  public isSaveChangesServices(): void{
    const newService = new NewService(
      this.editId,
      this.editServiceTitle,
      this.editCategoryName,
      this.editServicePrice,
      this.editServiceDescription,
      this.editServiceImg);
    this.servicesService.updateServices(newService).subscribe(()=> {
      this.getServices();
    })
  }
}
