import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskProvider } from '../../providers/task/task';
import { AreaProvider } from '../../providers/area/area';
import { env } from '../../app/env';

/**
 * Generated class for the ProjectTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-tasks',
  templateUrl: 'project-tasks.html'
})
export class ProjectTasksPage {
  projectTasks = [];
  allTasks;
  project;
  projectAreas;

  onTimeIndicatorSvg = env.DEFAULT.onTimeIndicatorUrl;
  delayIndicatorSvg = env.DEFAULT.delayIndicatorUrl;
  criticalIndicatorSvg = env.DEFAULT.criticalIndicatorUrl;

  indicatorUrl;

  selectedAreas: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskProvider: TaskProvider,
    private areaProvider: AreaProvider
  ) {
    this.selectedAreas = ['All'];
    this.project = this.navParams.get('project');
    this.getTasksById(this.project.id);
    this.getProjectAreas();
  }

  ionViewDidLoad() {
    // this.project = this.navParams.get('project');
    // this.getTasksById(this.project.id);
    // this.getProjectAreas();
  }

  getTasksById(projectId) {
    this.taskProvider.getTasksByProject(projectId).then(tasks => {
      this.allTasks = tasks;
      this.projectTasks = this.allTasks;
      this.sortTasksByUrgency();
    });
  }

  getProjectAreas() {
    this.areaProvider.getArea().then(areas => {
      this.projectAreas = areas;
    });
  }

  changeSelectedArea($event) {
    this.projectTasks = this.allTasks.filter(x => {
      return this.selectedAreas.length
        ? this.selectedAreas.indexOf(x.areaId) != -1
        : this.allTasks;
    });

    console.log('filter', this.projectTasks)
  }

  getIndicatorUrl(status) {
    switch (status) {
      case 'on-time':
        this.indicatorUrl = this.onTimeIndicatorSvg;
        break;
      case 'delayed':
        this.indicatorUrl = this.delayIndicatorSvg;
        break;
      case 'critical':
        this.indicatorUrl = this.criticalIndicatorSvg;
        break;
      default:
        break;
    }

    return this.indicatorUrl;
  }

  sortTasksByUrgency() {
    this.allTasks.sort((a, b) => {
      if (a.taskStatus < b.taskStatus) {
        return -1;
      }

      if (a.taskStatus > b.taskStatus) {
        return 1;
      }

      return 0;
    });
  }
}
