import { Component, OnInit } from '@angular/core';
import {IBlog} from '../../shared/interfaces';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {BlogDetailsService} from '../../shared/services/blog-details.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  view: IBlog;
  blogId: number;
  constructor(private blogDetailsService: BlogDetailsService, private route: ActivatedRoute,
              private location: Location) {
    this.getBlog();
  }

  ngOnInit() {
  }
  public getBlog(): void {
    this.blogId = Number(this.route.snapshot.paramMap.get('id'));
    this.blogDetailsService.getBlog(this.blogId).subscribe(
      data => {
        this.view = data;
      }
    );
  }

  goBack(): void{
    this.location.back();
    window.scroll(0,0);
  }

}
