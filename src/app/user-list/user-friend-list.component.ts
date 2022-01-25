import { IResponse } from './../interface/response';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-friend-list',
  templateUrl: './user-friend-list.component.html',
  styleUrls: ['./user-friend-list.component.css']
})
export class UserFriendsComponent implements OnInit {
listUser: IUser[] = [];
errorMessage = '';
tempUser: IUser;
email = 'rg@gmail.com';
friendList: IUser[];

constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFriends(this.email).subscribe({
      next: response => {
        this.friendList = response.data;
      },
      error: err => this.errorMessage = err
    });

    console.log('User Friends : ' + this.friendList);
  }
}
