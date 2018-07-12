import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private _activeModal: NgbActiveModal,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.resetFormGroup();
  }
  async onSubmit() {
    const formValue = this.userForm.value;
    this.resetFormGroup();
    formValue.image = 'environment.defaultProjectImagePlaceholder';
    this._activeModal.close(formValue);
  }
  dismiss(reason: string = 'User cancelled') {
    this._activeModal.dismiss(reason);
  }
  private initCreateModal() {
    this.resetFormGroup();
  }
  private resetFormGroup() {
    this.userForm = this._formBuilder.group({
      projectID: [''],
      projectName: ['', [Validators.required]],
      image: ['', [Validators.required]],
      hourEstimate: ['', [Validators.required]],
    });
  }

}
