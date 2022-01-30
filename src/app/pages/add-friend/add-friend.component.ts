import { UserStoragService } from './../../service/user-storag.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  [x: string]: any;
  @Input() userEmail: string;
    addFriendForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private addFriendService: AddFriendService,
              private router: Router, private userStoragService: UserStoragService) {
    this.addFriendForm = this.formBuilder.group({
      friendEmail: ['', Validators.required],
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    console.log('addFriend test');
    // tslint:disable-next-line: no-non-null-assertion
    this.addFriendService.addFriend(this.userStoragService.getEmail(), this.addFriendForm.get('friendEmail')!.value)
    .subscribe(
      res => {
        if (res['status'] === 'OK') {
          console.log(res);
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
