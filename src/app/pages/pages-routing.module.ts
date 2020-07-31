import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {ProfileComponent} from "./profile/profile.component";
import {PagesComponent} from "./pages.component";
import {BlogCategoryComponent} from "./blog-category/blog-category.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'blog' },
      {path: 'blog', component: BlogComponent},
      {path: 'blog/:category', component: BlogCategoryComponent},
      {path: 'blog/:category/:slug', component: BlogComponent},
      {path: 'profile/:slug', component: ProfileComponent},
      {path: 'profile', component: ProfileComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
