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
  closeResult: string;
  users: User[] = [];
  constructor(
    private _modalService: NgbModal,
    private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().then(data => this.users = data);
  }

  openCreateUserModal() {
    this._modalService.open(UserFormComponent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
