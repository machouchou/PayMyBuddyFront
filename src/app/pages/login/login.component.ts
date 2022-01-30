import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Hello');
    // tslint:disable-next-line: no-non-null-assertion
    this.loginService.authenticate(this.loginForm.get('email')!.value, this.loginForm.get('password')!.value)
    .subscribe(
      res => {
        if (res['status'] === 'OK') {
          this.router.navigate(['admin/list-transactions']);
        } else {
          console.log(res);
        }
      },
      error => {
        console.log(error);
      }
    );


  }
}
