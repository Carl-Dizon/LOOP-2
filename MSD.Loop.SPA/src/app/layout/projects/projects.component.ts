import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { LoghourService } from '../../shared/services/loghours/loghour.service';
import { Route, ActivatedRoute } from '@angular/router';
import {NgSwitch} from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [routerTransition()]
})
export class ProjectsComponent implements OnInit {
    private sub: any;
    id: number;
    projects: any;
    projecthours: any[] = [];
    loghour: any[];
    projecttotalhours: number;
    perprojecthours: any[] = [];
    perprojectpercentage: any[] = [];
    closeResult: string;
    constructor(private projectService: ProjectService, public router: Router, private loghourlist: LoghourService,
        public route: ActivatedRoute, private modalService: NgbModal) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.projects = this.projectService.getProjects();
        this.loghourlist.currentList.subscribe(loghourlist => this.loghour = loghourlist);

        this.projects.forEach(projects => {
        this.projecttotalhours = 0;
        this.loghour.forEach(element => {
         // tslint:disable-next-line:triple-equals
         if (projects.id == element.projectID) {
          this.projecttotalhours += element.loghours;
         }
        });
        this.projecttotalhours = this.projecttotalhours * 100;
        this.projecttotalhours = Math.floor(this.projecttotalhours / projects.estimatedHours);
        this.perprojecthours.push(this.projecttotalhours);
      });

    }
    navigateTo(value) {
        if (value) {
            this.router.navigate([value]);
        }
        return false;
    }
    getAreaPercentage(value1, value2) {
        let total: number;
        total = value1 / value2;
        total = Math.floor(total * 100);
        return total;
      }

      open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
