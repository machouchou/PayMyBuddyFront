import { UserStoragService } from './../../service/user-storag.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFriendService } from './add-friend.service';
import { ToastrService } from 'ngx-toastr';

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
              private router: Router, private userStoragService: UserStoragService, private toastr: ToastrService) {
    this.addFriendForm = this.formBuilder.group({
      friendEmail: ['', Validators.required],
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    console.log('addFriend test');
      this.addFriendService.addFriend(this.userStoragService.getEmail(), this.addFriendForm.get('friendEmail')!.value)
    .subscribe(
      res => {
        if (res['status'] === 'OK') {
          this.toastr.success('Added Friend successful', 'Transaction Message');
          console.log(res);
          this.activeModal.close('data insert');
         } else {
          console.log(res);
          this.toastr.error(res['errorDescription'], 'Transaction Message');
        }
      },
      error => {
        this.toastr.error('An error occurred please contact the administrator', 'Transaction Message' );
      }
    );

  }
}
