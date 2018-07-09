import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { env } from '../../app/env';
import { AreaPage } from '../area/area';
import { Chart } from 'chart.js';
import { LoggedProvider } from '../../providers/logged/logged';

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
  projects: any;

  isListView: boolean = false;

  completionPercentage: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private logProvider: LoggedProvider) {
    this.projects = [
      {
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
        usedMaterialPercentage: 0
      },
      {
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
        usedMaterialPercentage: 0
      },
      {
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
        usedMaterialPercentage: 0
      }
    ];

    this.isListView = true;
  }

  onProjectAreaView(project){
    this.navCtrl.push(AreaPage, project);
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

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

  async onChart(){
    let logs = await this.logProvider.getProjectLog();
    let remainingTime: number[] = [];
    let estimateHours = this.projects[0].totalEstimatedHours;

    for(let index=0;index<logs.length;index++){
      let averageTime = logs[index].hoursLogged / 8;
      for(let inIndex=0;inIndex<8;inIndex++){
        remainingTime.push(estimateHours);
        estimateHours = estimateHours - averageTime;
      }
    }

    let estimatedHours: string[] = [];
    let guideline: number[] = [];
    for(let index=0;index <this.projects[0].totalEstimatedHours;index++){
      if((index + 1) % 40 !== 0){
        guideline.push(this.projects[0].totalEstimatedHours - index);
        if((index) % 8 === 0){
          estimatedHours.push('day label');
        } else {
          estimatedHours.push('');
        }
      } else {
        for(let innerIndex=0;innerIndex<16;innerIndex++){
          guideline.push(this.projects[0].totalEstimatedHours - index);
          estimatedHours.push('');
        }
      }
    }
    setTimeout(() => {
      let ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: 'line',
        data: {
            labels: estimatedHours,
            datasets: [{
              label: 'Guideline',
              data: guideline,
              backgroundColor: [
                  'rgba(255, 255, 255, 0)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              lineTension:0,
              pointRadius: 0
              },{
                label: 'Remaing Values',
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
              data: [0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,16,16,16,16,16,16,16,16],
              backgroundColor: [
                  'rgba(255, 255, 255, 0)'
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1,
              lineTension:0,
              steppedLine: true,
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
