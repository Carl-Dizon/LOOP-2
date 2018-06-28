import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    companies: any;

    constructor() {}

    getCompanies() {
        this.companies = [
            {
                id: 1,
                name: 'Loop',
                logo: 'assets/images/loop-logo.jpg'
            },
            {
                id: 2,
                name: 'Pool',
                logo: environment.defaultCompanyImagePlaceholder
            },
            {
                id: 3,
                name: 'Opol',
                logo: environment.defaultCompanyImagePlaceholder
            },
            {
                id: 4,
                name: 'Oopl',
                logo: environment.defaultCompanyImagePlaceholder
            }
        ];
        return this.companies;
    }
}
