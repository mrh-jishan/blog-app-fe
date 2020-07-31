import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/forgot-password', component: ForgotPasswordComponent},
  {path: 'pages/blog', component: BlogComponent},
  {path: 'pages/profile', component: ProfileComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
