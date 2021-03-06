import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {BlogCardComponent} from './home/blog-card/blog-card.component';
import {MatChipsModule} from "@angular/material/chips";
import {HIGHLIGHT_OPTIONS, HighlightOptions} from "ngx-highlightjs";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule

  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        fullLibraryLoader: () => import('highlight.js')
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
