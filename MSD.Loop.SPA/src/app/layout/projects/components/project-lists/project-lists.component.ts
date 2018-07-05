import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services';
import { LoghourService } from '../../../../shared/services/loghours/loghour.service';
import { Router, NavigationEnd } from '@angular/router';
import { routerTransition } from '../../../../router.animations';
@Component({
  selector: 'app-project-lists',
  templateUrl: './project-lists.component.html',
  styleUrls: ['./project-lists.component.scss'],
  animations: [routerTransition()]
})
export class ProjectListsComponent implements OnInit {
  Uppgifter: any[];
  projects: any;
  projectProgress: any[] = [];
  loghour: any[];
  projecttotalhours: number;
  perprojecthours: any[] = [];
  perprojectpercentage: any[] = [];
  constructor(private projectService: ProjectService, private loghourlist: LoghourService, public router: Router) { }

  ngOnInit() {
    this.Uppgifter = ['Projekt', 'Progress'];
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
   // console.log(this.loghour);
  }
  navigateTo(value) {
    if (value) {
        this.router.navigate([value]);
    }
    return false;
}
}
