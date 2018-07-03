import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { ApiService } from '../shared/services/api.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    credentials: any;
    constructor(
        private _authService: AuthenticationService,
        private _router: Router
    ) {}

    ngOnInit() {
        console.log('signup component');
        const token = new URL(window.location.href).searchParams.get('token');
        this._authService.getToken(token).then(data => {
            this.credentials = data;
            if (!this.credentials) {
                this._router.navigate(['signup', 'error']);
            }
        });
    }
}
