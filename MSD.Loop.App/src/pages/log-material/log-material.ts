import { Component } from '@angular/core';
import { IonicPage, 
         NavController, 
         NavParams,
         ActionSheetController,
         AlertController,
         ModalController } from 'ionic-angular';

import { ProjectProvider } from '../../providers/project/project';
import { AreaProvider } from '../../providers/area/area';
import { MaterialProvider } from '../../providers/material/material';

import { ModalProjectListPage } from '../modal-project-list/modal-project-list';
import { ModalArealistPage } from '../modal-arealist/modal-arealist';
import { ModalMaterialListPage } from '../modal-material-list/modal-material-list';

// import { IProject } from '../../models/IProject';
// import { IArea } from '../../models/IArea';
// import { IMaterial } from '../../models/IMaterial';

interface acButtons {
  text: string,
  role?: string,
  handler: any
}

@IonicPage()
@Component({
  selector: 'page-log-material',
  templateUrl: 'log-material.html',
})
export class LogMaterialPage {

  projects: any[] = [];
  areas: any[] = [];
  materials: any[] = [];

  date: string = new Date().toISOString();
  hours: string = '08:00';
  project: string;
  area: string;
  material: string;
  unit: string;
  usage: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private actionSheetCtrl: ActionSheetController,
              private projectProvider: ProjectProvider,
              private areaProvider: AreaProvider,
              private materialProvider: MaterialProvider,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) {
                this.ionLoadProjects();
  }

  async ionLoadProjects(){
    this.projects = await this.projectProvider.getProjects();
    this.areas = await this.areaProvider.getArea();
    this.materials = await this.materialProvider.getMaterial();
    this.project = this.projects[0].projectName;
    this.area = this.areas[0].areaName;
    this.material = this.materials[0].materialName;
    this.unit = this.materials[0].unit;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogMaterialPage');
  }

  onProjectSelect(){
    let modalProjectSelection = this.modalCtrl.create(ModalProjectListPage, this.projects);
    modalProjectSelection.present();

    modalProjectSelection.onDidDismiss(
      callBack => {
        if(callBack !== undefined && callBack !== null){
          this.project = callBack.projectName;
        }
      }
    );
  }

  onAreaSelect(){
    let modalAreaList = this.modalCtrl.create(ModalArealistPage, this.areas);
    modalAreaList.present();

    modalAreaList.onDidDismiss(
      callBack => {
        if(callBack !== undefined && callBack !== null){
          this.area = callBack.areaName;
        }
      }
    );
  }

  onMaterialSelect(){
    let modalMaterialList = this.modalCtrl.create(ModalMaterialListPage, this.materials);
    modalMaterialList.present();

    modalMaterialList.onDidDismiss(
      callBack => {
        if(callBack !== undefined && callBack !== null){
          this.material = callBack.materialName;
        }
      }
    );
  }

  onSave(){
    let saveAlert = this.alertCtrl.create({
      title: 'Success',
      subTitle: this.usage + ' ' + this.unit + ' of ' + this.material + ' has been logged.',
      buttons: ['OK']
    });
    saveAlert.present();
  }

}
