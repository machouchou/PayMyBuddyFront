import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './auth/authentification.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListTransactionsComponent } from './pages/list-transactions/list-transactions.component';
import { ListFriendsComponent } from './pages/list-friends/list-friends.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo : 'login',
        pathMatch : 'prefix'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    {
       path : 'auth',
       // canActivate: [LoginService],
        component : AuthentificationComponent
    },
    {
        path : 'welcome',
        component : WelcomeComponent
    },
    {
        path : 'admin',
        component : AdminComponent,
        children: [
            {
                path : 'list-transactions',
                component : ListTransactionsComponent,
                pathMatch: 'prefix'
            },
            {
                path : 'list-friends',
                component : ListFriendsComponent,
                pathMatch: 'prefix'
            }
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
