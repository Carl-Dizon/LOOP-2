import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [routerTransition()]
})
export class ProjectsComponent implements OnInit {
    projects: any;

    constructor(private projectService: ProjectService, public router: Router) {}

    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }
}
