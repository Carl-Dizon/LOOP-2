import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(
    private _modalService: NgbModal,
    private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().then(data => this.users = data);
  }

  openCreateUserModal() {
    this._modalService.open(UserFormComponent).result.then((result) => {
      let id = +this.users[this.users.length - 1].id;
      result.id = '' + ++id;
      this.users.push(result);
    }, (reason) => {
      console.log(reason);
    });
  }
}
