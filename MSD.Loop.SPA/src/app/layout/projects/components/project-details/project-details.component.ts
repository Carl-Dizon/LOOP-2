import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services';
import { routerTransition } from '../../../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { Route, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../../shared/services/tasks/task.service';
import { LoghourService } from '../../../../shared/services/loghours/loghour.service';
import { AreaService } from '../../../../shared/services/areas/area.service';
import { MaterialService } from '../../../../shared/services/materials/material.service';
import { Projects } from '../../../../shared/models/Projects';
import { Tasks } from '../../../../shared/models/Tasks';
import * as _ from 'lodash';
import Chart from 'chart.js';
import * as moment from 'moment/moment';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksComponent } from '../../../tasks/tasks.component';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [routerTransition()]

})
export class ProjectDetailsComponent implements OnInit {
  private sub: any;
  projectID: number;
  projects: any[] = [];
  specificproject: object;
  tasks: any[] = [];
  areas: any[];
  materials: any[];
  materialsPerProject: any[] = [];
  projectstatus = 0;
  totalhours = 0;
  totalhourpercentage: number;

  totalwoodworkhours = 0;
  totalbrickworkhours = 0;
  totalconstructionhours = 0;
  totalwallinghours = 0;
  totalplumbinghours = 0;
  totalelectricalhours = 0;
  totalareahourestimate = 0;

  woodworkhourpercentage = 0;
  brickworkhourpercentage = 0;
  contructionhourpercentage = 0;
  wallinghourpercentage = 0;
  plumbinghourpercentage = 0;
  electricalhourpercentage = 0;
  arealist: any[];
  modalDisplay = 'none';
  modalMaterialDisplay = 'none';
  project: Projects;
  specificTask: any[] = [];



  chartDate: string[] = undefined;
  dateArray: string[] = [];
  additionalDate: number;
  estimateDate: number;
  dateLabel: number;
  startDate: Date;
  guideline: number[] = [];
  timeEstimate: number;
  dayIndex: number;
  logcounter = 0;

  remainingTime: number[] = [];
  timeEstRemaining: number;
  dateSpan: number;
  date: Date ;
  checkDate: string;
  spentTime: number[] = [];
  timeEstSpent: number;


