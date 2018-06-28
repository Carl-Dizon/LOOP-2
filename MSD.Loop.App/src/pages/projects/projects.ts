import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { env } from '../../app/env';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projects = [
      {
        name: 'Project 1',
        totalTasks: 59,
        completedTasks: 34,
        totalEstimatedHours: 150,
        currentHoursLogged: 89,
        completionPercentage: 0
      },
      {
        name: 'Project 2',
        totalTasks: 35,
        completedTasks: 35,
        totalEstimatedHours: 82,
        currentHoursLogged: 82,
        completionPercentage: 0
      },
      {
        name: 'Project 3',
        totalTasks: 120,
        completedTasks: 10,
        totalEstimatedHours: 240,
        currentHoursLogged: 20,
        completionPercentage: 0
      }
    ];

    this.isListView = true;
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

    console.log('ionViewDidLoad ProjectsPage');
  }

  calculateProjectCompletionBasedOnTasks(totalTasks, completedTasks) {
    this.completionPercentage = (completedTasks / totalTasks) * 100;

    return this.completionPercentage;
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
  }
}
