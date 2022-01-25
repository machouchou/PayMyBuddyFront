import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './auth/authentification.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginService } from './service/login.service';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo : 'home',
        pathMatch : 'prefix'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
       path : 'auth',
       // canActivate: [LoginService], 
        component : AuthentificationComponent
    },
    {
        path : 'welcome',
        component : WelcomeComponent
    }

];

export const routing = RouterModule.forRoot(appRoutes);
