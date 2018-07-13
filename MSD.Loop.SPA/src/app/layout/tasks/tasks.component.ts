import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskForm: FormGroup;
  constructor(    private _activeModal: NgbActiveModal,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  dismiss(reason: string = 'User cancelled') {
    this._activeModal.dismiss(reason);
  }
  async onSubmit() {
    const formValue = this.taskForm.value;
    this.resetFormGroup();
    formValue.image = 'environment.defaultProjectImagePlaceholder';
    this._activeModal.close(formValue);
  }
  private initCreateModal() {
    this.resetFormGroup();
  }
  private resetFormGroup() {
    this.taskForm = this._formBuilder.group({
      taskName: [''],
      Assignee: ['', [Validators.required]],
      taskID: ['', [Validators.required]],
      hourEstimate: ['', [Validators.required]],
    });
  }
}
