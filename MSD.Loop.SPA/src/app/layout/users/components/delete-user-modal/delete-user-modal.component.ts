import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../../shared/models/User';

@Component({
    selector: 'app-delete-user-modal',
    templateUrl: './delete-user-modal.component.html',
    styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {
    @Input() user: User;
    deleteForm: FormGroup;
    constructor(
        private _activeModal: NgbActiveModal,
        private _formBuilder: FormBuilder
    ) {}

    async onSubmit() {
        const formValue = this.deleteForm.value;
        this._activeModal.close(formValue);
    }

    ngOnInit() {
        this.initDeleteForm();
    }

    dismiss(reason: string = 'User cancelled') {
        this._activeModal.dismiss(reason);
    }

    private initDeleteForm() {
        this.deleteForm = this._formBuilder.group({
            id: [this.user.id],
            firstName: [this.user.firstName],
            lastName: [this.user.lastName],
            address: [this.user.address],
            role: [this.user.role]
        });
    }
}
