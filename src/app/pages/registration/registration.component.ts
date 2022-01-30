import { RegistrationService } from './registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log('bonjour');
    // tslint:disable-next-line: align
    // tslint:disable-next-line: no-non-null-assertion
    this.registrationService.registrate(this.registerForm.get('firstName')!.value,
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-non-null-assertion
    this.registerForm.get('lastName')!.value, this.registerForm.get('birthDate')!.value,
    // tslint:disable-next-line: no-non-null-assertion
    this.registerForm.get('address')!.value, this.registerForm.get('country')!.value,
    // tslint:disable-next-line: no-non-null-assertion
    this.registerForm.get('email')!.value, this.registerForm.get('password')!.value)
      .subscribe(
        res => {
          if (res['status'] === 'OK') {
            this.router.navigate(['admin/login']);
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
