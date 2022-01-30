import { Injectable } from '@angular/core';
const EMAIL_KEY='email';
@Injectable({
  providedIn: 'root'
})
export class UserStoragService {

  constructor() { }

  public saveEmail(email: string){
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, email);
  
  }
  public getEmail() {
    return window.sessionStorage.getItem(EMAIL_KEY);

  }
}



