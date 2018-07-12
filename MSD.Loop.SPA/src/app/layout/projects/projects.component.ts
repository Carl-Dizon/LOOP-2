import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { LoghourService } from '../../shared/services/loghours/loghour.service';
import { Route, ActivatedRoute } from '@angular/router';
import { NgSwitch } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { Projects } from '../../shared/models/projects';
import { LogHours } from '../../shared/models/LogHours';
import * as _ from 'lodash';
import { TaskService } from '../../shared/services/tasks/task.service';
import { Tasks } from '../../shared/models/Tasks';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [routerTransition()]
})
export class ProjectsComponent implements OnInit {
    private sub: any;
    id: number;

    projecthours: any[] = [];
    totalprojecthours: any[] = [];
    loghour: any[];
    projecttotalhours: number;
    pertaskhours: number[] = [];
    perprojectpercentage: number[] = [];
    closeResult: string;
    projects: Projects[] = [];
    tasks: Tasks[] = [];
    loghours: LogHours[] = [];
    userForm: FormGroup;
    totalhourlogged: number;
    constructor(private projectService: ProjectService, public router: Router, private loghourlist: LoghourService,
        public route: ActivatedRoute, private modalService: NgbModal, private _formBuilder: FormBuilder,
        private _modalService: NgbModal, private tasktService: TaskService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        // console.log(this.projects);
        // this.projects = this.projectService.getProjects();
        this.projectService.getProjects().then(data => this.projects = data);
        // this.tasktService.getTasks().then(data => this.tasks = data);
        // this._userService.getUsers().then(data => this.users = data);
        this.loghourlist.getLogHours().then(hours => this.loghours = hours);
        this.projectService.getProjects().then(project => {
            for (let i = 0; i < project.length; i++) {

                this.loghourlist.getLogHours().then(loghour => {
                    this.totalhourlogged = 0;
                    _.forEach(loghour, dat => {
                        if (+dat.projectId === i + 1) {
                            this.totalhourlogged += dat.hoursLogged;
                            // console.log(this.totalhourlogged);
                        }
                    });
                    this.perprojectpercentage.push(this.totalhourlogged);
                });

            }

            this.tasktService.getTasks().then(task => {
                for (let i = 0; i < project.length; i++) {
                    if (project[i].hourEstimate > 0) {
                    this.pertaskhours.push(project[i].hourEstimate);
                    }

                }
                console.log( this.pertaskhours);
            });
        });

    }
    navigateTo(value) {
        if (value) {
            this.router.navigate([value]);
        }
        return false;
    }
    getAreaPercentage(value1: number, value2: number) {
        let total: number;
        total = value1 / value2;
        total = Math.floor(total * 100);

        return total;
    }

    private resetFormGroup() {
        this.userForm = this._formBuilder.group({
            projectID: [''],
            projectName: ['', [Validators.required]],
            image: ['', [Validators.required]],
            hourEstimate: ['', [Validators.required]]
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    openCreateUserModal() {
        this._modalService.open(ProjectsFormComponent).result.then((result) => {
            //     const id = +this.users[this.users.length - 1].id + 1;
            //     result.id = `${id}`;
            console.log(result);
            this.projects.push(result);
        }, (reason) => {
            console.log(reason);
        });
    }
}
