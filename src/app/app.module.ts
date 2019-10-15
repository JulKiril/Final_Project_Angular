import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AuthGuard } from './auth.guard';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';



import { NgxUiLoaderModule, NgxUiLoaderRouterModule} from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from './preloader-config';
import {FormsModule} from '@angular/forms';
import {RecipesService} from './shared/services/recipes.service';
import {FilterPipe} from './shared/pipes/filter.pipe';
import {SCategoryService} from './shared/services/s-category.service';
import {CategoryPipe} from './shared/pipes/category.pipe';
import {RCategoryService} from './shared/services/r-category.service';
import { RecipesDetailsComponent } from './pages/recipes-details/recipes-details.component';

import { AdminServicesComponent } from './admin/admin-services/admin-services.component';
import { AdminRecipesComponent } from './admin/admin-recipes/admin-recipes.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import {AdminComponent} from './admin/admin.component';
import {BlogService} from './shared/services/blog.service';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';
import { SendMailComponent } from './pages/send-mail/send-mail.component';
import {MatNativeDateModule } from '@angular/material';
import { AdminInboxMailComponent } from './admin/admin-inbox-mail/admin-inbox-mail.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    RecipesComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    CategoryPipe,
    RecipesDetailsComponent,
    AdminComponent,
    AdminServicesComponent,
    AdminRecipesComponent,
    AdminBlogComponent,
    AdminFormComponent,
    BlogDetailsComponent,
    LoginComponent,
    SendMailComponent,
    AdminInboxMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'MY_API_KEY'
    }),
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgwWowModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [RecipesService, SCategoryService, RCategoryService, BlogService, AuthGuard, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
