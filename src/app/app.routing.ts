import { ProfileDtoComponent } from './pages/profile-dto/profile-dto.component';
import { AuthGuard } from './security/auth.guard';
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
import { DepositAmountComponent } from './pages/deposit-amount/deposit-amount.component';
import { LogoutComponent } from './pages/logout/logout.component';

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
        path: 'logout',
        component: LogoutComponent
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
        canActivate: [
            AuthGuard
        ],
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
            },
            {
                path : 'deposit-amount',
                component : DepositAmountComponent,
                pathMatch: 'prefix'
            },
            {
                path : 'profile-dto',
                component : ProfileDtoComponent,
                pathMatch: 'prefix'
            }
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
