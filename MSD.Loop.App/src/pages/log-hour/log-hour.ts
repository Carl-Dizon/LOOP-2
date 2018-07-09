import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         ActionSheetController,
         AlertController,
         ModalController } from 'ionic-angular';

import { ProjectProvider } from '../../providers/project/project';
import { AreaProvider } from '../../providers/area/area';

import { ModalArealistPage } from '../modal-arealist/modal-arealist';
import { ModalProjectListPage } from '../modal-project-list/modal-project-list';

// import { IProject } from '../../models/IProject';
// import { IArea } from '../../models/IArea';

interface acButtons {
  text: string,
  role?: string,
  handler: any
}

@IonicPage()
@Component({
  selector: 'page-log-hour',
  templateUrl: 'log-hour.html',
})

export class LogHourPage {

  projects: any[] = [];
  areas: any[] = [];

  date: string = new Date().toISOString();
  hours: string = '08:00';
  project: string;
  area: string;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private actionSheetCtrl: ActionSheetController,
              private projectProvider: ProjectProvider,
              private areaProvider: AreaProvider,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) {
                this.ionLoadProjects();
  }

  async ionLoadProjects(){
    this.projects = await this.projectProvider.getProjects();
    this.areas = await this.areaProvider.getArea();
    this.project = this.projects[0].projectName;
    this.area = this.areas[0].areaName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogHourPage');
  }

  onProjectSelect(){
    let projectPageModal = this.modalCtrl.create(ModalProjectListPage, this.projects);
    projectPageModal.present();

    projectPageModal.onDidDismiss(
      callBack => {
        if(callBack !== undefined && callBack !== null){
          this.project = callBack.projectName;
        }
      }
    );

  }

  onAreaSelect(){
    let areaPageModal = this.modalCtrl.create(ModalArealistPage, this.areas);
    areaPageModal.present();

    areaPageModal.onDidDismiss(
      callBack => {
        if(callBack !== undefined && callBack !== null){
          this.area = callBack.areaName;
        }
      }
    );

  }

  onSave(){
    let saveAlert = this.alertCtrl.create({
      title: 'Success',
      subTitle: this.hours + ' Hours logged in ' + this.project + ', ' + this.area + ' area.',
      buttons: ['OK']
    });
    saveAlert.present();
  }

}
