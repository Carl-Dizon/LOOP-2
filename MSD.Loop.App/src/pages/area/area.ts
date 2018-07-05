import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';

import { AreaProvider } from '../../providers/area/area';

import { IArea } from '../../models/IArea';

import { ModalArealistPage } from '../../pages/modal-arealist/modal-arealist';

interface acButtons {
  text: string,
  role?: string,
  handler: any
}

@IonicPage()
@Component({
  selector: 'page-area',
  templateUrl: 'area.html',
})
export class AreaPage {

  @ViewChild('barCanvas') canvas;

  viewAreaPageTitle: string = "";

  areas: IArea[] = [];
  area: IArea = {
    areaId: null,
    areaName: null,
    estimatedHours: null,
    totalHoursLogged: null,
    usersInHoursLogged: null,
    estimatedMaterials: null,
    totalMaterialsLogged: null,
    usersInMaterialsLogged: null,
    estimateCost: null,
    spentCost: null,
    materials: null
  };

  barChart: any;
  areaLabel: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private areaProvider: AreaProvider,
              private actionSheetCtrl: ActionSheetController,
              private modalCtrl: ModalController) {
                this.onLoadArea();
  }

  async onLoadArea(){
    this.areas = await this.areaProvider.getArea();
    this.areaLabel = this.areas[0].areaName;
    this.area = this.areas[0];
    this.viewAreaPageTitle = this.navParams.get('name');
    this.setBarChart(this.area);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaPage');
  }

  onSelectArea(){
    let areaListModule = this.modalCtrl.create(ModalArealistPage, this.areas);
    areaListModule.present();

    areaListModule.onDidDismiss(
      callback => {
        this.areaLabel = callback.areaName;
        this.area = callback;
        this.setBarChart(callback);
      }
    );
  }

  setBarChart(areaValue: IArea){
    let materialLabels: string[] = [];
    let materialCount: number[] = [];

    for(let index=0;index<areaValue.materials.length;index++){
      materialLabels.push(areaValue.materials[index].materialName);
      materialCount.push(areaValue.materials[index].usageCount);
    }

    this.barChart = new Chart(this.canvas.nativeElement, { // this.barCanvas.nativeElement
      type: 'bar',
      data: {
          labels: materialLabels,// ["Pipe", "Pumps", "Valves", "Coupling", "Elbow", "Drain"],
          datasets: [{
              label: '# of Materials',
              data: materialCount,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

    });
  }

  generateColor(completionPercentage) {
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

  getPercentage(usageAmount, estimatedAmount){
    let percentage = (usageAmount / estimatedAmount) * 100;
    return  Math.round(percentage);
  }

}
