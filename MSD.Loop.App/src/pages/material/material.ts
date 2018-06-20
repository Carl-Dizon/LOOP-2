import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
})
export class MaterialPage {

  addDisabled: boolean = true;

  materialList = [
    {name: 'Angle Bar', value:'anglebar'},
    {name: 'Pipe', value: 'pipe'},
    {name: 'Elbow Pipe', value: 'elbowpipe'}
  ];

  materials: string = this.materialList[0].value;

  material = {
    name: this.materialList[0].name,
    value: this.materialList[0].value
  };

  materialQty: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialPage');
  }

  textOnChange(){
    if(this.materialQty === undefined || this.materialQty.toString() === ""){
      this.addDisabled = true;
    } else {
      this.addDisabled = false;
    }
  }

  onChange() {
    for(let index=0;index < this.materialList.length;index++){
      if(this.materials === this.materialList[index].value){
        this.material.name = this.materialList[index].name;
        this.material.value = this.materialList[index].value;
        break;
      }
    }
  }

  onAdd() {
    let selectedMaterial = {
      name: this.material.name,
      value: this.material.value,
      count: this.materialQty
    }
    this.viewCtrl.dismiss(selectedMaterial);
  }

  onCancel() {
    this.viewCtrl.dismiss();
  }

}
