import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './auth/authentification.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { routing } from './app.routing';
import { UserComponent } from './user/user.component';
import { UserFriendsComponent } from './user-list/user-friend-list.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { RegisterComponent } from './home/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    WelcomeComponent,
    UserComponent,
    UserFriendsComponent,
    HeaderComponent,
    NavBarComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
