import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services';
import { AreaService } from '../../../../shared/services/areas/area.service';
import { LoghourService } from '../../../../shared/services/loghours/loghour.service';
import { Router, NavigationEnd } from '@angular/router';
import { routerTransition } from '../../../../router.animations';
import { TaskService } from '../../../../shared/services/tasks/task.service';
import { MaterialService } from '../../../../shared/services/materials/material.service';
import { Route, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss'],
  animations: [routerTransition()]
})
export class ProjectGridComponent implements OnInit {
  Uppgifter: any[];
  projects: any;
  loghour: any[];
  areas: any[];
  arealist: string[] = [];
  tasks: any[];
  specificWoodworkEstimate: any[] = [];
  specificBrickworkEstimate: any[] = [];
  specificConstructionEstimate: any[] = [];
  specificWallingEstimate: any[] = [];
  specificElectricalEstimate: any[] = [];
  specificPlumbingEstimate: any[] = [];

  woodworkfinalpercentage: any[] = [];
  brickworkfinalpercentage: any[] = [];
  constructionfinalpercentage: any[] = [];
  wallingfinalpercentage: any[] = [];
  plumbingfinalpercentage: any[] = [];
  electricalsfinalpercentage: any[] = [];

  specificTask: any[] = [];
  woodwork: any[] = [];
  totalinitialareaestimate: any[] = [];
  totalwoodworkhours: number;
  totalbrickworkhours: number;
  totalconstructionhours: number;
  totalwallinghours: number;
  totalplumbinghours: number;
  totalelectricalhours: number;
  totalareahourestimate: number;

  woodworkhourpercentage: number;
  brickworkhourpercentage: number;
  contructionhourpercentage: number;
  wallinghourpercentage: number;
  plumbinghourpercentage: number;
  electricalhourpercentage: number;

  total: number;
  projecttotalhours: number;
  perprojecthours: any[] = [];
  constructor(private projectService: ProjectService, public router: Router, public route: ActivatedRoute,
    private tasklist: TaskService, private loghourlist: LoghourService, private areaservicelist: AreaService,
    private materiallist: MaterialService) { }

