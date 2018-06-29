import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         ActionSheetController,
         AlertController } from 'ionic-angular';

import { ProjectProvider } from '../../providers/project/project';
import { AreaProvider } from '../../providers/area/area';

import { IProject } from '../../models/IProject';
import { IArea } from '../../models/IArea';

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

  projects: IProject[] = [];
  areas: IArea[] = [];

  date: string = new Date().toISOString();
  hours: string = '08:00';
  project: string;
  area: string;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private actionSheetCtrl: ActionSheetController,
              private projectProvider: ProjectProvider,
              private areaProvider: AreaProvider,
              private alertCtrl: AlertController) {
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

  onSave(){
    let saveAlert = this.alertCtrl.create({
      title: 'Success',
      subTitle: this.hours + ' Hours logged in ' + this.project + ', ' + this.area + ' area.',
      buttons: ['OK']
    });
    saveAlert.present();
  }

}
