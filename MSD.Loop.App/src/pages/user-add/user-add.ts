import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UserAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-add',
  templateUrl: 'user-add.html',
})
export class UserAddPage {

  users = [
    {name: 'Nancy McDonie', role: 'Project Manager', imgSrc: '../../assets/imgs/nancy.jpg'},
    {name: 'Liza Soberano', role: 'Member', imgSrc: '../../assets/imgs/liza.jpg'}
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddPage');
  }

  onAdd(user: any) {
    this.viewCtrl.dismiss(user);
  }

  onCancel() {
    this.viewCtrl.dismiss();
  }

}
