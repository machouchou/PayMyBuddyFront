import { ListFriendsService } from './list-friends.service';
import { Component, OnInit } from '@angular/core';
import { IFriend } from './list-friends.model';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css']
})
export class ListFriendsComponent implements OnInit {
public listFriends: IFriend[];
  constructor(private listFriendsService: ListFriendsService) { }

  ngOnInit() {
    this.listFriendsService.getUserFriends('at@live.fr').subscribe(
      res => {
        if (res['status'] === 'OK') {
          this.listFriends = res['data'];
          console.log(this.listFriends);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
