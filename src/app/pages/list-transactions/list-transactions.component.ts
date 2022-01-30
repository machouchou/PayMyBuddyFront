import { IFriend } from './../list-friends/list-friends.model';
import { ListFriendsService } from './../list-friends/list-friends.service';

import { ListTransactionsService } from './list-transactions.service';
import { Component, OnInit } from '@angular/core';
import { ITransaction } from './list-transactions.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFriendComponent } from 'src/app/pages/add-friend/add-friend.component';
import { Live } from '@ng-bootstrap/ng-bootstrap/util/accessibility/live';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendMoneyService } from './send-money.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {
public listTransactions: ITransaction[];
public connections: IFriend;
connectionForm: FormGroup;

  constructor(private listTransactionsService: ListTransactionsService, 
              private modalService: NgbModal, private listFriendsService: ListFriendsService,
              private formBuilder: FormBuilder,
              private sendMoneyService: SendMoneyService, private router: Router) {
this.connectionForm = this.formBuilder.group({
  connection: ['', Validators.required],
  amount: ['', Validators.required],
});

  }

  ngOnInit() {
    this.loadTransaction();
    this.loadConnection();

  }
  addFriend() {

    const modeRef = this.modalService.open(AddFriendComponent);
    modeRef.componentInstance.email = 'at@live.fr';
  }
loadTransaction() {
  this.listTransactionsService.getUserTransactions('at@live.fr').subscribe(
    res => {
      if (res['status'] === 'OK') {
        this.listTransactions = res['data'];
       }
    },
    error => {
      console.log(error);
    }

  );
}
loadConnection() {
this.listFriendsService.getUserFriends('at@live.fr').subscribe(
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
onSubmit(){
  console.log('sendMoneyTest');
  this.sendMoneyService.sendMoney('at@live.fr',
  this.connectionForm.get('connection')!.value, 'sendMoney',
  this.connectionForm.get('amount')!.value)
  .subscribe(
    // tslint:disable-next-line: no-unused-expression
    res => {
      console.log(res);
      if (res['status'] === 'OK') {

      }
    }
  );
}
}
