import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  user: User;
  defaultUserImagePlaceholder = "assets/imgs/user.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('user', this.user);
  }

}