  constructor(private projectService: ProjectService, public router: Router, public route: ActivatedRoute,
    private tasklist: TaskService, private loghourlist: LoghourService, private areaservicelist: AreaService,
    private materiallist: MaterialService,  private _modalService: NgbModal) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.projectID = params['id'];
    });
    this.projectService.getProjects().then(data => this.projects = data);
    // tslint:disable-next-line:triple-equals
    // this.areaservicelist.currentList.subscribe(areaservicelist => this.areas = areaservicelist);

    this.projectService.getById(this.projectID).then((data: Projects) => this.project = data);





    this.materiallist.getMaterials().then(material => {
      _.forEach(material, element => {
        if (+element.projectID === +this.projectID) {
          this.materialsPerProject.push(element);
        }
      });
    });
    this.logcounter = 0;
    this.projectService.getProjects().then(project => {

      this.loghourlist.getLogHours().then(loghour => {
        _.forEach(loghour, dat => {

          if (+dat.projectId === +this.projectID) {
            this.logcounter++;
            this.projectstatus += dat.hoursLogged;
            if (dat.areaName === 'Woodwork') {
              this.totalwoodworkhours += dat.hoursLogged;
            }
            if (dat.areaName === 'Brickwork') {
              this.totalbrickworkhours += dat.hoursLogged;
            }
            if (dat.areaName === 'Construction') {
              this.totalconstructionhours += dat.hoursLogged;
            }
            if (dat.areaName === 'Walling') {
              this.totalwallinghours += dat.hoursLogged;
            }
            if (dat.areaName === 'Plumbing') {
              this.totalplumbinghours += dat.hoursLogged;
            }
            if (dat.areaName === 'Electricals') {
              this.totalelectricalhours += dat.hoursLogged;
            }

          }

        });

        this.additionalDate = (Math.trunc(project[this.projectID - 1].hourEstimate / (8 * 5)) * (8 * 2));
        this.estimateDate = project[this.projectID - 1].hourEstimate + this.additionalDate;
        this.dateLabel = Math.round(this.estimateDate / 8);
        this.startDate = new Date(loghour[0].timeStamp);

        for (let index = 0; index < this.dateLabel; index++) {
          if (this.chartDate === undefined) {
            this.chartDate = [];
            this.chartDate.push('');
            this.chartDate.push(moment(this.startDate).format('MMM-DD'));
            this.dateArray.push(moment(this.startDate).format('MM-DD-YYYY'));
          } else {
            this.chartDate.push(moment(this.startDate).format('MMM-DD'));
            this.dateArray.push(moment(this.startDate).format('MM-DD-YYYY'));
          }
          this.startDate.setDate(this.startDate.getDate() + 1);
        }

        this.timeEstimate = project[this.projectID - 1].hourEstimate;
        for (let index = 0; index < this.dateArray.length; index++) {
          this.guideline.push(this.timeEstimate);
          this.dayIndex = new Date(this.dateArray[index]).getDay();
          if (this.dayIndex > 0 && this.dayIndex < 6) {
            this.timeEstimate = this.timeEstimate - 8;
          }
        }

    this.remainingTime = [];
    this.timeEstRemaining = project[this.projectID - 1].hourEstimate;
    this.dateSpan = Math.ceil((new Date(loghour[this.logcounter].timeStamp).valueOf() - new Date(loghour[0].timeStamp).valueOf())
     / (1000 * 3600 * 24)) + this.logcounter + 2;

     console.log(this.logcounter);

     for (let index = 0; index <= this.dateSpan; index++) {
      this.remainingTime.push(this.timeEstRemaining);
      this.date = new Date(loghour[0].timeStamp);
      this.date.setDate(new Date(loghour[0].timeStamp).getDate() + index);
      this.checkDate = moment(this.date).format('MM-DD-YYYY');

      for ( let inIndex = 0; inIndex <  this.logcounter; inIndex++) {
        // console.log(this.checkDate + '---' + moment(new Date(loghour[inIndex].timeStamp)).format('MM-DD-YYYY'));
        if (this.checkDate === moment(new Date(loghour[inIndex].timeStamp)).format('MM-DD-YYYY')) {
          this.timeEstRemaining =  this.timeEstRemaining - loghour[inIndex].hoursLogged;

          break;
        }
      }
    }



    this.timeEstSpent = 0;
    for (let index = 0; index <= this.dateSpan; index++) {
      this.spentTime.push(this.timeEstSpent);
      this.date = new Date(loghour[0].timeStamp);
      this.date.setDate(new Date(loghour[0].timeStamp).getDate() + index);
      this.checkDate = moment(this.date).format('MM-DD-YYYY');
      for (let inIndex = 0; inIndex < loghour.length; inIndex++) {
        if (this.checkDate === moment(new Date(loghour[inIndex].timeStamp)).format('MM-DD-YYYY')) {
          this.timeEstSpent = this.timeEstSpent + loghour[inIndex].hoursLogged;
          break;
        }
      }
    }


        this.tasklist.getTasks().then(task => {
          _.forEach(task, dat => {
            if (+dat.projectID === +this.projectID) {
              this.totalareahourestimate += dat.hourEstimate;
              this.totalhours += dat.hourEstimate;
              this.specificTask.push(dat);
            }

          });
          this.woodworkhourpercentage = this.getAreaPercentage(this.totalwoodworkhours, this.totalareahourestimate);
          this.brickworkhourpercentage = this.getAreaPercentage(this.totalbrickworkhours, this.totalareahourestimate);
          this.contructionhourpercentage = this.getAreaPercentage(this.totalconstructionhours, this.totalareahourestimate);
          this.wallinghourpercentage = this.getAreaPercentage(this.totalwallinghours, this.totalareahourestimate);
          this.plumbinghourpercentage = this.getAreaPercentage(this.totalplumbinghours, this.totalareahourestimate);
          this.electricalhourpercentage = this.getAreaPercentage(this.totalelectricalhours, this.totalareahourestimate);
          this.totalhourpercentage = this.getAreaPercentage(this.projectstatus, project);

          _.forEach(project, dat => {
            if (+dat.projectID === +this.projectID) {
              this.totalhourpercentage = this.getAreaPercentage(this.projectstatus, dat.hourEstimate);
            }
          });
        }
        );
        // console.log(this.additionalDate + '-' + this.estimateDate + '-' + this.dateLabel + '-' + this.startDate);
        // console.log(this.chartDate + '-' + this.dateArray);
        // console.log(project[this.projectID - 1].hourEstimate);
        const ctx = <HTMLCanvasElement>document.getElementById('myChart');

        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.chartDate,
            datasets: [{
              label: 'Guideline',
              data: this.guideline,
              backgroundColor: [
                'rgba(255, 255, 255, 0)'
              ],
              borderColor: [
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              lineTension: 0,
              steppedLine: false,
              pointRadius: 0
            }, {
              label: 'Remaining Time',
              data: this.remainingTime,
              backgroundColor: [
                'rgba(255, 255, 255, 0)'
              ],
              borderColor: [
                'rgba(255,99,132,1)'
              ],
              borderWidth: 2,
              lineTension: 0,
              steppedLine: false,
              pointRadius: 0
            }, {
              label: 'Time Spent',
              data: this.spentTime,
              backgroundColor: [
                'rgba(255, 255, 255, 0)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 2,
              lineTension: 0,
              steppedLine: false,
              pointRadius: 0
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });

// console.log(this.totalareahourestimate);

        const areachart = <HTMLCanvasElement>document.getElementById('AreaChart');
        const materialCanvas = ctx.getContext('2d');

        const areaChart = new Chart(areachart, {
          type: 'bar',
          data: {
            labels: ['Construction', 'Woodwork', 'Brickwork', 'Walling', 'Plumbing', 'Electricals'],
            datasets: [{
              label: 'Total Hours spent',
              data: [this.totalconstructionhours, this.totalwoodworkhours, this.totalbrickworkhours,  this.totalwallinghours,
              this.totalplumbinghours, this.totalelectricalhours],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
      );
    });



  }

  getAreaPercentage(value1, value2) {
    let total: number;
    total = value1 / value2;
    total = Math.floor(total * 100);
    return total;
  }
  showModal() {
    this.modalDisplay = 'block';
  }
  closeModal() {
    this.modalDisplay = 'none';
  }
  showMaterialModal() {
    this.modalMaterialDisplay = 'block';
  }
  closeMaterialModal() {
    this.modalMaterialDisplay = 'none';
  }
  openCreateTaskModal() {
    this._modalService.open(TasksComponent).result.then((result) => {
        //     const id = +this.users[this.users.length - 1].id + 1;
        //     result.id = `${id}`;
        console.log(result);
        this.projects.push(result);
    }, (reason) => {
        console.log(reason);
    });
}
}

export interface ITaskApplication {
  areaName: string;
  projectID: number;
  asignee: string;
  task: string;
  taskID: number;
  dueDate: '17.01.22';
  hourEstimate: number;
  profPic: '/assets/images/employeeavatar.png';
}
