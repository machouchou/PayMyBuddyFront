import { RegistrationService } from './registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IRegistration } from './registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;
  registerForm: FormGroup;
  registrationModel!: IRegistration;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService,
     private router: Router, private toastr: ToastrService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log('bonjour');
    this.registrationModel={
      "firstName":this.registerForm.get('firstName')!.value,
      "lastName":this.registerForm.get('lastName')!.value,
      "birthDate":this.registerForm.get('birthDate')!.value,
      "address":this.registerForm.get('address')!.value,
      "country":this.registerForm.get('country')!.value,
      "appAccountDto":{
        "email":this.registerForm.get('email')!.value,
        "password":this.registerForm.get('password')!.value, 
        "authenticated": false
      }
    }
        this.registrationService.registrate(this.registrationModel)
      .subscribe(
        res => {
          if (res['errorCode'] === null) {
            this.toastr.success('Registration successful', 'Transaction Message');
            this.router.navigate(['admin/login']);
          } else {
            console.log(res);
            this.toastr.error(res['errorDescription'], 'Transaction Message');
          }
        },
        error => {
          console.log(error);
          this.toastr.error('An error occurred please contact the administrator', 'Transaction Message' );
        }
      );
  }
}
