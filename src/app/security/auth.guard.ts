import { UserStoragService } from './../service/user-storag.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userStoragService: UserStoragService, private router: Router) {}

  canActivate(): boolean {
    if (this.userStoragService.getEmail()== null || this.userStoragService.getEmail()== undefined) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
