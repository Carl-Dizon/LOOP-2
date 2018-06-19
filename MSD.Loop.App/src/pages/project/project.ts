import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ProjectAddPage } from '../project-add/project-add';

@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

  projectSort: string = 'prjName';

  projects = [
    {name: 'Projekt 1', percent: 63, src: "../assets/images/building1.jpg", cssClass: "project-container-blue", badge: true, badgeValue: 3},
    {name: 'Projekt 2', percent: 5, src: "../assets/images/building2.jpg", cssClass: "project-container-yellow", badge: false, badgeValue: 6}
  ]

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParam: NavParams) {
  }

  presentProjectAddModal() {
    let projectModal = this.modalCtrl.create(ProjectAddPage);
    projectModal.present();
    projectModal.onDidDismiss(
      objResult => {
        if(objResult !== undefined){
          let newProjects = {
            name:objResult.name,
            percent:0,
            src:"../assets/images/building2.jpg",
            cssClass:"project-container-yellow",
            badge: false,
            badgeValue: 0
          }
          this.projects.push(newProjects);
        }
      }
    );
  }

  sort() {
    if(this.projectSort === 'prjName'){
      this.projects = this.projects.sort((n1,n2) => {
        if (n1.name > n2.name) {
            return 1;
        }
    
        if (n1.name < n2.name) {
            return -1;
        }
    
        return 0;
      });
    } else {
      this.projects = this.projects.sort((n1,n2) => {
        if (n1.percent > n2.percent) {
            return 1;
        }
    
        if (n1.percent < n2.percent) {
            return -1;
        }
    
        return 0;
      });
    }

  }
}
