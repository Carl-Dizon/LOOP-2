import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { env } from '../../app/env';
import { AreaPage } from '../area/area';
import { ProjectTasksPage } from '../project-tasks/project-tasks';
import { Chart } from 'chart.js';
import { LoggedProvider } from '../../providers/logged/logged';
import * as moment from 'moment/moment';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage {

  isLoading: boolean = true;
  defaultProjectImagePlaceholder = env.DEFAULT.projectImagePlaceholder;

  onTimeIndicatorSvg = env.DEFAULT.onTimeIndicatorUrl;
  delayIndicatorSvg = env.DEFAULT.delayIndicatorUrl;
  criticalIndicatorSvg = env.DEFAULT.criticalIndicatorUrl;

  indicatorUrl;

  projects: any;

  isListView: boolean = false;

  completionPercentage: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private logProvider: LoggedProvider) {
    this.projects = [
      {
        id: 1,
        name: 'Project 1',
        totalTasks: 59,
        completedTasks: 34,
        totalEstimatedHours: 150,
        currentHoursLogged: 89,
        totalEstimatedMaterial: 500,
        usedMaterials: 280,
        costEstimate: 2000000000,
        totalSpent: 1100000000,
        completionPercentage: 0,
        hourCompletionPercentage: 0,
        costEstimateSpentPercentage: 0,
        usedMaterialPercentage: 0,
        remainingWorkHours: 18,
        remainingWorkDays: 2
      },
      {
        id: 2,
        name: 'Project 2',
        totalTasks: 35,
        completedTasks: 35,
        totalEstimatedHours: 82,
        currentHoursLogged: 82,
        totalEstimatedMaterial: 300,
        usedMaterials: 300,
        costEstimate: 50000,
        totalSpent: 50000,
        completionPercentage: 0,
        hourCompletionPercentage: 0,
        costEstimateSpentPercentage: 0,
        usedMaterialPercentage: 0,
        remainingWorkHours: 40,
        remainingWorkDays: 5
      },
      {
        id: 3,
        name: 'Project 3',
        totalTasks: 120,
        completedTasks: 10,
        totalEstimatedHours: 240,
        currentHoursLogged: 20,
        totalEstimatedMaterial: 200,
        usedMaterials: 20,
        costEstimate: 200000,
        totalSpent: 11000,
        completionPercentage: 0,
        hourCompletionPercentage: 0,
        costEstimateSpentPercentage: 0,
        usedMaterialPercentage: 0,
        remainingWorkHours: 40,
        remainingWorkDays: 1
      }
    ];

    this.isListView = true;
  }

  onProjectAreaView(project){
    this.navCtrl.push(ProjectTasksPage, {project: project});
  }

  ionViewDidLoad() {

    this.isLoading = false;

    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);

    this.projects.forEach(element => {
      element.completionPercentage = this.calculateProjectCompletionBasedOnTasks(
        element.totalTasks,
        element.completedTasks
      );
    });

    this.projects.forEach(element => {
      element.hourCompletionPercentage = this.calculateProjectCompletionBasedOnTasks(
        element.totalEstimatedHours,
        element.currentHoursLogged
      )
    });

    this.projects.forEach(element => {
      element.usedMaterialPercentage = this.calculateProjectCompletionBasedOnTasks(
        element.totalEstimatedMaterial,
        element.usedMaterials
      )
    });

    this.projects.forEach(element => {
      element.costEstimateSpentPercentage = this.calculateProjectCompletionBasedOnTasks(
        element.costEstimate,
        element.totalSpent
      )
    });

    console.log('ionViewDidLoad ProjectsPage');

  }

  calculateProjectCompletionBasedOnTasks(totalTasks, completedTasks) {
    this.completionPercentage = (completedTasks / totalTasks) * 100;
    return Math.ceil(this.completionPercentage);
  }

  getColor(completionPercentage){
    let strColor = this.generateColor(completionPercentage);
    return strColor.color;
  }

  generateColor(completionPercentage) {
    let r =
      completionPercentage < 50
        ? 255
        : Math.floor(255 - ((completionPercentage * 2 - 100) * 255) / 100);
    let g =
      completionPercentage > 50
        ? 255
        : Math.floor((completionPercentage * 2 * 255) / 100);

    let style = {
      color: 'rgb(' + r + ',' + g + ',0)'
    };

    return style;
  }

  switchView(){
    this.isListView = !this.isListView;
    if(!this.isListView){
      this.onChart();
    }
  }

  abbrNum(number, decPlaces) {
    decPlaces = Math.pow(10,decPlaces);
    var abbrev = [ "k", "m", "b", "t" ];

    for (var i=abbrev.length-1; i>=0; i--) {
        var size = Math.pow(10,(i+1)*3);
        if(size <= number) {
             number = Math.round(number*decPlaces/size)/decPlaces;
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }
             number += abbrev[i];
             break;
        }
    }

    return number;
  }

  determineProjectProgress(remainingWorkHours, remainingWorkDays){
    let tmp = (remainingWorkDays ) / remainingWorkHours;
    tmp = 100 - (tmp * 100);
    if(tmp < 20 && tmp != 0){
      this.indicatorUrl = this.delayIndicatorSvg;
    }else if(tmp === 0){
      this.indicatorUrl = this.onTimeIndicatorSvg;
    }else{
      this.indicatorUrl = this.criticalIndicatorSvg;
    }

    return this.indicatorUrl;
  }

  async onChart(){
    let logs = await this.logProvider.getProjectLog();

    let chartDate: string[] = undefined;
    let dateArray: string[] = [];
    let additionalDate: number = (Math.trunc(this.projects[0].totalEstimatedHours / (8 * 5)) * (8 * 2));
    let estimateDate: number = this.projects[0].totalEstimatedHours + additionalDate;
    let dateLabel: number = Math.round(estimateDate / 8);
    let startDate: Date = new Date(logs[0].timeStamp);
    for(let index=0;index<dateLabel;index++){
      if(chartDate === undefined){
        chartDate = [];
        chartDate.push('');
        chartDate.push(moment(startDate).format('MMM-DD'));
        dateArray.push(moment(startDate).format('MM-DD-YYYY'));
      } else {
        chartDate.push(moment(startDate).format('MMM-DD'));
        dateArray.push(moment(startDate).format('MM-DD-YYYY'));
      }
      startDate.setDate(startDate.getDate() + 1);
    }

    //Guideline
    let guideline: number[] = [];
    let timeEstimate: number = this.projects[0].totalEstimatedHours;
    for(let index=0;index<dateArray.length;index++){
      guideline.push(timeEstimate);
      let dayIndex = new Date(dateArray[index]).getDay();
      if(dayIndex > 0 && dayIndex < 6){
        timeEstimate = timeEstimate - 8;
      }
    }

    //remainingTime --TODO refactor
    let remainingTime: number[] = [];
    let timeEstRemaining: number = this.projects[0].totalEstimatedHours;
    let dateSpan: number = Math.ceil((new Date(logs[logs.length - 1].timeStamp).valueOf() - new Date(logs[0].timeStamp).valueOf()) / (1000 * 3600 * 24)) + 1;

    for(let index=0;index<=dateSpan;index++){
      remainingTime.push(timeEstRemaining);
      let date: Date = new Date(logs[0].timeStamp);
      date.setDate(new Date(logs[0].timeStamp).getDate() + index);
      let checkDate: string = moment(date).format('MM-DD-YYYY');
      for(let inIndex=0;inIndex<logs.length;inIndex++){
        if(checkDate === moment(new Date(logs[inIndex].timeStamp)).format('MM-DD-YYYY')){
          timeEstRemaining = timeEstRemaining - logs[inIndex].hoursLogged;
          break;
        }
      }
    }

    //spentTime
    let spentTime: number[] = [];
    let timeEstSpent: number = 0;
    
    for(let index=0;index<=dateSpan;index++){
      spentTime.push(timeEstSpent);
      let date: Date = new Date(logs[0].timeStamp);
      date.setDate(new Date(logs[0].timeStamp).getDate() + index);
      let checkDate: string = moment(date).format('MM-DD-YYYY');
      for(let inIndex=0;inIndex<logs.length;inIndex++){
        if(checkDate === moment(new Date(logs[inIndex].timeStamp)).format('MM-DD-YYYY')){
          timeEstSpent = timeEstSpent + logs[inIndex].hoursLogged;
          break;
        }
      }
    }

    setTimeout(() => {
      let ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartDate,//estimatedHours,
            datasets: [{
              label: 'Guideline',
              data: guideline,//guideline,
              backgroundColor: [
                  'rgba(255, 255, 255, 0)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              lineTension:0,
              steppedLine: false,
              pointRadius: 0
              },{
                label: 'Remaining Values',
                data: remainingTime,
                backgroundColor: [
                    'rgba(255, 255, 255, 0)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 2,
                lineTension:0,
                steppedLine: false,
                pointRadius: 0
              },{
              label: 'Time Spent',
              data: spentTime,
              backgroundColor: [
                  'rgba(255, 255, 255, 0)'
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 2,
              lineTension:0,
              steppedLine: false,
              pointRadius: 0
          }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
      });
    }, 0);

  }
}
