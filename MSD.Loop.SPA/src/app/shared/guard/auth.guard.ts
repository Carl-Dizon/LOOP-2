import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }

        this.hasCompany();

        this.router.navigate(['/login']);
        return false;
    }

    hasCompany() {
        if (localStorage.getItem('hasCompany')) {
            return true;
        }
        this.router.navigate(['/companies']);
        return false;
    }
}
