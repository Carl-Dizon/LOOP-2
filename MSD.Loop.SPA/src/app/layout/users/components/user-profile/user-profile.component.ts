import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../shared/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  constructor(
      private _route: ActivatedRoute,
      private _userService: UserService,
    ) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._userService.getById(id).then((data: User) => this.user = data);
  }

}

