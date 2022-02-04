import { UserStoragService } from './../../service/user-storag.service';
import { DepositAmountService } from './deposit-amount.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DebitPmbService } from '../debit-pmb/debit-pmb.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deposit-amount',
  templateUrl: './deposit-amount.component.html',
  styleUrls: ['./deposit-amount.component.css']
})
export class DepositAmountComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private depositAmountService: DepositAmountService, private router: Router,
              private userStoragService: UserStoragService, private debitPmbService: DebitPmbService, private toastr: ToastrService
              ) {
       this.connectionForm = this.formBuilder.group({
         amount: ['', Validators.required],
         transaction: ['', Validators.required]
       });
     }
  connectionForm: FormGroup;
  transactions = ['DEBIT', 'CREDIT'];
  public void 
  ngOnInit() {
  }
  onSubmit() {
  console.log('depositAmount');
  let t = this.connectionForm.get('transaction')!.value;
  let a = this.connectionForm.get('amount')!.value;
  if (t=='CREDIT') {
    this.creditAccount(a);
  } else {
    this.debitAccount(a);
  }
  }
creditAccount(amount) {
  this.depositAmountService.addMoneyOnPMD(this.userStoragService.getEmail(),
  amount,
  'alimentation compte PMB')
  .subscribe(

    res => {
      console.log(res);
      if (res['errorCode'] === null) {
        this.toastr.success('Credit Transaction successful', 'Transaction Message');
      } else {
        this.toastr.error(res['errorDescription'], 'Transaction Message');
      }
    },
    error => {
      this.toastr.error('An error occurred please contact the administrator', 'Transaction Message' );
    }
  );
  }
  debitAccount(amount) {
    this.debitPmbService.debitAccountPMD(this.userStoragService.getEmail(),
    amount,
    'débiter mon compte PMB')
    .subscribe(

      res => {
        console.log(res);
        if (res['errorCode'] === null) {
          this.toastr.success('Debit Transaction successful', 'Transaction Message');
        } else {
          this.toastr.error(res['errorDescription'], 'Transaction Message');
        }
      },
      error => {
        this.toastr.error('An error occurred please contact the administrator', 'Transaction Message' );
      }
    );
  }
}
