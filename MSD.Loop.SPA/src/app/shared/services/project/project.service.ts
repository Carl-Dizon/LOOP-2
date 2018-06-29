import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    projects: any;

    constructor() {}

    getProjects() {
        this.projects = [
            {
                id: 1,
                name: 'Loop',
                image: environment.defaultProjectImagePlaceholder,
                estimatedHours: 500
            },
            {
                id: 2,
                name: 'Pool',
                image: environment.defaultProjectImagePlaceholder,
                estimatedHours: 500
            },
            {
                id: 3,
                name: 'Opol',
                image: environment.defaultProjectImagePlaceholder,
                estimatedHours: 500
            },
            {
                id: 4,
                name: 'Oopl',
                image: environment.defaultProjectImagePlaceholder,
                estimatedHours: 500
            }
        ];
        return this.projects;
    }
}
