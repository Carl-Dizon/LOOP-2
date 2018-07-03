import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogHourPage } from '../../pages/log-hour/log-hour';

/**
 * Generated class for the TaskViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-view',
  templateUrl: 'task-view.html',
})
export class TaskViewPage {

  issue = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskViewPage');
  }

  onAddLog(){
    this.navCtrl.push(LogHourPage);
  }

  getPercentage(issue){
    let percentage = (issue.hoursLogged / issue.timeEstimate) * 100;
    return Math.ceil(percentage);
  }

  getTimeRemaining(issue){
    let timeRemaining = issue.timeEstimate - issue.hoursLogged;
    return timeRemaining;
  }

  getColor(completionPercentage){
    let r =
      completionPercentage < 50
        ? 255
        : Math.floor(255 - ((completionPercentage * 2 - 100) * 255) / 100);
    let g =
      completionPercentage > 50
        ? 255
        : Math.floor((completionPercentage * 2 * 255) / 100);

    let color = 'rgb(' + r + ',0,' + g + ')';

    return color;
  }

}
