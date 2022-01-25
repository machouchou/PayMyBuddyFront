import { IResponse } from './../interface/response';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    templateUrl : './Authentification.html',
    styleUrls : ['./Authentification.css']
})
export class AuthentificationComponent {

    public email: string;
    public password: string;
    public showError: boolean;
    public errorMessage: string;

    constructor(public http: HttpClient,
                private route: ActivatedRoute,
                private router: Router) {
        this.email      = '';
        this.password   = '';
        this.showError  = false;
        this.errorMessage = '';
    }

    public login(): void {

        const body = {
            email : this.email,
            password : this.password
        };

        this.http.post<IResponse>('http://localhost:8080/userLogin', body).subscribe(
            res => this.resLogin(res)
        );
    }

    private resLogin(res: IResponse): void {

        if (res.data) {
            localStorage.setItem('loggedEmail', this.email);
            localStorage.setItem('loginStatus', String(res.data));
            // Page d'accueil
            this.router.navigate(['../welcome'], {relativeTo: this.route });
        } else {
            localStorage.removeItem('loggedEmail');
            localStorage.removeItem('loginStatus');
            this.showError = true;
            this.errorMessage = res.errorDescription;

            Swal.fire('Email or password incorrect', this.errorMessage);
        }
    }
}
