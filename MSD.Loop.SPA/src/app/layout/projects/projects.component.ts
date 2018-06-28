import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [routerTransition()]
})
export class ProjectsComponent implements OnInit {
    projects: any;

    constructor(private projectService: ProjectService) {}

    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }
}
