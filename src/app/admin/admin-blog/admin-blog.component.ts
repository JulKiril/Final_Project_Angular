import { Component, OnInit } from '@angular/core';
import {IBlog, IRecipe} from '../../shared/interfaces';
import { BlogService } from '../../shared/services/blog.service';
import {NewBlog, NewRecipe} from '../../shared/classes';
import {RecipesService} from '../../shared/services/recipes.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  blogAdmin: Array<IBlog>;
  articleTitle: string;
  articleImg: string;
  shortContent: string;
  articleContent: string;
  editArticleTitle: string;
  editShortContent: string;
  editArticleContent: string;
  editArticleImg: string;
  editId: number;
  constructor(private blogService: BlogService) {
    this.getBlog();
  }

  ngOnInit() {
  }
  private getBlog(): void {
    this.blogService.getBlog().subscribe(
      data => {
        this.blogAdmin = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  public isAddArticle(): void {
    const newArticle = new NewBlog(0, this.articleTitle, this.shortContent,  this.articleContent,
      this.articleImg);
    if (this.blogAdmin.length === 0) {
      newArticle.id = 1;
    } else {newArticle.id = this.blogAdmin.slice(-1)[0].id + 1; }
    // newArticle.id = this.blogAdmin.slice(-1)[0].id + 1;
    this.articleTitle = '';
    this.shortContent = '';
    this.articleContent = '';
    this.articleImg = '';
    this.blogService.addBlog(newArticle).subscribe(() => {
      this.getBlog();
    })
  }
  public isDelArticle(article: IBlog): void {
    const { id } = article;
    this.blogService.delBlog(id).subscribe(() => {
      this.getBlog();
    })
  }

  public isEditArticle(article: IBlog): void {
    this.editArticleTitle = article.title;
    this.editShortContent = article.shortContent;
    this.editArticleContent = article.content;
    this.editArticleImg = article.img;
    this.editId = article.id;
  }

  public isSaveChangesBlog(): void{
    const newArticle = new NewBlog(
      this.editId,
      this.editArticleTitle,
      this.editShortContent,
      this.editArticleContent,
      this.editArticleImg);
    this.blogService.updateBlog(newArticle).subscribe(() => {
      this.getBlog();
    })
  }

}
