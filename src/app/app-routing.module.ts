import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ServicesComponent} from './pages/services/services.component';
import {BlogComponent} from './pages/blog/blog.component';
import {RecipesComponent} from './pages/recipes/recipes.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {RecipesDetailsComponent} from './pages/recipes-details/recipes-details.component';
import {AdminComponent} from './admin/admin.component';
import {AdminServicesComponent} from './admin/admin-services/admin-services.component';
import {AdminRecipesComponent} from './admin/admin-recipes/admin-recipes.component';
import {AdminBlogComponent} from './admin/admin-blog/admin-blog.component';
import {AdminFormComponent} from './admin/admin-form/admin-form.component';
import {BlogDetailsComponent} from './pages/blog-details/blog-details.component';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';
import {SendMailComponent} from './pages/send-mail/send-mail.component';
import {AdminInboxMailComponent} from './admin/admin-inbox-mail/admin-inbox-mail.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'recipes', component: RecipesComponent},
  { path: 'recipes/:id', component: RecipesDetailsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent, children: [
      { path: '', redirectTo: 'category', pathMatch: 'full'},
      { path: 'services', component: AdminServicesComponent },
      { path: 'recipes', component: AdminRecipesComponent },
      { path: 'blog', component: AdminBlogComponent },
      { path: 'form', component: AdminFormComponent },
      { path: 'inbox-mail', component: AdminInboxMailComponent }
    ] },
  { path: 'login', component: LoginComponent },
  { path: 'send-mail', component: SendMailComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
