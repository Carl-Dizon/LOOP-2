import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskViewPage } from '../../pages/task-view/task-view';


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
        expireOn:'Deadline: July 5, 2018',
        statusNew: true,
        timeEstimate: 40,
        hoursLogged: 15,
        assignee: [
          {
            name:'Jessic Soho',
            role:'Member',
            imgSrc:''
          },
          {
            name:'Ernie Baron',
            role:'Member',
            imgSrc:''
          }
        ]
      },
      {
        title:'Prototype UI for project notification/issue page',
        subtitle:'Task-28',
        iconSrc:'../../assets/imgs/cute-profile-pics-for-whatsapp-images.png',
        expireOn:'Deadline: July 5, 2018',
        statusNew: true,
        timeEstimate: 48,
        hoursLogged: 12,
        assignee: [
          {
            name:'Rodrigo Duterte',
            role:'Carpenter',
            imgSrc:''
          },
          {
            name:'Sergio Osmeña',
            role:'Wood Artist',
            imgSrc:''
          }
        ]

      },
      {
        title:'Prototype UI for Area materials and hours logged',
        subtitle:'Task-29',
        iconSrc:'../../assets/imgs/unknown_user.png',
        expireOn:'Deadline: July 4, 2018',
        statusNew: false,
        timeEstimate: 32,
        hoursLogged: 24,
        assignee: [
          {
            name:'Noli De Castro',
            role:'Plumber',
            imgSrc:''
          }
        ]
      }
    ];
  }

  onTaskView(issue){
    let index = this.issues.findIndex(x => x.subtitle === issue.subtitle);
    this.issues[index].statusNew = false;
    this.navCtrl.push(TaskViewPage, issue);
  }

  getColor(status){
    if(status === true){
      return '#FFF0CA';
    } else {
      return 'white';
    }
  }

}