  ngOnInit() {
    this.Uppgifter = ['Projekt', 'Progress'];
    this.projectService.getProjects().then(data => this.projects = data);
    // this.tasklist.currentList.subscribe(tasklist => this.tasks = tasklist);
    // this.loghourlist.currentList.subscribe(loghourlist => this.loghour = loghourlist);
    // this.areaservicelist.currentList.subscribe(areaservicelist => this.areas = areaservicelist);
    this.woodworkhourpercentage = 0;
    this.brickworkhourpercentage = 0;
    this.contructionhourpercentage = 0;
    this.wallinghourpercentage = 0;
    this.plumbinghourpercentage = 0;
    this.electricalhourpercentage = 0;
    this.totalwoodworkhours = 0;
    this.totalbrickworkhours = 0;
    this.totalconstructionhours = 0;
    this.totalwallinghours = 0;
    this.totalplumbinghours = 0;
    this.totalelectricalhours = 0;

    this.areaservicelist.getTotalAreaHours().then(area => {
      _.forEach(area, specificarea => {
        this.totalinitialareaestimate.push(specificarea.areaHourEstimate);
        this.arealist.push(specificarea.areaName);
      });

    });



    this.projectService.getProjects().then(project => {
      _.forEach(project, specificproject => {
        this.tasklist.getTasks().then(taskdata => {
          this.totalareahourestimate = 0;

          this.loghourlist.getLogHours().then(loghour => {
            _.forEach(loghour, data => {
              if (+data.projectId === +specificproject.projectID) {
                if (data.areaName === 'Woodwork') {
                  this.totalwoodworkhours += data.hoursLogged;
                }
                if (data.areaName === 'Brickwork') {
                  this.totalbrickworkhours += data.hoursLogged;
                }
                if (data.areaName === 'Construction') {
                  this.totalconstructionhours += data.hoursLogged;
                }
                if (data.areaName === 'Walling') {
                  this.totalwallinghours += data.hoursLogged;
                }
                if (data.areaName === 'Plumbing') {
                  this.totalplumbinghours += data.hoursLogged;
                }
                if (data.areaName === 'Electricals') {
                  this.totalelectricalhours += data.hoursLogged;
                }
              }
            });

            this.woodworkfinalpercentage.push(this.totalwoodworkhours);
            this.brickworkfinalpercentage.push(this.totalbrickworkhours);
            this.constructionfinalpercentage.push(this.totalconstructionhours);
            this.wallingfinalpercentage.push(this.totalwallinghours);
            this.plumbingfinalpercentage.push(this.totalplumbinghours);
            this.electricalsfinalpercentage.push(this.totalelectricalhours);
            this.totalwoodworkhours = 0;
            this.totalbrickworkhours = 0;
            this.totalconstructionhours = 0;
            this.totalwallinghours = 0;
            this.totalplumbinghours = 0;
            this.totalelectricalhours = 0;
          });

        });
      });
    });



    // this.projects.forEach(projects => {
    //   this.total = 0;
    //   this.tasks.forEach(tasks => {
    //     // tslint:disable-next-line:triple-equals
    //     if (tasks.projectID == projects.id) {
    //       // this.specificAreaEstimate.push(tasks.hourEstimate);
    //       this.total += tasks.hourEstimate;
    //     }
    //   });
    //   this.initialareaestimate.push(this.total);
    // });

    // this.projects.forEach(projects => {
    //   this.totalwoodworkhours = 0;
    //   this.totalbrickworkhours = 0;
    //   this.totalconstructionhours = 0;
    //   this.totalwallinghours = 0;
    //   this.totalplumbinghours = 0;
    //   this.totalelectricalhours = 0;
    //   this.projecttotalhours = 0;
    //   // console.log('-->' + projects.id);
    //   this.loghour.forEach(loghour => {
    //     // tslint:disable-next-line:triple-equals
    //     if (projects.id == loghour.projectID) {
    //       this.projecttotalhours += loghour.loghours;

    //       if (loghour.areaName === 'Woodwork') {
    //         this.totalwoodworkhours += loghour.loghours;
    //       }
    //       if (loghour.areaName === 'Brickwork') {
    //         this.totalbrickworkhours += loghour.loghours;
    //       }
    //       if (loghour.areaName === 'Construction') {
    //         this.totalconstructionhours += loghour.loghours;
    //       }
    //       if (loghour.areaName === 'Walling') {
    //         this.totalwallinghours += loghour.loghours;
    //       }
    //       if (loghour.areaName === 'Plumbing') {
    //         this.totalplumbinghours += loghour.loghours;
    //       }
    //       if (loghour.areaName === 'Electricals') {
    //         this.totalelectricalhours += loghour.loghours;
    //       }
    //     }


    //   });
    //   this.projecttotalhours =  this.getAreaPercentage(this.projecttotalhours, this.projects[projects.id - 1 ].estimatedHours);
    //   this.perprojecthours.push(this.projecttotalhours);
    //   // this.projecttotalhours = Math.floor(this.projecttotalhours / this.initialareaestimate[i]);
    //   // this.perprojecthours.push(this.projecttotalhours);

    //   this.specificWoodworkEstimate.push(this.totalwoodworkhours);
    //   this.specificBrickworkEstimate.push(this.totalbrickworkhours);
    //   this.specificConstructionEstimate.push(this.totalconstructionhours);
    //   this.specificWallingEstimate.push(this.totalwallinghours);
    //   this.specificPlumbingEstimate.push(this.totalplumbinghours);
    //   this.specificElectricalEstimate.push(this.totalelectricalhours);
    //   // console.log(this.specificAreaEstimate);
    // });
    // this.woodworkhourpercentage = 0;
    // for (let i = 0; i < this.specificWoodworkEstimate.length; i++) {

    //   // this.projecttotalhours =  this.getAreaPercentage(this.projecttotalhours, this.projects[i].estimatedHours);
    //   // this.perprojecthours.push(this.projecttotalhours);

    //   // console.log(this.specificAreaEstimate[i]);
    //   this.woodworkhourpercentage = this.getAreaPercentage(this.specificWoodworkEstimate[i], this.initialareaestimate[i]);
    //   this.woodworkfinalpercentage.push(this.woodworkhourpercentage);

    //   this.brickworkhourpercentage = this.getAreaPercentage(this.specificBrickworkEstimate[i], this.initialareaestimate[i]);
    //   this.brickworkfinalpercentage.push(this.brickworkhourpercentage);

    //   this.contructionhourpercentage = this.getAreaPercentage(this.specificConstructionEstimate[i], this.initialareaestimate[i]);
    //   this.constructionfinalpercentage.push(this.contructionhourpercentage);

    //   this.wallinghourpercentage = this.getAreaPercentage(this.specificWallingEstimate[i], this.initialareaestimate[i]);
    //   this.wallingfinalpercentage.push(this.wallinghourpercentage);

    //   this.plumbinghourpercentage = this.getAreaPercentage(this.specificPlumbingEstimate[i], this.initialareaestimate[i]);
    //   this.plumbingfinalpercentage.push(this.plumbinghourpercentage);

    //   this.electricalhourpercentage = this.getAreaPercentage(this.specificElectricalEstimate[i], this.initialareaestimate[i]);
    //   this.electricalsfinalpercentage.push(this.electricalhourpercentage);


    // }

  }
  getAreaPercentage(value1, value2) {
    let total: number;
    total = value1 / value2;
    total = Math.floor(total * 100);
    return total;
  }
  navigateTo(value) {
    if (value) {
      this.router.navigate([value]);
    }
    return false;
  }
}
