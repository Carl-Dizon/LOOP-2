import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskViewPage } from '../../pages/task-view/task-view';
import {} from '../../assets/imgs/'

/**
 * Generated class for the IssuesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-issues',
  templateUrl: 'issues.html',
})
export class IssuesPage {

  issues = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssuesPage');

    this.issues = [
      {
        title:'Mobile UI for administering CRUD',
        subtitle:'Task-21',
        iconSrc:'../../assets/imgs/cute-profile-pics-for-whatsapp-images.png',
        expireOn:'Deadline: July 4, 2018'
      },
      {
        title:'Prototype UI for project notification/issue page',
        subtitle:'Task-28',
        iconSrc:'../../assets/imgs/cute-profile-pics-for-whatsapp-images.png',
        expireOn:'Deadline: July 4, 2018'
      },
      {
        title:'Prototype UI for Area materials and hours logged',
        subtitle:'Task-29',
        iconSrc:'../../assets/imgs/unknown_user.png',
        expireOn:'Deadline: July 4, 2018'
      }
    ];
  }

  onTaskView(){
    this.navCtrl.push(TaskViewPage);
  }

}
