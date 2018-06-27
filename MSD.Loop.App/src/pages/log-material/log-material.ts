import { Component } from '@angular/core';
import { IonicPage, 
         NavController, 
         NavParams,
         ActionSheetController,
         AlertController } from 'ionic-angular';

import { ProjectProvider } from '../../providers/project/project';
import { AreaProvider } from '../../providers/area/area';
import { MaterialProvider } from '../../providers/material/material';

import { IProject } from '../../models/IProject';
import { IArea } from '../../models/IArea';
import { IMaterial } from '../../models/IMaterial';

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

  projects: IProject[];
  areas: IArea[];
  materials: IMaterial[];

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
              private alertCtrl: AlertController) {
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
    let actionButtons: acButtons[] = [];
    for(let index=0;index<this.projects.length;index++){
      let button: acButtons = {
        text: this.projects[index].projectName,
        handler: () => {
          this.project = this.projects[index].projectName
        }
      }
      actionButtons.push(button);
    }

    let cancelButton: acButtons = {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
  
      }
    }
    actionButtons.push(cancelButton);

    const projectActionSheet = this.actionSheetCtrl.create({
      title: 'Projects',
      buttons: actionButtons
    });
    projectActionSheet.present();
  }

  onAreaSelect(){
    let actionButtons: acButtons[] = [];
    for(let index=0;index<this.areas.length;index++){
      let button: acButtons = {
        text: this.areas[index].areaName,
        handler: () => {
          this.area = this.areas[index].areaName
        }
      }
      actionButtons.push(button);
    }

    let cancelButton: acButtons = {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
  
      }
    }
    actionButtons.push(cancelButton);

    const areaActionSheet = this.actionSheetCtrl.create({
      title: 'Areas',
      buttons: actionButtons
    });
    areaActionSheet.present();
  }

  onMaterialSelect(){
    let actionButtons: acButtons[] = [];
    for(let index=0;index<this.materials.length;index++){
      let button: acButtons = {
        text: this.materials[index].materialName,
        handler: () => {
          this.material = this.materials[index].materialName;
          this.unit = this.materials[index].unit;
        }
      }
      actionButtons.push(button);
    }

    let cancelButton: acButtons = {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
  
      }
    }
    actionButtons.push(cancelButton);

    const materialActionSheet = this.actionSheetCtrl.create({
      title: 'Materials',
      buttons: actionButtons
    });
    materialActionSheet.present();
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
