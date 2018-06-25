import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/User';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
  }

}
