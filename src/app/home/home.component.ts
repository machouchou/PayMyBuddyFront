import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit {
  isAuthenticated = (localStorage.getItem('loginStatus') === 'true');
  loggedEmail = localStorage.getItem('loggedEmail');

  constructor(private router: Router, private route: ActivatedRoute) { }
  ngAfterViewInit(): void {
    this.isAuthenticated = (localStorage.getItem('loginStatus') === 'true');
    this.loggedEmail = localStorage.getItem('loggedEmail');

    if (this.isAuthenticated && this.loggedEmail) {
      this.navigateToWelcome();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isAuthenticated = (localStorage.getItem(`loginStatus`) === 'true');
    this.loggedEmail = localStorage.getItem(`loggedEmail`);

    if (this.isAuthenticated && this.loggedEmail) {
      this.navigateToWelcome();
    }
  }

  ngOnInit() {
    this.isAuthenticated = (localStorage.getItem('loginStatus') === 'true');
    this.loggedEmail = localStorage.getItem('loggedEmail');

    if (this.isAuthenticated && this.loggedEmail) {
      this.navigateToWelcome();
    }
  }

  navigateToWelcome(): void {
    this.router.navigate(['../welcome'], {relativeTo: this.route});
  }
}
