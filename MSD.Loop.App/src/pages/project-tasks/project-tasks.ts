import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskProvider } from '../../providers/task/task';
import { AreaProvider } from '../../providers/area/area';

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

  tasks;
  project;
  projectAreas;

  selectedAreas: Array<string>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskProvider: TaskProvider,
    private areaProvider: AreaProvider
  ) {
    this.project  = navParams.get('project');
    this.getTasksById(this.project.id);
    this.getProjectAreas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectTasksPage');
  }

  getTasksById(projectId){
    this.taskProvider.getTasksByProject(projectId).then(tasks => {
      this.tasks = tasks;
    });
  }

  getProjectAreas(){
    this.areaProvider.getArea().then( areas => {
      this.projectAreas = areas;
      console.log('areas', this.projectAreas);
    });
  }
}
