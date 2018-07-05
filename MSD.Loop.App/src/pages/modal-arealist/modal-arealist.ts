import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalArealistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-arealist',
  templateUrl: 'modal-arealist.html',
})
export class ModalArealistPage {

  areas: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController) {
        this.onInitAreas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalArealistPage');
  }

  onInitAreas(){
    this.areas = this.navParams.data
  }

  onCancel(){
    this.viewCtrl.dismiss();
  }

  getItems(ev: any){
    this.onInitAreas();

    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.areas = this.areas.filter((item)=>{
        return (item.areaName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  onSelection(area){
    this.viewCtrl.dismiss(area);
  }

}
