import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalMaterialListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-material-list',
  templateUrl: 'modal-material-list.html',
})
export class ModalMaterialListPage {

  materials: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController) {
                this.onInitMaterials();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalArealistPage');
  }

  onInitMaterials(){
    this.materials = this.navParams.data;
  }

  onCancel(){
    this.viewCtrl.dismiss();
  }

  getItems(ev: any){
    this.onInitMaterials();

    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.materials = this.materials.filter((item)=>{
        return (item.materialName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  onSelection(material){
    this.viewCtrl.dismiss(material);
  }


}
