import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  formModal: FormGroup;
  constructor(private _activeModal: NgbActiveModal, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetFormGroup();

    if (!this.user) {
      this.initCreateModal();
    } else {
      this.initEditModal();
    }
  }

  close(reason: string = 'User cancelled') {
    this._activeModal.dismiss(reason);
  }

  async onSubmit() {
    const formValue = this.formModal.value;
    console.log(formValue);
    this.resetFormGroup();
    this.close('Form submitted');
  }
  private initCreateModal() {
    this.resetFormGroup();
  }

  private initEditModal() {
    this.formModal.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      address: this.user.address,
      role: this.user.userRole
    });
  }

  private resetFormGroup() {
    this.formModal = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }
}
