import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {PagesComponent} from "./pages.component";
import {ProfileComponent} from "./profile/profile.component";
import {BlogComponent} from "./blog/blog.component";
import { NavCarouselComponent } from './components/nav-carousel/nav-carousel.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { BlogCategoryComponent } from './blog-category/blog-category.component';


@NgModule({
  declarations: [
    PagesComponent,
    ProfileComponent,
    BlogComponent,
    NavCarouselComponent,
    BlogCategoryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class PagesModule { }
