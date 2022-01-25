import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
    templateUrl : './Welcome.html',
    styleUrls : ['./Welcome.css']
})
export class WelcomeComponent {
    result: string;
    shownError: boolean;

    constructor(public http: HttpClient,
                private route: ActivatedRoute,
                private router: Router) {
        this.result = '';
        this.shownError = false;
        }

    public get(): void {

        this.http.get('http://localhost:8080/users').subscribe(
            res => this.resRequest(res)
        );
    }
    private resRequest(res: any): void {

        if (res.data) {
            this.router.navigate(['../users'], { relativeTo: this.route });
            this.result = JSON.stringify(res);
        } else {
            this.shownError = true;
        }
    }

    public logout(): void {
        localStorage.removeItem('loggedEmail');
        localStorage.removeItem('LoginStatus');

        this.router.navigate(['../home'], {relativeTo: this.route });
    }
}
