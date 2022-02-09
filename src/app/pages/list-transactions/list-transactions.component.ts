import { UserStoragService } from './../../service/user-storag.service';
import { IFriend } from './../list-friends/list-friends.model';
import { ListFriendsService } from './../list-friends/list-friends.service';

import { ListTransactionsService } from './list-transactions.service';
import { Component, OnInit } from '@angular/core';
import { ITransaction } from './list-transactions.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFriendComponent } from 'src/app/pages/add-friend/add-friend.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendMoneyService } from './send-money.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {
  public listTransactions: ITransaction[];
  public connections: IFriend;
  connectionForm: FormGroup;
  itemsPerPage: number;
  page: number;
  totalElts: number;

  constructor(private listTransactionsService: ListTransactionsService,
    private modalService: NgbModal, private listFriendsService: ListFriendsService,
    private formBuilder: FormBuilder,
    private sendMoneyService: SendMoneyService, private router: Router,
    private userStoragService: UserStoragService, private toastr: ToastrService,
  ) {
    this.itemsPerPage = 10;
    this.page = 0;
    this.totalElts = 0;
    this.connectionForm = this.formBuilder.group({
      connection: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
    });

  }

  ngOnInit() {
   // this.loadTransaction();
    this.loadConnection();

  }
  addFriend() {

    const modeRef = this.modalService.open(AddFriendComponent);
    modeRef.componentInstance.email = this.userStoragService.getEmail();
    modeRef.result.then((result) => {
      if (result == 'data insert') {
        this.loadConnection();
      }
    })
  }
  loadTransaction(page, number) {
    this.listTransactionsService.getUserTransactions({
      page: this.page-1,
      size: this.itemsPerPage,
      email: this.userStoragService.getEmail()
    }

      ).subscribe(
      res => {
        console.log(res);
        console.log(res.headers.get("x-total-count"));
        if (res.body['status'] === 'OK') {
          this.listTransactions = res.body['data'];
          this.totalElts = parseInt(res.headers.get("x-total-count"));
        }
      },
      error => {
        console.log(error);
      }

    );
  }
  loadConnection() {
    this.listFriendsService.getUserFriends(this.userStoragService.getEmail()).subscribe(
      res => {
        console.log(res);
        if (res['status'] === 'OK') {
          this.connections = res['data'];
          console.log(this.connections);
        }
      },
      error => {
        console.log(error);
      }

    );
  }
  onSubmit() {
    console.log('sendMoney');
    this.sendMoneyService.sendMoney(this.userStoragService.getEmail(),
      this.connectionForm.get('connection')!.value,
      this.connectionForm.get('description')!.value,
      this.connectionForm.get('amount')!.value)
      .subscribe(
        // tslint:disable-next-line: no-unused-expression
        res => {
          console.log(res);
          if (res['status'] === 'OK') {

          }
          if (res['errorCode'] === null) {
            this.toastr.success('Transaction successful', 'Transaction Message');
            setTimeout(() => {
             // this.loadTransaction();
            }, 2000);
            this.resetForm();
          } else {
            this.toastr.error(res['errorDescription'], 'Transaction Message');
          }
        },
        error => {
          this.toastr.error('An error occurred please contact the administrator', 'Transaction Message');
        }
      );
  }
  resetForm() {
    this.connectionForm.reset();
  }
}
