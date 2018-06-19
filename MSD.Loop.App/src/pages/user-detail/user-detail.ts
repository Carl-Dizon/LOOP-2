import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import { UpdateUserModalPage } from '../update-user-modal/update-user-modal';

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
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('user', this.user);
  }

  openUpdateUserModal(user: User){
    let updateUserModal = this.modalCtrl.create(UpdateUserModalPage, { user: user });
    updateUserModal.onDidDismiss(data => {
      if (data) {
        // console.log('update data', data);
      }
    });

    updateUserModal.present();
  }

}
