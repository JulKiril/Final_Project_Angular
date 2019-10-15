import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {IBlog} from '../../shared/interfaces';
import {BlogService} from '../../shared/services/blog.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  windowScrolled: boolean;
  p:number = 1;
  blog: Array<IBlog>;
  searchText: string = '';
  constructor(private blogService: BlogService,
              @Inject(DOCUMENT) private document: Document) {
    this.getBlog();
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
  pageChanged(event){
    this.p = event;
    window.scroll(0,0);
  }
  private getBlog(): void{
    this.blogService.getBlog().subscribe(
      data => {
        this.blog = data;
      },
      err => {
        console.log(err);
      }
    )
  }

}
