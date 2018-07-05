import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { ApiService } from '../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    credentials: any;
    signupForm: FormGroup;

    constructor(
        private _authService: AuthenticationService,
        private _router: Router,
        private _formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.resetFormGroup();
        const token = new URL(window.location.href).searchParams.get('token');
        this._authService.getToken(token).then(data => {
            this.credentials = data;
            if (!this.credentials) {
                this._router.navigate(['signup', 'error']);
            }

            this.initSignupForm();
        });
    }

    onSubmit() {
        const formValue = this.signupForm.value;
        console.log(formValue);
        this._router.navigate(['dashboard']);
    }

    private initSignupForm() {
        this.signupForm.patchValue({
            email: this.credentials.email,
            role: this.credentials.role
        });
    }

    private resetFormGroup() {
        this.signupForm = this._formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            address: ['', [Validators.required]],
            role: ['', [Validators.required]],
            email: ['', [Validators.required]],
            passwords: this._formBuilder.group(
                {
                    password: [
                        '',
                        [Validators.required, Validators.minLength(6)]
                    ],
                    repeatedPassword: [
                        '',
                        [Validators.required, Validators.minLength(6)]
                    ]
                },
                { validator: this.matchValidator }
            )
        });
    }

    matchValidator(group: FormGroup) {
        let valid = true;
        let pw = '';
        let rpw = '';

        for (const name in group.controls) {
            if (name === 'password') {
                pw = group.controls[name].value;
            } else {
                rpw = group.controls[name].value;
            }
        }

        if (pw !== rpw) {
            valid = false;
        }

        if (valid) {
            return null;
        }

        return {
            mismatch: true
        };
    }
}
