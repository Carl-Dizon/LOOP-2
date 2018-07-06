import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../../shared/models/User';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    @Input() user: User;

    roleOptions: any[] = [
        { id: 1, name: 'Superadmin' },
        { id: 2, name: 'Admin' },
        { id: 3, name: 'Manager' },
        { id: 4, name: 'Lead'},
        { id: 5, name : 'Worker'}
    ];

    userForm: FormGroup;
    constructor(
        private _activeModal: NgbActiveModal,
        private _formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.resetFormGroup();

        if (!this.user) {
            this.initCreateModal();
        } else {
            this.initEditModal();
        }
    }

    dismiss(reason: string = 'User cancelled') {
        this._activeModal.dismiss(reason);
    }

    async onSubmit() {
        const formValue = this.userForm.value;
        this.resetFormGroup();
        this._activeModal.close(formValue);
    }

    private initCreateModal() {
        this.resetFormGroup();
    }

    private initEditModal() {
        this.userForm.patchValue({
            id: this.user.id,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            address: this.user.address,
            role: this.user.role
        });
    }

    private resetFormGroup() {
        this.userForm = this._formBuilder.group({
            id: [''],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            address: ['', [Validators.required]],
            role: ['', [Validators.required]]
        });
    }
}
