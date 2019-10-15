import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {ISCategory, IService} from '../../shared/interfaces';
import {SCategoryService} from '../../shared/services/s-category.service';
import {ServicesService} from '../../shared/services/services.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  windowScrolled: boolean;
  categories: Array<ISCategory>;
  services: Array<IService>;
  categoryName: string;
  public activeItem: string;
  constructor(private sCategoryService: SCategoryService, private servicesService: ServicesService,
              @Inject(DOCUMENT) private document: Document) {
    this.getCategory();
    this.getServices();

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
  public onSelectItem(item: string): void {
    this.activeItem = item;
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
  private getCategory(): void {
    this.sCategoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  filterName(category: ISCategory): void {
    this.categoryName = category.name;
    // console.log(this.categoryName);
  }
}
