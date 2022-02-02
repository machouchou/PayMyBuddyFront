import { Router } from '@angular/router';
import { UserStoragService } from './../../service/user-storag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userStoragService: UserStoragService, private router: Router) { }

  ngOnInit() {
    this.userStoragService.logout();
    this.router.navigate(['login']);
  }

}
