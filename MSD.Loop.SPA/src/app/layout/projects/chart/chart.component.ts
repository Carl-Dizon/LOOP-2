import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { Route, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../shared/services/tasks/task.service';
import { LoghourService } from '../../../shared/services/loghours/loghour.service';
import { AreaService } from '../../../shared/services/areas/area.service';
import { MaterialService } from '../../../shared/services/materials/material.service';
import { ProjectService } from '../../../shared/services';
import Chart from 'chart.js';
import * as moment from 'moment/moment';
import * as _ from 'lodash';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  animations: [routerTransition()]
})
export class ChartComponent implements OnInit {
  private sub: any;
  projectID: number;
  totalhours: number;
  logcounter = 0;
  chartDate: string[] = undefined;
  dateArray: string[] = [];
  additionalDate: number;
  estimateDate: number;
  dateLabel: number;
  startDate: Date;
  guideline: number[] = [];
  timeEstimate: number;
  dayIndex: number;

  remainingTime: number[] = [];
  timeEstRemaining: number;
  dateSpan: number;
  date: Date;
  checkDate: string;
  spentTime: number[] = [];
  timeEstSpent: number;

  constructor(private projectService: ProjectService, public router: Router, public route: ActivatedRoute,
    private tasklist: TaskService, private loghourlist: LoghourService, private areaservicelist: AreaService,
    private materiallist: MaterialService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.projectID = params['id'];
    });
    this.projectService.getProjects().then(project => {
      _.forEach(project, dat => {
        if (+dat.projectID === +this.projectID) {
          this.totalhours += dat.hourEstimate;
        }

      });

      this.loghourlist.getLogHours().then(loghour => {
        _.forEach(loghour, dat => {
          if (+dat.projectId === +this.projectID) {
              this.logcounter++;
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
        console.log(this.chartDate);
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

        for (let index = 0; index <= this.dateSpan; index++) {
          this.remainingTime.push(this.timeEstRemaining);
          this.date = new Date(loghour[0].timeStamp);
          this.date.setDate(new Date(loghour[0].timeStamp).getDate() + index);
          this.checkDate = moment(this.date).format('MM-DD-YYYY');
          for (let inIndex = 0; inIndex < this.logcounter; inIndex++) {
            if (this.checkDate === moment(new Date(loghour[inIndex].timeStamp)).format('MM-DD-YYYY')) {
              this.timeEstRemaining = this.timeEstRemaining - loghour[inIndex].hoursLogged;
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

        const ctx = <HTMLCanvasElement>document.getElementById('myChart');
        const canvas = ctx.getContext('2d');

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
      });
    });

  }
}
