import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ProjectAddPage } from '../project-add/project-add';

@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

  projects = [
    {name: 'Projekt 1', percent: 63, src: "../assets/images/building1.jpg", cssClass: "project-container-blue"},
    {name: 'Projekt 2', percent: 5, src: "../assets/images/building2.jpg", cssClass: "project-container-yellow"}
  ]

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParam: NavParams) {
  }

  presentProjectModal() {
    let projectModal = this.modalCtrl.create(ProjectAddPage);
    projectModal.present();
    projectModal.onDidDismiss(
      objResult => {
        if(objResult !== undefined){
          let newProjects = {
            name:objResult.name,
            percent:0,
            src:"../assets/images/building2.jpg",
            cssClass:"project-container-yellow"
          }
          this.projects.push(newProjects);
        }
      }
    );
  }
}
