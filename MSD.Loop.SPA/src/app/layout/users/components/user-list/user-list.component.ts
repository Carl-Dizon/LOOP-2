import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from '../user-form/user-form.component';
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';
import { User } from '../../../../shared/models/User';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    @Input() users: User[];
    @Output() editedUser: EventEmitter<User> = new EventEmitter<User>();
    @Output() deletedUser: EventEmitter<User> = new EventEmitter<User>();

    constructor(
        private _modalService: NgbModal,
    ) {}

    ngOnInit() {
    }

    openEditUserModal(user: User) {
        const modalRef = this._modalService.open(UserFormComponent);
        modalRef.componentInstance.user = user;
        modalRef.result.then(
            (result: User) => {
                this.editedUser.emit(result);
            },
            reason => {
                console.log(reason);
            }
        );
    }

    openDeleteUserModal(user: User) {
        const modalRef = this._modalService.open(DeleteUserModalComponent);
        modalRef.componentInstance.user = user;
        modalRef.result.then(
            (result: User) => {
                this.deletedUser.emit(result);
            },
            reason => {
                console.log(reason);
            }
        );
    }

}
