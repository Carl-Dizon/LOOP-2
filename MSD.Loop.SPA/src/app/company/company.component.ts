import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { CompanyService } from '../shared/services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
    animations: [routerTransition()]
})
export class CompanyComponent implements OnInit {
    companies: any;

    constructor(
        private companyService: CompanyService,
        private router: Router
    ) {}

    ngOnInit() {
        this.companies = this.companyService.getCompanies();
    }

    onSelectCompany() {
        localStorage.setItem('hasCompany', 'true');
    }
}
